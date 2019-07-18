import React from "react";
import ConsultationTextBox from "../components/ConsultationTextBox";

class Contact extends React.Component {
  state = {
    text: "",
    name: "",
    email: "",
    company: "",
    body: ""
  };

  selectText() {
    if (
      document.getElementById("outlined-required").value == "" ||
      document.getElementById("outlined-required2").value.includes("@") ==
        false ||
      document.getElementById("outlined-textarea").value == ""
    ) {
      return (
        <font color="red">
          Please make sure to include your name, a valid email address and the
          body. Thank you!
        </font>
      );
    } else {
      this.setState({name: '', email: '', company: '', body: ''});
      return (
        <font color="green">
          Thank you, we will get back to you as soon as we can!
        </font>
      );
    }
  }

  onClickButton1 = () => {
    this.setState({
      text: this.selectText()
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { name, email, company, body} = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "4em", height: "100%" }}>
        <br />
        <h1>
          Found a bug or have a specific need? Contact us and we will help
        </h1>
        <ConsultationTextBox handleChange={this.handleChange} name={name} email={email} company={company} body={body} />
        <p>{this.state.text}</p>
        <button className="button button__accent" onClick={this.onClickButton1}>
          Send{" "}
        </button>
      </div>
    );
  }
}

export default Contact;
