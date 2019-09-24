import React from "react";
import GoogleLogin from "react-google-login";

export default class GoogleAuth extends React.Component {

state={
    loggedIn :false,
    userName : ''
}
  responseGoogle = response => {
    console.log(response);
    this.setState({
        loggedIn: true,
        userName : response.profileObj.name
    })
  };

  render() {
    return (
        (this.state.loggedIn)? <h1>Welcome {this.state.userName}</h1>
        :
      <GoogleLogin
        clientId="26914326245-j8ahl5ahvs6ghcnm04ek6fv18bi64ren.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    );
  }
}
