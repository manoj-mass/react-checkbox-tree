import React from 'react';
import CheckboxTree from 'react-checkbox-tree';
import Select from 'react-select'

const nodes = [
    {
      "value": "f922f8df",
      "label": "Arise Australia 108",
      "disabled": false,
      "children": [
        {
          "value": "f922f8df:140",
          "label": "1 Bedroom Apartment",
          "disabled": false,
          "children": [
            {
              "value": "f922f8df:140:arise-861",
              "disabled": false,
              "label": "Fully Flexible"
            },
            {
              "value": "f922f8df:140:arise-865",
              "disabled": false,
              "label": "Stay Longer 3+ Non Refundable"
            },
            {
              "value": "f922f8df:140:arise-863",
              "disabled": false,
              "label": "Long Stay 7+ Flexible"
            },
            {
              "value": "f922f8df:140:arise-862",
              "disabled": false,
              "label": "Stay & Save 2+ Flexible"
            },
            {
              "value": "f922f8df:140:arise-864",
              "disabled": false,
              "label": "Stay & Save 2+ Non Refundable"
            }
          ]
        },
        {
          "value": "f922f8df:143",
          "label": "1 Bedroom Skyline Apartment",
          "disabled": false,
          "children": [
            {
              "value": "f922f8df:143:arise-865",
              "disabled": false,
              "label": "Stay Longer 3+ Non Refundable"
            },
            {
              "value": "f922f8df:143:arise-861",
              "disabled": false,
              "label": "Fully Flexible"
            },
            {
              "value": "f922f8df:143:arise-863",
              "disabled": false,
              "label": "Long Stay 7+ Flexible"
            },
            {
              "value": "f922f8df:143:arise-862",
              "disabled": false,
              "label": "Stay & Save 2+ Flexible"
            },
            {
              "value": "f922f8df:143:arise-864",
              "disabled": false,
              "label": "Stay & Save 2+ Non Refundable"
            }
          ]
        },
        {
          "value": "f922f8df:146",
          "label": "2 Bedroom 1 Bathroom Apartment",
          "disabled": false,
          "children": [
            {
              "value": "f922f8df:146:arise-865",
              "disabled": false,
              "label": "Stay Longer 3+ Non Refundable"
            },
            {
              "value": "f922f8df:146:arise-861",
              "disabled": false,
              "label": "Fully Flexible"
            },
            {
              "value": "f922f8df:146:arise-863",
              "disabled": false,
              "label": "Long Stay 7+ Flexible"
            },
            {
              "value": "f922f8df:146:arise-862",
              "disabled": false,
              "label": "Stay & Save 2+ Flexible"
            },
            {
              "value": "f922f8df:146:arise-864",
              "disabled": false,
              "label": "Stay & Save 2+ Non Refundable"
            }
          ]
        },
        {
          "value": "f922f8df:155",
          "label": "2 Bedroom 2 Bathroom Skyline Apartment",
          "disabled": false,
          "children": [
            {
              "value": "f922f8df:155:arise-865",
              "disabled": false,
              "label": "Stay Longer 3+ Non Refundable"
            },
            {
              "value": "f922f8df:155:arise-862",
              "disabled": false,
              "label": "Stay & Save 2+ Flexible"
            },
            {
              "value": "f922f8df:155:arise-861",
              "disabled": false,
              "label": "Fully Flexible"
            }
          ]
        }
      ]
    },
    {
      "value": "672a",
      "label": "Atlas",
      "disabled": false,
      "children": [
        {
          "value": "672a:29",
          "label": "AT 1 Bedroom",
          "disabled": false,
          "children": [
            {
              "value": "672a:29:arise-865",
              "disabled": false,
              "label": "Stay Longer 3+ Non Refundable"
            },
            {
              "value": "672a:29:arise-861",
              "disabled": false,
              "label": "Fully Flexible"
            }
          ]
        }
      ]
    }
  ];

  const rates = [
    {'id': 'none', 'name': 'None'},
    {
      "id": "arise-865",
      "rateId": "865",
      "chainId": "arise",
      "name": "Stay Longer 3+ Non Refundable",
      "customerFacingName": "Stay Longer 3+ Non Refundable",
      "code": "",
      "rateChargeDescription": "Stay Longer 3+ Non Refundable",
      "rateStructure": "OTA",
      "bookingSourceId": 0,
      "cancellationPolicy": "5fba155cce5870278a6e7268",
      "paymentType": "fullUpfrontPayment",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        12,
        2,
        7,
        40,
        0,
        407000000
      ]
    },
    {
      "id": "arise-861",
      "rateId": "861",
      "chainId": "arise",
      "name": "Fully Flexible",
      "customerFacingName": "Fully Flexible",
      "code": "",
      "rateChargeDescription": "Fully Flexible",
      "rateStructure": "OTA",
      "bookingSourceId": 0,
      "cancellationPolicy": "5face6d05768ac68fd5d58a8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        12,
        2,
        7,
        40,
        0,
        401000000
      ]
    },
    {
      "id": "arise-863",
      "rateId": "863",
      "chainId": "arise",
      "name": "Long Stay 7+ Flexible",
      "customerFacingName": "Long Stay 7+ Flexible",
      "code": "",
      "rateChargeDescription": "Long Stay 7+ Flexible",
      "rateStructure": "OTA",
      "bookingSourceId": 0,
      "cancellationPolicy": "5face6d05768ac68fd5d58a8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        12,
        2,
        7,
        40,
        0,
        403000000
      ]
    },
    {
      "id": "arise-862",
      "rateId": "862",
      "chainId": "arise",
      "name": "Stay & Save 2+ Flexible",
      "customerFacingName": "Stay & Save 2+ Flexible",
      "code": "",
      "rateChargeDescription": "Stay & Save 2+ Flexible",
      "rateStructure": "OTA",
      "bookingSourceId": 0,
      "cancellationPolicy": "5face6d05768ac68fd5d58a8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        12,
        2,
        7,
        40,
        0,
        404000000
      ]
    },
    {
      "id": "arise-864",
      "rateId": "864",
      "chainId": "arise",
      "name": "Stay & Save 2+ Non Refundable",
      "customerFacingName": "Stay & Save 2+ Non Refundable",
      "code": "",
      "rateChargeDescription": "Stay & Save 2+ Non Refundable",
      "rateStructure": "OTA",
      "bookingSourceId": 0,
      "cancellationPolicy": "5face6d05768ac68fd5d58a8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        12,
        2,
        7,
        40,
        0,
        406000000
      ]
    }
  ]

  const inputSelected = [
      { hotel: 152, rate: 'arise|722'}, { hotel: 155, rate: 'arise|519' }
  ]
  const hotelInputSelcted = [
    { hotel: "f922f8df", rates: ["arise-865"] },
    { hotel: "672a", rates: ["arise-865", "arise-861"] }
  ]
  function getLeafNodes(nodes, result = []){
    for(var i = 0, length = nodes.length; i < length; i++){
      if(!nodes[i].children || nodes[i].children.length === 0){
        result.push(nodes[i].value);
      }else{
        result = getLeafNodes(nodes[i].children, result);
      }
    }
    return result;
  }


const getRateSet = (data) => {
    let list = [];
    const splitList = data.map(item => ({hotel: item.split(':')[0], rate: item.split(':')[2]   }))

    splitList.forEach(data => {
        list.filter(e => e.hotel === data.hotel).length === 0 && list.push({hotel: data.hotel, rates: Array.from(new Set(splitList.map(item => (item.hotel === data.hotel ) && item.rate).filter(Boolean)) )})
    })
   return list;
}
class BasicExample extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            checked: getLeafNodes(nodes),
            expanded: [

            ],
            rate: inputSelected,
            hotelRates: getRateSet(getLeafNodes(nodes)) || [],
        };
        this.onCheck = this.onCheck.bind(this);
        this.onExpand = this.onExpand.bind(this);
        this.onRateChange = this.onRateChange.bind(this);
        this.onHotelRateChange = this.onHotelRateChange.bind(this);

    }

    componentDidMount() {
      //  !hotelRates && this.setState({hotelRates: getRateSet(leafNodes) || []})

    }

    onCheck(checked, info) {
        console.log(checked, info);
        const newRates = getRateSet(checked)

        this.setState({ hotelRates : newRates })
        this.setState({ checked });

    }

    onExpand(expanded) {
        this.setState({ expanded });
    }

    onRateChange(data) {
    //  console.log("parent", data);
      this.setState({ rate: data })

    }

    onHotelRateChange(data){
     //  console.log("onHotelRateChange", data);
     const newList = [];

        this.setState({ hotelRates: data })
        const leafNodes = getLeafNodes(nodes);
        leafNodes.forEach(leaf => {
            data.map(item => item.rates && item.rates.map(rate => {
                if(leaf.includes(rate) && leaf.includes(item.hotel)){
                    newList.push(leaf)
                }
            }) )
        })
        console.log(Array.from(new Set(newList)).length > 0)

        this.setState({checked: Array.from(new Set(newList))})
    }

    render() {
        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
          ]

        const { checked, expanded, rate, hotelRates } = this.state;
        return (
          <>
            <CheckboxTree
                checked={checked}
                expanded={expanded}
                iconsClass="fa5"
                nodes={nodes}
                onCheck={this.onCheck}
                onExpand={this.onExpand}
                toggelInputs
                toggelHotelInputs
                rateList={ rates.map(data =>( {'value': data.id, 'label': `${data.name} ${data.id}`} ))}
                inputSelected={this.state.rate}
                hotelInputs={this.state.hotelRates}
                onRate={this.onRateChange}
                onHotelRate={this.onHotelRateChange}
            >
            </CheckboxTree>
            </>
        );
    }
}
export default BasicExample;
