import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { search } from "../../modules/users";

import { Card, CardText } from "material-ui/Card";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class Home extends React.Component {
  render() {
    const data = this.props.filteredResults;
    return (
      <div>
        <TextField
          style={{ marginLeft: "15px" }}
          onChange={this.props.search}
          hintText="Search"
          floatingLabelText="Search"
        />
        <br />
        {data.map(user => (
          <Card>
            <CardText>
              <p>First Name: {user.first_name}</p>
              <p>Email: {user.email}</p>
            </CardText>
          </Card>
        ))}
        <div style={{ textAlign: "center" }}>
          <RaisedButton
            primary
            onClick={() => this.props.changePage()}
            style={{ margin: "15px" }}
            label="Add New"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.users.data,
  filteredResults: state.users.filteredResults
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      search,
      changePage: () => push("/new")
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
