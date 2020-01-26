import React from 'react';

// custom cell for the proficiency column
export default class dropDownRendere2 extends React.Component {

    Change(triggerElement) {
        var rowNode = this.props.node;

        var data = this.props.data;
        data.opt1 = ['res1', 'res2', 'res3'];

        rowNode.setData(data);

        var params = { force: true, rowNodes: [rowNode], columns: ["1"]};

        this.props.api.refreshCells(params);
    };

    render() {

            var Data = this.props.node.data.opt2,
            
            MakeItem = function(X) {
                return <option>{X}</option>;
            };

        return <select onChange={this.Change.bind(this)}>{Data.map(MakeItem)}</select>;

        }

    }
