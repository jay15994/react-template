import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import * as action from '../redux/actions';
import { noop } from '../../utils';
import RequestStates from '../../utils/request-states';

class Home extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  onClick() {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { usersLoading, users } = this.props;
    return (
      <div>
        <h1>This is Home</h1>
        <button className="dashboard-button" type="button" onClick={this.onClick}>Go to Dashboard</button>
        <div>
          {
            usersLoading
              ? 'user List Loading'
              : (
                <>
                  {
                    users.length > 0
                      ? users.map((user) => (
                        <div key={user.id} className="user-card">
                          <img src={user.avatar} alt={user.first_name} />
                          <div>
                            <p>{user.first_name} {user.last_name}</p>
                            <p>{user.email}</p>
                          </div>
                        </div>
                      ))
                      : 'No data Found'
                  }
                </>
              )
          }
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  getUsers: PropTypes.func,
  usersLoading: PropTypes.bool,
  users: PropTypes.instanceOf(Array),
};

Home.defaultProps = {
  getUsers: noop,
  usersLoading: false,
  users: [],
};

const mapStateToProps = (state) => ({
  usersLoading: state.dashboard.usersLoading === RequestStates.loading,
  users: state.dashboard.users,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(action.getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
