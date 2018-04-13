import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addNew, changeEmail, changeName } from "../../modules/users";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";

const New = props => (
  <div style={{ maxWidth: "500px", textAlign: "center", margin: "0 auto" }}>
    <TextField
      fullWidth
      onChange={props.changeName}
      floatingLabelText="First Name"
    />
    <TextField
      fullWidth
      onChange={props.changeEmail}
      floatingLabelText="Email"
    />

    <FlatButton onClick={props.changePage} label="Back" />

    <RaisedButton secondary onClick={props.addNew} label="Add" />
  </div>
);

const mapStateToProps = state => ({
  firstName: state.users.firstName,
  email: state.users.email
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addNew,
      changeName,
      changeEmail,
      changePage: () => push("/")
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(New);
