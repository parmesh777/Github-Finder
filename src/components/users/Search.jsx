import React, { Component } from "react";
import PropTypes from "prop-types";
class Search extends Component {
  state = {
    text: "",
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };
  onsubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter Something", "Light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };
  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form className="form" onSubmit={this.onsubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
          />
          <input
            type="submit"
            className="btn btn-dark btn-block"
            value="Search"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}
export default Search;
