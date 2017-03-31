import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchByTitle } from '../actions/index';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: 'logan' };
  }
  componentWillMount() {
    this.props.searchByTitle(this.state.searchTerm);
  }

  render() {
    return (
      <div>
        <input
        placeholder="Search By Movive Title"
        value={this.state.searchTerm}
        type='text' />
        <span className='input-group-btn'>
          <button type="submit" className="btn btn-primary">
          Submit
          </button>
        </span>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchByTitle }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);
