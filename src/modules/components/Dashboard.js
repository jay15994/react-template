import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as action from '../redux/actions';
import { noop } from '../../utils';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { setText } = this.props;
    setText(e.target.value);
  }

  render() {
    const { text } = this.props;
    return (
      <div>
        <h1>This is Dashboard</h1>
        <Link to="/home">Go to Home</Link>
        <div>
          <p>
            Text :
            {text}
          </p>
          <input type="text" onChange={this.onChange} value={text} />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  setText: PropTypes.func,
  text: PropTypes.string,
};

Dashboard.defaultProps = {
  setText: noop,
  text: '',
};

const mapStateToProps = (state) => ({
  text: state.dashboard.text,
});

const mapDispatchToProps = (dispatch) => ({
  setText: (text) => dispatch(action.setText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
