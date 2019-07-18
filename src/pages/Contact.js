import React from 'react';
import ConsultationTextBox from '../components/ConsultationTextBox';

class Contact extends React.Component {
  state = {
  text: '',
}


selectText(){
  if(document.getElementById('outlined-required').value == "" || document.getElementById('outlined-required2').value.includes("@") == false || document.getElementById('outlined-textarea').value == ""){
    return <font color="red">Please make sure to include your name, a valid email address and the body. Thank you!</font>
  }else{
    return <font color="green">Thank you, we will get back to you as soon as we can!</font>
    document.getElementById('outlined-required').reset();
    document.getElementById('outlined-required2').reset();
    document.getElementById('outlined-textarea').value = "";
  }
}

onClickButton1 = () => {
  this.setState({
    text: this.selectText()
  });
}

  render() {
    return (
      <div>
      <br/>
      <h1>Found a bug or have a specific need? Contact us and we will help</h1>
      <ConsultationTextBox/>
      <p>{this.state.text}</p>
      <button className="button button__accent" onClick={this.onClickButton1}>Send</button>
      </div>
    );
  }
}

export default Contact;
