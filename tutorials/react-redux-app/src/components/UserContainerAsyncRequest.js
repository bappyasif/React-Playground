import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);

  return userData.loading ? (
    <h4>Loading....</h4>
  ) : userData.error ? (
    <h4>{userData.error}</h4>
  ) : (
    <div>
      <h4>Users List</h4>
      <div>{userData && userData.users.map((user) => <p>{user.name}</p>)}</div>
    </div>
  );
  // return (
  //   <div>
  //     <h4>Users : : </h4>
  //   </div>
  // );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
