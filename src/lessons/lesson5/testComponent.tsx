import React from 'react';

type StateType = {
    count: number
    // bindedFunc: () => void
}


export default class TestComponent extends React.Component <any, StateType> {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0,
            // bindedFunc: this.incrementCount.bind(this)
        }
    }
    // incrementCount() {
    //     let count = this.state.count + 1
    //     this.setState({count})
    // }
    incrementCount = () => {
        let count = this.state.count + 1
        this.setState({count})
    }
    getData = () => {
        let qc = document.querySelectorAll('.Test')
        console.log("querySelectorAll:", qc)
        let gc = document.getElementsByClassName('.Test')
        console.log("getElementsByClassName:", gc)
    }


    render() {
        return (
            <div>
                <h4>Test class component</h4>
                <h2>{this.state.count}</h2>
                <div  className="Test">1</div>
                <div  className="Test">2</div>
                <div  className="Test">3</div>
                {/*<button onClick={this.state.bindedFunc}>ClickMe</button>*/}
                {/*<button onClick={this.incrementCount}>ClickMe</button>*/}
                <button onClick={this.getData}>ClickMe</button>
            </div>
        )
    }
}