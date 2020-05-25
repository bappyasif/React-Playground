import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/index02";

function UserContainerAsyncRequest02({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h4>Loading State</h4>
  ) : userData.error ? (
    <h4>{userData.error}</h4>
  ) : (
    <div>
      <h4>Users List</h4>
      <div>{userData && userData.users.map((user) => <p>{user.name}</p>)}</div>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainerAsyncRequest02);
