import React, { Component } from "react";
import { connect } from "react-redux";
import changeLocation from "./actionCreators/changeLocation";

class SearchComponent extends Component {
  render() {
    console.log("REDUX PROPS IS HERE from Search", this.props);
    return (
      <div>
        <input
          onChange={this.props.handleLocationChange}
          value={this.props.location}
          type="text"
        />
      </div>
    );
  }
}

const mapStateToProps = ({ location }) => ({
  location
});

const mapDispatchToProps = dispatch => ({
  handleLocationChange(event) {
    dispatch(changeLocation(event.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);
