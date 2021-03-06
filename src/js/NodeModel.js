import CheckboxTreeError from './CheckboxTreeError';
import constants from './constants';

const { CheckModel } = constants;

class NodeModel {
    constructor(props, nodes = {}) {
        this.props = props;
        this.flatNodes = nodes;
    }

    setProps(props) {
        this.props = props;
    }

    clone() {
        const clonedNodes = {};

        // Re-construct nodes one level deep to avoid shallow copy of mutable characteristics
        Object.keys(this.flatNodes).forEach((value) => {
            const node = this.flatNodes[value];
            clonedNodes[value] = { ...node };
        });

        return new NodeModel(this.props, clonedNodes);
    }

    getNode(value) {
        return this.flatNodes[value];
    }

    reset() {
        this.flatNodes = {};
    }

    flattenNodes(nodes, parent = {}, depth = 0) {
        // console.log(nodes, parent)
        if (!Array.isArray(nodes) || nodes.length === 0) {
            return;
        }
        const hasParent = !(Object.keys(parent).length === 0 && parent.constructor === Object);
        // console.log("hasParent: ", hasParent)
        const { disabled, noCascade } = this.props;

        // Flatten the `node` property for internal lookups
        nodes.forEach((node, index) => {
            const isParent = this.nodeHasChildren(node);
            // console.log(node, depth)

            // Protect against duplicate node values
            if (this.flatNodes[node.value] !== undefined) {
                throw new CheckboxTreeError(
                    `Duplicate value '${node.value}' detected. All node values must be unique.`,
                );
            }

            this.flatNodes[node.value] = {
                label: node.label,
                value: node.value,
                children: node.children,
                parent,
                isChild: parent.value !== undefined,
                isParent,
                isLeaf: !isParent,
                showCheckbox: node.showCheckbox !== undefined ? node.showCheckbox : true,
                disabled: this.getDisabledState(node, parent, disabled, noCascade),
                treeDepth: depth,
                index,
                hasParent,

            };
            this.flattenNodes(node.children, node, depth + 1);
        });
    }

    nodeHasChildren(node) {
        return Array.isArray(node.children);
    }

    getDisabledState(node, parent, disabledProp, noCascade) {
        if (disabledProp) {
            return true;
        }

        if (!noCascade && parent.disabled) {
            return true;
        }

        return Boolean(node.disabled);
    }

    deserializeLists(lists) {
        const listKeys = ['checked', 'expanded'];

        // Reset values to false
        Object.keys(this.flatNodes).forEach((value) => {
            listKeys.forEach((listKey) => {
                this.flatNodes[value][listKey] = false;
            });
        });

        // Deserialize values and set their nodes to true
        listKeys.forEach((listKey) => {
            lists[listKey].forEach((value) => {
                if (this.flatNodes[value] !== undefined) {
                    this.flatNodes[value][listKey] = true;
                }
            });
        });
    }

    deserializeInputValues(inputList) {
        inputList && inputList.forEach((listKey) => {
            if (this.flatNodes[listKey.hotel] !== undefined) {
                this.flatNodes[listKey.hotel].inputValue = listKey.rate;
            }
        });
    }

    deserializeHotelInputValues(values) {
        values && values.forEach((listKey) => {
            if (this.flatNodes[listKey.hotel] !== undefined) {
                this.flatNodes[listKey.hotel].multiInputValue = listKey.rates;
            }
        });
    }

    serializeListInputValues(key) {

        const list = [];
        Object.keys(this.flatNodes).forEach((value) => {
            if (this.flatNodes[value].inputValue) {
                list.filter((el) => el.hotel === this.flatNodes[value].value).length > 0 &&
                list.map(p => p.hotel === value
                                      ? { ...p,  rate: key.rate }
                                      : p
                                  );
                list.filter((el) => el.hotel === this.flatNodes[value].value).length === 0 && list.push({ hotel: value, rate: this.flatNodes[value].inputValue });
            } else {
               list.filter((el) => el.hotel === key.hotel).length === 0 && list.push(key);
            }
        });
        return list;
    }

    serializeHotelListInputValues(key) {
        const list = [];
        Object.keys(this.flatNodes).forEach((value) => {
            if (this.flatNodes[value].parentInputs) {
                list.filter((el) => el.hotel === this.flatNodes[value].value).length > 0 &&
                list.map(p => p.hotel === value
                                      ? { ...p,  rates: key?.rates ? key?.rates.map(i => i.value) : [] }
                                      : p
                                  );
                (list.filter((el) => el.hotel === this.flatNodes[value].value).length === 0 &&
                key.hotel !== value) && list.push({ hotel: value, rates: this.flatNodes[value].parentInputs });
                (list.filter((el) => el.hotel === this.flatNodes[value].value).length === 0 &&
                key.hotel === value) && list.push({ hotel: value, rates: key?.rates ? key?.rates.map(v => v.value) : [] });
            } else {
              list.filter((el) => (el.hotel === key.hotel)).length === 0 && list.push( { hotel: key.hotel, rates: key?.rates ? key?.rates.map(v => v.value) : [] } );
            }
        });
        return list;
    }

    serializeList(key) {
        const list = [];

        Object.keys(this.flatNodes).forEach((value) => {
            if (this.flatNodes[value][key]) {
                list.push(value);
            }
        });

        return list;
    }

    expandAllNodes(expand) {
        Object.keys(this.flatNodes).forEach((value) => {
            if (this.flatNodes[value].isParent) {
                this.flatNodes[value].expanded = expand;
            }
        });

        return this;
    }

    toggleChecked(node, isChecked, checkModel, noCascade, percolateUpward = true) {
        const flatNode = this.flatNodes[node.value];
        const modelHasParents = [CheckModel.PARENT, CheckModel.ALL].indexOf(checkModel) > -1;
        const modelHasLeaves = [CheckModel.LEAF, CheckModel.ALL].indexOf(checkModel) > -1;

        if (flatNode.isLeaf || noCascade) {
            if (node.disabled) {
                return this;
            }

            this.toggleNode(node.value, 'checked', isChecked);
        } else {
            if (modelHasParents) {
                this.toggleNode(node.value, 'checked', isChecked);
            }

            if (modelHasLeaves) {
                // Percolate check status down to all children
                flatNode.children.forEach((child) => {
                    this.toggleChecked(child, isChecked, checkModel, noCascade, false);
                });
            }
        }

        // Percolate check status up to parent
        // The check model must include parent nodes and we must not have already covered the
        // parent (relevant only when percolating through children)
        if (percolateUpward && !noCascade && flatNode.isChild && modelHasParents) {
            this.toggleParentStatus(flatNode.parent, checkModel);
        }

        return this;
    }

    toggleParentStatus(node, checkModel) {
        const flatNode = this.flatNodes[node.value];

        if (flatNode.isChild) {
            if (checkModel === CheckModel.ALL) {
                this.toggleNode(node.value, 'checked', this.isEveryChildChecked(flatNode));
            }

            this.toggleParentStatus(flatNode.parent, checkModel);
        } else {
            this.toggleNode(node.value, 'checked', this.isEveryChildChecked(flatNode));
        }
    }

    isEveryChildChecked(node) {
        return node.children.every((child) => this.getNode(child.value).checked);
    }

    toggleNode(nodeValue, key, toggleValue) {
        this.flatNodes[nodeValue][key] = toggleValue;

        return this;
    }
}

export default NodeModel;
