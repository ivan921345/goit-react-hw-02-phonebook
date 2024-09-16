import React, { Component } from 'react';

class Filter extends Component {
  state = {};
  render() {
    return (
      <input
        type="text"
        name="filter"
        onChange={this.props.onFilterInputChange}
        placeholder="filter"
      />
    );
  }
}

export default Filter;
