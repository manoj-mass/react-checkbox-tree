import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Select, { components } from "react-select";
import Button from './Button';
import NativeCheckbox from './NativeCheckbox';
import iconsShape from './shapes/iconsShape';
import languageShape from './shapes/languageShape';


class TreeNode extends React.Component {
    static propTypes = {
        checked: PropTypes.number.isRequired,
        disabled: PropTypes.bool.isRequired,
        expandDisabled: PropTypes.bool.isRequired,
        expanded: PropTypes.bool.isRequired,
        icons: iconsShape.isRequired,
        isLeaf: PropTypes.bool.isRequired,
        isParent: PropTypes.bool.isRequired,
        label: PropTypes.node.isRequired,
        lang: languageShape.isRequired,
        optimisticToggle: PropTypes.bool.isRequired,
        showNodeIcon: PropTypes.bool.isRequired,
        treeId: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]).isRequired,
        onCheck: PropTypes.func.isRequired,
        onExpand: PropTypes.func.isRequired,
        onRate: PropTypes.func,
        onHotelRate: PropTypes.func,
        treeDepth: PropTypes.number.isRequired,
        children: PropTypes.node,
        className: PropTypes.string,
        expandOnClick: PropTypes.bool,
        icon: PropTypes.node,
        showCheckbox: PropTypes.bool,
        toggelInputs: PropTypes.bool,
        toggelHotelInputs: PropTypes.bool,
        title: PropTypes.string,
        onClick: PropTypes.func,
        rateList: PropTypes.array,
        inputValue: PropTypes.string,
        multiInputValue: PropTypes.array
    };

    static defaultProps = {
        children: null,
        className: null,
        expandOnClick: false,
        icon: null,
        showCheckbox: true,
        title: null,
        onClick: () => { },
    };

    constructor(props) {
        super(props);
        this.state = {
            rate: props.inputValue,
            hotelRates: props.multiInputValue?.map(data => ({'value': data, 'label': props.rateList?.find(rate => rate.value === data)?.label }) ),
            isClearable: false,
            isDisabled: false,
            isLoading: false,
            isRtl: false,
            isSearchable: true,
        }
        this.onCheck = this.onCheck.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onExpand = this.onExpand.bind(this);
        this.onRateChangeHandler = this.onRateChangeHandler.bind(this);
        this.onChangeCallback = this.onChangeCallback.bind(this);
    }

    componentDidUpdate(prevProps) {
       // console.log("hello world... ", this.props.multiInputValue, prevProps.multiInputValue)
        if (this.props.multiInputValue !==
          prevProps.multiInputValue && this.props.treeDepth === 0) {
          this.setState({ hotelRates: this.props.multiInputValue?.map(data => ({'value': data, 'label': this.props.rateList?.find(rate => rate.value === data)?.label }) ) || [] })
        }
      }

    onCheck() {
        const { value, onCheck } = this.props;

        onCheck({ value, checked: this.getCheckState({ toggle: true }), rate: this.state.rate });
    }

    onRateChangeHandler(e) {
        this.setState({ rate: e.value });
        const { value, onRate } = this.props;
       // console.log('e', e, value);

        onRate({ hotel: value, rate: e.value });
    }

    onChangeCallback(data) {
        // console.log("data: ", data)
        this.setState({ hotelRates: data });

        const { value, onHotelRate } = this.props;
        onHotelRate({ hotel: value, rates: data })
    }
    onClick() {
        const {
            expandOnClick,
            isParent,
            value,
            onClick,
        } = this.props;

        // Auto expand if enabled
        if (isParent && expandOnClick) {
            this.onExpand();
        }

        onClick({ value, checked: this.getCheckState({ toggle: false }), rate: this.state.rate });
    }

    onExpand() {
        const { expanded, value, onExpand } = this.props;

        onExpand({ value, expanded: !expanded });
    }

    getCheckState({ toggle }) {
        const { checked, optimisticToggle } = this.props;

        // Toggle off state to checked
        if (checked === 0 && toggle) {
            return true;
        }

        // Node is already checked and we are not toggling
        if (checked === 1 && !toggle) {
            return true;
        }

        // Get/toggle partial state based on cascade model
        if (checked === 2) {
            return optimisticToggle;
        }

        return false;
    }

    renderCollapseButton() {
        const { expandDisabled, isLeaf, lang } = this.props;

        if (isLeaf) {
            return (
                <span className="rct-collapse" style={{minWidth: '24px'}}>
                    <span className="rct-icon" />
                </span>
            );
        }

        return (
            <Button
                className="rct-collapse rct-collapse-btn"
                disabled={expandDisabled}
                title={lang.toggle}
                onClick={this.onExpand}
            >
                {this.renderCollapseIcon()}
            </Button>
        );
    }

    renderCollapseIcon() {
        const { expanded, icons: { expandClose, expandOpen } } = this.props;

        if (!expanded) {
            return expandClose;
        }

        return expandOpen;
    }

    renderCheckboxIcon() {
        const { checked, icons: { uncheck, check, halfCheck } } = this.props;

        if (checked === 0) {
            return uncheck;
        }

        if (checked === 1) {
            return check;
        }

        return halfCheck;
    }

    renderNodeIcon() {
        const {
            expanded,
            icon,
            icons: { leaf, parentClose, parentOpen },
            isLeaf,
        } = this.props;

        if (icon !== null) {
            return icon;
        }

        if (isLeaf) {
            return leaf;
        }

        if (!expanded) {
            return parentClose;
        }

        return parentOpen;
    }

    renderBareLabel(children) {
        const { onClick, title } = this.props;
        const clickable = onClick !== null;

        return (
            <span className="rct-bare-label" title={title}>
                {clickable ? (
                    <span
                        className="rct-node-clickable"
                        onClick={this.onClick}
                        onKeyPress={this.onClick}
                        role="button"
                        tabIndex={0}
                    >
                        {children}
                    </span>
                ) : children}
            </span>
        );
    }

    renderCheckboxLabel(children) {
        const {
            checked,
            disabled,
            title,
            treeId,
            value,
            onClick,
            treeDepth, toggelInputs, rateList, toggelHotelInputs

        } = this.props;
        const {
            isClearable,
            isSearchable,
            isDisabled,
            isLoading,
            isRtl,
          } = this.state;
        const clickable = onClick !== null;
        const inputId = `${treeId}-${String(value).split(' ').join('_')}`;
        const Option = props => (
            <div>
              <components.Option {...props} style={{ display: 'flex'}}>
                <input style={{display: 'flex'}} type="checkbox" checked={props.isSelected} onChange={() => null} />{" "}
                <label>{props.label}</label>
              </components.Option>
            </div>
          );

          const MultiValue = props => (
            <components.MultiValue {...props}>
              <span>{props.data.label}</span>
            </components.MultiValue>
          );

          const CustomStyle = {
            option: (base, state) => ({
              ...base,
              backgroundColor: '#ccc',
            })
          }

        const render = [(
            <>
            <label key={0} htmlFor={inputId} title={title} style={{ width: treeDepth === 0 ? `40%` : `100%` }}>
                <NativeCheckbox
                    checked={checked === 1}
                    disabled={disabled}
                    id={inputId}
                    indeterminate={checked === 2}
                    onClick={this.onCheck}
                    onChange={() => { }}
                />
                <span className="rct-checkbox">
                    {this.renderCheckboxIcon()}
                </span>
                {!clickable ? children : null}
            </label>
            { treeDepth === 0 && toggelHotelInputs && (<>
                <Select
                styles={{
                    control: styles => ({ ...styles, fontSize: '10px' })
                  }}
                          className="basic-multi-select"
        closeMenuOnSelect={false}
        isDisabled={disabled}
        isMulti
        components={{ Option, MultiValue }}
        options={rateList.filter(data => data.value !== 'none')}
        hideSelectedOptions={false}
        backspaceRemovesValue={false}
        onChange={data => this.onChangeCallback(data)}
        value={this.state.hotelRates}
        // value={this.state?.hotelRates?.map(data => ({'value': data, 'label': rateList?.find(rate => rate.value === data)?.label }) )  }
      />
            </>)
            }
            { treeDepth === 1 && toggelInputs && (
                    <span style={{ display: 'inline-flex', position: 'relative', right: 0 }}>
                        {/* <span style={{padding: '4px', width: '100px' }}><b>Add rate:</b></span> */}
                                  <Select
          className="basic-singl-select"
          classNamePrefix="select"
          isDisabled={disabled}
          isLoading={isLoading}
          isClearable={isClearable}
          isRtl={isRtl}
          isSearchable={true}
          options={rateList}
          placeholder={'Add promotional rate'}
          onChange={data => this.onRateChangeHandler(data)}
        value={ rateList?.find(data => data.value === this.state.rate)?.label && ({'value': this.state.rate, 'label': rateList?.find(data => data.value === this.state.rate)?.label})}
          />
                    </span>
                    )
                    }
            </>
        )];

        if (clickable) {
            render.push((
                <span
                    key={1}
                    className="rct-node-clickable"
                    onClick={this.onClick}
                    onKeyPress={this.onClick}
                    role="link"
                    tabIndex={0}
                >
                    {children}
                </span>
            ));
        }

        return render;
    }

    renderLabel() {
          const {
            isClearable,
            isSearchable,
            isDisabled,
            isLoading,
            isRtl,
          } = this.state;
        const { label, showCheckbox, showNodeIcon, treeDepth, toggelInputs, rateList } = this.props;

        // console.log('hii', this.props);
        const labelChildren = [
            showNodeIcon ? (
                <span key={0} className="rct-node-icon" >
                    {this.renderNodeIcon()}
                </span>
            ) : null,
            <span key={1} className="rct-title">
                {label}
            </span>,
        ];

        if (!showCheckbox) {
            return this.renderBareLabel(labelChildren);
        }

        return this.renderCheckboxLabel(labelChildren);
    }

    renderChildren() {
        if (!this.props.expanded) {
            return null;
        }
        // console.log("children : ", this.props.children);
        return this.props.children;
    }

    render() {
        const {
            className,
            disabled,
            expanded,
            isLeaf,
        } = this.props;
        const nodeClass = classNames({
            'rct-node': true,
            'rct-node-leaf': isLeaf,
            'rct-node-parent': !isLeaf,
            'rct-node-expanded': !isLeaf && expanded,
            'rct-node-collapsed': !isLeaf && !expanded,
            'rct-disabled': disabled,
        }, className);
        // console.log(this.props);
        return (
            <li className={nodeClass}>
                <span className="rct-text" style={{ padding: '5px', margin: '5px', minHeight: '45px', border: '1px solid rgb(224, 224, 227)' }}>
                    {this.renderCollapseButton()}
                    {this.renderLabel()}
                </span>
                {this.renderChildren()}
            </li>
        );
    }
}

export default TreeNode;
