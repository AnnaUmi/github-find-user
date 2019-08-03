import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentStep } from "./action";

class Schema extends Component {
  render() {
    return <div />;
  }
}
export default connect(
  null,
  { setCurrentStep }
)(Schema);
