import React from "react";
import { withRouter } from "react-router-dom";

let NavigationBack = ({ history }) => {
  return <button onClick={history.goBack()}>Home Page</button>;
};

export default withRouter(NavigationBack);
