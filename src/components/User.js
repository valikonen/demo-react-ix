import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../redux/user/userActions';


const User = ({ user, getUser }) => {

  useEffect(() => {
    getUser();
  }, {})

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}

const mapStateToProp = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser())
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(User);
