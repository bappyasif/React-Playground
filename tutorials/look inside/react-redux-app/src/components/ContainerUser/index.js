import React, { useEffect } from "react";
import { connect } from "react-redux";
import { httpRequest } from "../../redux/user/UserActions";

// import {
//   fetchUserRequest,
//   userRequestSuccess,
//   userRequstFailure,
// } from "../user/UserActions";

function Index({ userData, fetchUsers }) {
  useEffect(() => {
    // httpRequest();
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <h4>Welcoming Clients</h4>
      {userData.loading ? (
        <h6>....LOADING....</h6>
      ) : userData.error ? (
        <h6>{userData.error}</h6>
      ) : (
        <div>
          <h4>Top Performers</h4>
          <div>
            {userData &&
              userData.users &&
              userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
          </div>
        </div>
      )}
    </div>
  );
  /**
   userData.loading ? (
    <h6>....LOADING</h6>
  ) : userData.error ? (
    <h6>{userData.error}</h6>
  ) : (
    <div>
      <h4>Users List</h4>
    </div>
  );
   */

  /**
   (
    <div>
      <h4>Welcoming Clients</h4>
      {userData.loading ? (
        <h6>....LOADING....</h6>
      ) : userData.error ? (
        <h6>{userData.error}</h6>
      ) : (
        <div>
          <h4>Top Performers</h4>
          <div>
            {userData &&
              userData.users &&
              userData.users.map((user) => <p>{user.name}</p>)}
          </div>
        </div>
      )}
    </div>
  );
   */
}

/**
function index() {
  return (
    <div>
      <h4>Users</h4>
    </div>
  );
}
 */

let mapStateToProps = (state) => {
  return {
    userData: state.user,
    // userData: state.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    // httpRequest: () => dispatch(httpRequest()),
    fetchUsers: () => dispatch(httpRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
