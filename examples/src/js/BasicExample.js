import React from 'react';
import CheckboxTree from 'react-checkbox-tree';

const nodes = [
    {
      "label": "Arise Australia 108",
      "children": [
        {
          "label": "1 Bedroom Apartment",
          "children": [
            {
              "label": "AU 4Nt+ NonRef Direct",
              "value": "arise|551"
            },
            {
                "label": "AU NonRef Direct",
                "value": "arise|589"
              }
          ],
          "value": 140
        },
        {
          "label": "1 Bedroom Skyline Apartment",
          "children": [
            {
              "label": "AU 7Nt+ Flexi Direct",
              "value": "arise|238"
            }
          ],
          "value": 143
        },
        {
          "label": "2 Bedroom 1 Bathroom Apartment",
          "value": 146
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
      "value": "f922f8df"
    },
    {
      "label": "Brisbane One",
      "children": [
        {
          "label": "1 Bedroom Apartment",

          "value": 1
        },
        {
          "label": "Studio Apartment",

          "value": 4
        },
        {
          "label": "2 Bedroom 1 Bathroom Apartment",

          "value": 5
        },
        {
          "label": "3 Bedroom 2 Bathroom Apartment",

          "value": 12
        },
        {
          "label": "Compact Family Room",

          "value": 285
        }
      ],
      "value": "8bdc"
    },
    {
      "label": "Arise Harmony",
      "children": [
        {
          "label": "1 Bedroom Apartment",

          "value": 2
        },
        {
          "label": "2 Bedroom 2 Bathroom Apartment",

          "value": 19
        },
        {
          "label": "3 Bedroom 2 Bathroom Apartment",

          "value": 22
        }
      ],
      "value": "8829"
    },
    {
      "label": "Arise Princess Regent",
      "children": [
        {
          "label": "1 Bedroom Apartment",

          "value": 107
        },
        {
          "label": "2 Bedrooom Apartment",

          "value": 110
        }
      ],
      "value": "63a8"
    }
  ];

class BasicExample extends React.Component {
    state = {
        checked: [

        ],
        expanded: [

        ],
    };

    constructor(props) {
        super(props);

        this.onCheck = this.onCheck.bind(this);
        this.onExpand = this.onExpand.bind(this);
    }

    onCheck(checked) {
        console.log(checked);
        this.setState({ checked });
    }

    onExpand(expanded) {
        this.setState({ expanded });
    }

    render() {
        const { checked, expanded } = this.state;

        return (
            <CheckboxTree
                checked={checked}
                expanded={expanded}
                iconsClass="fa5"
                nodes={nodes}
                onCheck={this.onCheck}
                onExpand={this.onExpand}
            />
        );
    }
}

export default BasicExample;
