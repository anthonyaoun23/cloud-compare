import React from "react";
import ConsultationTextBox from "../components/ConsultationTextBox";

//ceci est le consultation page

class Contact extends React.Component {
  state = {
<<<<<<< HEAD
  text: '',
}

//fonction qui decide quelle message a fair apparaitre
selectText(){
  if(document.getElementById('outlined-required').value == "" || document.getElementById('outlined-required2').value.includes("@") == false || document.getElementById('outlined-textarea').value == ""){
    return <font color="red">Please make sure to include your name, a valid email address and the body. Thank you!</font>
  }else{
    return <font color="green">Thank you, we will get back to you as soon as we can!</font>
    document.getElementById('outlined-required').reset();
    document.getElementById('outlined-required2').reset();
    document.getElementById('outlined-textarea').value = "";
=======
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
>>>>>>> e1efc32d38d5fa93b40c609ef58e0f2639290098
  }

<<<<<<< HEAD
//fonction qui est appeller lorsque le bouton est paisser
onClickButton1 = () => {
  this.setState({
    text: this.selectText()
  });
}
//render la page
=======
  onClickButton1 = () => {
    this.setState({
      text: this.selectText()
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

>>>>>>> e1efc32d38d5fa93b40c609ef58e0f2639290098
  render() {
    const { name, email, company, body} = this.state;

    return (
<<<<<<< HEAD
      <div>
      <br/>
      <h1>Found a bug or have a specific need? Contact us and we will help</h1>
      <ConsultationTextBox/>
      <p>{this.state.text}</p>
      <button className="button button__accent" onClick={this.onClickButton1}>Send</button>
=======
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
>>>>>>> e1efc32d38d5fa93b40c609ef58e0f2639290098
      </div>
    );
  }
}

export default Contact;
