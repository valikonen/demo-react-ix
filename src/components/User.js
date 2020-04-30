import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications'
import { connect } from 'react-redux';
import { getUser } from '../redux/user/userActions';
import { editUser } from '../redux/user/userActions';

const User = ({ user, getUser }) => {
  const { addToast } = useToasts();
  const dispatch = useDispatch();

  useEffect(() => {
    getUser();
  }, [getUser])

  const json = JSON.stringify(user);
  let currentUser = JSON.parse(json).user;

  const [editedUser, setCurrentUser] = useState(() => {
    return {name: '', is_admin: ''}
  });

  const onEditUser = (e) => {
    e.preventDefault();
    if (isFormValid(editedUser)) {
      dispatch(editUser({ 
        ...editedUser,
        is_authenticated: currentUser.is_authenticated,
        id: currentUser.id
      }));
      addToast('Edit Successfull', { appearance: 'success', autoDismiss: true });
    } else {
      addToast('Required Fields are Missing', { appearance: 'error' });
    }
  }

  const isFormValid = (user) => {
    return user.name && user.is_admin !== '';
  }

  const transformToBoolean = (string) => {
    if (string === "true"){
      return true;
    } else return false;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h4>Edit User ID : </h4>
          {currentUser &&
            (<p>{currentUser.id}</p>)}

          {currentUser && (<form onSubmit={onEditUser}>
            
            <div className="form-group">
              <label htmlFor="name">New Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                onChange={e => setCurrentUser({ ...editedUser, name: e.target.value })} />
            </div>

            <div className="form-group">
              <label htmlFor="isAdmin">Is Admin ?</label>
              <select
                name="isAdmin"
                onChange={e => setCurrentUser({ ...editedUser, is_admin: transformToBoolean(e.target.value) })}>
                <option value=''></option>
                <option id="0">true</option>
                <option id="1">false</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn btn-primary">Submit</button>
          </form>
          )}
          <br></br>
        </div>
      </div>
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
