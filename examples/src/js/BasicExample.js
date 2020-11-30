import React from 'react';
import CheckboxTree from 'react-checkbox-tree';
import Select from 'react-select'

const nodes = [
    {
      "children": [
        {
          "children": [
            {
              "label": "Fully Flexible",
              "value": "f922f8df.140.arise-861",
              "disabled": true
            }
          ],
          "value": "f922f8df.140",
          "label": "1 Bedroom Apartment",
          "disabled": true
        },
        {
          "children": [
            {
              "label": "Long Stay 7+ Flexible",
              "value": "f922f8df.143.arise-863",

            },
            {
              "label": "Fully Flexible",
              "value": "f922f8df.143.arise-861"
            },
            {
              "label": "Stay & Save 2+ Non Refundable",
              "value": "f922f8df.143.arise-864"
            },
            {
              "label": "Stay & Save 2+ Flexible",
              "value": "f922f8df.143.arise-862"
            }
          ],
          "value": "f922f8df.143",
          "label": "1 Bedroom Skyline Apartment"
        },
        {
          "children": [
            {
              "label": "Long Stay 7+ Flexible",
              "value": "f922f8df.146.arise-863"
            }
          ],
          "value": "f922f8df.146",
          "label": "2 Bedroom 1 Bathroom Apartment"
        },
        {
          "label": "2 Bedroom 1 Bathroom Skyline Apartment",
          "value": 149
        },
        {
          "label": "2 Bedroom 2 Bathroom Apartment",
          "value": 152
        },
        {
          "label": "2 Bedroom 2 Bathroom Skyline Apartment",
          "value": 155
        }
      ],
      "value": "f922f8df",
      "label": "Arise Australia 108"
    },
    {
      "value": "a3fe",
      "label": "Brisbane One"
    },
    {
      "children": [
        {
          "children": [
            {
              "label": "Fully Flexible",
              "value": "245d.207.arise-861"
            },
            {
              "label": "Long Stay 7+ Flexible",
              "value": "245d.207.arise-863"
            },
            {
              "label": "Stay & Save 2+ Flexible",
              "value": "245d.207.arise-862"
            },
            {
              "label": "Stay & Save 2+ Non Refundable",
              "value": "245d.207.arise-864"
            },
            {
              "label": "Stay Longer 3+ Non Refundable",
              "value": "245d.207.arise-865"
            }
          ],
          "value": "245d.207",
          "label": "BS 1 Bedroom City"
        },
        {
          "value": "245d.208",
          "label": "BS 1 Bedroom Sky High"
        }
      ],
      "value": "245d",
      "label": "Brisbane Skytower"
    },
    {
      "children": [
        {
          "children": [
            {
              "label": "Fully Flexible",
              "value": "30eb.77.arise-861"
            }
          ],
          "value": "30eb.77",
          "label": "AR 1 Bedroom"
        }
      ],
      "value": "30eb",
      "label": "Arena"
    },
    {
      "value": "06db",
      "label": "Hedge"
    }
  ];
  const rates =   [
    {'id': 'none', 'name': 'None'},
    {
      "id": "arise|734",
      "rateId": "734",
      "chainId": "arise",
      "name": "1Nt BAR",
      "customerFacingName": null,
      "code": "BAR1",
      "rateChargeDescription": "1Nt BAR",
      "rateStructure": "OTA",
      "bookingSourceId": 0,
      "cancellationPolicy": "5f5ad62490a03526b84b17d8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        9,
        16,
        3,
        58,
        0,
        246000000
      ]
    },
    {
      "id": "arise|722",
      "rateId": "722",
      "chainId": "arise",
      "name": "Accommodation",
      "customerFacingName": null,
      "code": "BS Group Static 1 Night Minimum",
      "rateChargeDescription": "Accommodation",
      "rateStructure": "OTA",
      "bookingSourceId": 8,
      "cancellationPolicy": "5f5ad62490a03526b84b17d8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        9,
        16,
        3,
        58,
        0,
        263000000
      ]
    },
    {
      "id": "arise|735",
      "rateId": "735",
      "chainId": "arise",
      "name": "AR 1 BR Long Stay Rate",
      "customerFacingName": null,
      "code": "Longstay",
      "rateChargeDescription": "AR 1 BR Long Stay Rate",
      "rateStructure": "OTA",
      "bookingSourceId": 0,
      "cancellationPolicy": "5f5ad62490a03526b84b17d8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        9,
        16,
        3,
        58,
        0,
        267000000
      ]
    },
    {
      "id": "arise|241",
      "rateId": "241",
      "chainId": "arise",
      "name": "AR 1Nt+ Flexi Direct",
      "customerFacingName": null,
      "code": "AR1FD",
      "rateChargeDescription": "Accommodation",
      "rateStructure": "OTA",
      "bookingSourceId": 1,
      "cancellationPolicy": "5f5ad62490a03526b84b17d8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        9,
        16,
        3,
        58,
        0,
        272000000
      ]
    },
    {
      "id": "arise|519",
      "rateId": "519",
      "chainId": "arise",
      "name": "AR 1Nt+ Flexi GDS",
      "customerFacingName": null,
      "code": "AR1FGDS",
      "rateChargeDescription": "Accommodation",
      "rateStructure": "OTA",
      "bookingSourceId": 10,
      "cancellationPolicy": "5f5ad62490a03526b84b17d8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        9,
        16,
        3,
        58,
        0,
        276000000
      ]
    },
    {
      "id": "arise|243",
      "rateId": "243",
      "chainId": "arise",
      "name": "AR 1Nt+ Flexi OTA",
      "customerFacingName": null,
      "code": "AR1FO",
      "rateChargeDescription": "Accommodation",
      "rateStructure": "OTA",
      "bookingSourceId": 5,
      "cancellationPolicy": "5f5ad62490a03526b84b17d8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        9,
        16,
        3,
        58,
        0,
        279000000
      ]
    },
    {
      "id": "arise|244",
      "rateId": "244",
      "chainId": "arise",
      "name": "AR 1Nt+ Flexi OTA VCC",
      "customerFacingName": null,
      "code": "AR1FOV",
      "rateChargeDescription": "Accommodation",
      "rateStructure": "OTA",
      "bookingSourceId": 5,
      "cancellationPolicy": "5f5ad62490a03526b84b17d8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        9,
        16,
        3,
        58,
        0,
        282000000
      ]
    },
    {
      "id": "arise|622",
      "rateId": "622",
      "chainId": "arise",
      "name": "AR 1Nt+ GDS Flight Centre",
      "customerFacingName": null,
      "code": "AR1GDSFC",
      "rateChargeDescription": "Accommodation",
      "rateStructure": "OTA",
      "bookingSourceId": 10,
      "cancellationPolicy": "5f5ad62490a03526b84b17d8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        9,
        16,
        3,
        58,
        0,
        285000000
      ]
    },
    {
      "id": "arise|650",
      "rateId": "650",
      "chainId": "arise",
      "name": "AR 1Nt+ GRP Dynamic",
      "customerFacingName": null,
      "code": "ARGRP1N",
      "rateChargeDescription": "Accommodation",
      "rateStructure": "OTA",
      "bookingSourceId": 1,
      "cancellationPolicy": "5f5ad62490a03526b84b17d8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        9,
        16,
        3,
        58,
        0,
        290000000
      ]
    },
    {
      "id": "arise|245",
      "rateId": "245",
      "chainId": "arise",
      "name": "AR 1Nt+ NonRef Direct",
      "customerFacingName": null,
      "code": "AR1NRD",
      "rateChargeDescription": "Accommodation",
      "rateStructure": "OTA",
      "bookingSourceId": 5,
      "cancellationPolicy": "5f5ad62490a03526b84b17d8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        9,
        16,
        3,
        58,
        0,
        296000000
      ]
    },
    {
      "id": "arise|246",
      "rateId": "246",
      "chainId": "arise",
      "name": "AR 1Nt+ NonRef OTA",
      "customerFacingName": null,
      "code": "AR1NRO",
      "rateChargeDescription": "Accommodation",
      "rateStructure": "OTA",
      "bookingSourceId": 5,
      "cancellationPolicy": "5f5ad62490a03526b84b17d8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        9,
        16,
        3,
        58,
        0,
        300000000
      ]
    },
    {
      "id": "arise|247",
      "rateId": "247",
      "chainId": "arise",
      "name": "AR 1Nt+ NonRef OTA VCC",
      "customerFacingName": null,
      "code": "AR1NROV",
      "rateChargeDescription": "Accommodation",
      "rateStructure": "OTA",
      "bookingSourceId": 5,
      "cancellationPolicy": "5f5ad62490a03526b84b17d8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        9,
        16,
        3,
        58,
        0,
        305000000
      ]
    },
    {
      "id": "arise|736",
      "rateId": "736",
      "chainId": "arise",
      "name": "AR 2 BR Long stay rate",
      "customerFacingName": null,
      "code": "",
      "rateChargeDescription": "AR 2 BR Long stay rate",
      "rateStructure": "OTA",
      "bookingSourceId": 0,
      "cancellationPolicy": "5f5ad62490a03526b84b17d8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        9,
        16,
        3,
        58,
        0,
        309000000
      ]
    },
    {
      "id": "arise|248",
      "rateId": "248",
      "chainId": "arise",
      "name": "AR 2Nt+ Flexi Direct",
      "customerFacingName": null,
      "code": "AR2FD",
      "rateChargeDescription": "Accommodation",
      "rateStructure": "OTA",
      "bookingSourceId": 1,
      "cancellationPolicy": "5f5ad62490a03526b84b17d8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        9,
        16,
        3,
        58,
        0,
        315000000
      ]
    },
    {
      "id": "arise|520",
      "rateId": "520",
      "chainId": "arise",
      "name": "AR 2Nt+ Flexi GDS",
      "customerFacingName": null,
      "code": "AR2FGDS",
      "rateChargeDescription": "Accommodation",
      "rateStructure": "OTA",
      "bookingSourceId": 10,
      "cancellationPolicy": "5f5ad62490a03526b84b17d8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        9,
        16,
        3,
        58,
        0,
        318000000
      ]
    },
    {
      "id": "arise|249",
      "rateId": "249",
      "chainId": "arise",
      "name": "AR 2Nt+ Flexi OTA",
      "customerFacingName": null,
      "code": "AR2FO",
      "rateChargeDescription": "Accommodation",
      "rateStructure": "OTA",
      "bookingSourceId": 5,
      "cancellationPolicy": "5f5ad62490a03526b84b17d8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        9,
        16,
        3,
        58,
        0,
        321000000
      ]
    },
    {
      "id": "arise|250",
      "rateId": "250",
      "chainId": "arise",
      "name": "AR 2Nt+ Flexi OTA VCC",
      "customerFacingName": null,
      "code": "AR2OV",
      "rateChargeDescription": "Accommodation",
      "rateStructure": "OTA",
      "bookingSourceId": 5,
      "cancellationPolicy": "5f5ad62490a03526b84b17d8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        9,
        16,
        3,
        58,
        0,
        324000000
      ]
    },
    {
      "id": "arise|623",
      "rateId": "623",
      "chainId": "arise",
      "name": "AR 2Nt+ GDS Flight Centre",
      "customerFacingName": null,
      "code": "AR2GDSFC",
      "rateChargeDescription": "Accommodation",
      "rateStructure": "OTA",
      "bookingSourceId": 10,
      "cancellationPolicy": "5f5ad62490a03526b84b17d8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        9,
        16,
        3,
        58,
        0,
        339000000
      ]
    },
    {
      "id": "arise|651",
      "rateId": "651",
      "chainId": "arise",
      "name": "AR 2Nt+ GRP Dynamic",
      "customerFacingName": null,
      "code": "AR2NGRP",
      "rateChargeDescription": "Accommodation",
      "rateStructure": "OTA",
      "bookingSourceId": 1,
      "cancellationPolicy": "5f5ad62490a03526b84b17d8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        9,
        16,
        3,
        58,
        0,
        343000000
      ]
    },
    {
      "id": "arise|436",
      "rateId": "436",
      "chainId": "arise",
      "name": "AR 2Nt+ NonRef Direct",
      "customerFacingName": null,
      "code": "AR2NRD",
      "rateChargeDescription": "Accommodation",
      "rateStructure": "OTA",
      "bookingSourceId": 1,
      "cancellationPolicy": "5f5ad62490a03526b84b17d8",
      "paymentType": "payOnArrival",
      "facilities": null,
      "createdTime": null,
      "updatedTime": [
        2020,
        9,
        16,
        3,
        58,
        0,
        351000000
      ]
    }
  ]

  const inputSelected = [
      { hotel: 152, rate: 'arise|722'}, { hotel: 155, rate: 'arise|519' }
  ]
  const hotelInputSelcted = [
    { hotel: "f922f8df", rates: ["arise|241"] },
    { hotel: "a3fe", rates: ["arise|735","arise|241"] }
  ]
class BasicExample extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            checked: [
                152
            ],
            expanded: [

            ],
            rate: inputSelected,
            hotelRates: hotelInputSelcted,
        };
        this.onCheck = this.onCheck.bind(this);
        this.onExpand = this.onExpand.bind(this);
        this.onRateChange = this.onRateChange.bind(this);
        this.onHotelRateChange = this.onHotelRateChange.bind(this);

    }

    onCheck(checked, info) {
        console.log(checked, info);
        this.setState({ checked });
    }

    onExpand(expanded) {
        this.setState({ expanded });
    }

    onRateChange(data) {
      console.log("parent", data);
      this.setState({ rate: data })
    }

    onHotelRateChange(data){
        console.log("onHotelRateChange", data);
        this.setState({ hotelRates: data })

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
