import React, { Component } from "react";
import { connect } from "react-redux";

class DemoComponent extends Component {
  render() {
    console.log("REDUX PROPS IS HERE", this.props);
    return <div>DemoComponent Is Here</div>;
  }
}

const mapStateToProps = ({ location }) => ({
  location
});

export default connect(mapStateToProps)(DemoComponent);
