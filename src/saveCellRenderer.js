import React from 'react';

// custom cell for the proficiency column
export default class saveCellRenderer extends React.Component {

    response() {
        alert("Saved");
    }


    render() {

        return <button onClick={this.response}>Click</button>;
    }

}
