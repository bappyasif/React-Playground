import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../reduxComps/Users/UsersAction";

function Index({ userInfo, httpRequest }) {
  useEffect(() => {
    httpRequest();
  }, [httpRequest]);
  return (
    <div>
      <h4>Welcoming Cients</h4>
      {userInfo.loading ? (
        <div>....LOADING....</div>
      ) : userInfo.error ? (
        <div>{userInfo.error}</div>
      ) : (
        <div>
          <h4>Top Performers</h4>
          {userInfo &&
            userInfo.users &&
            userInfo.users.map((user) => <p key={user.id}>{user.name}</p>)}
        </div>
      )}
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    userInfo: state.user,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    httpRequest: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
