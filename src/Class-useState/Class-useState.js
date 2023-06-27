
import React, { Component } from "react";

export class ClassState extends Component {
  constructor() {
    super();
    this.state = {
      name: "MJ",
      feature: {
        model: "abc",
      },
      arr: [1, 2, 3],
    };
  }
  update = (index) => {
    let temp = this.state.arr.map((item, i) => 
      index === i ? item * 2 : item
    );
   
    console.log(index,temp);
    this.setState({arr:temp});
    //this.setState(temp);
  };
  render() {
    return (
      <div>
        class-useState
        {this.state.arr.map((item, i) => (
          <div key={i}>
            <h1>{item}</h1>
            <button onClick={() => this.update(i)}>Update Values</button>
          </div>
        ))}
        {/* <button onClick={() => this.setState({ name: "Manoj" })}>
          Update Class
        </button> */}
      </div>
    );
  }
}

export default ClassState;
