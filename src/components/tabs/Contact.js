import React from "react";
// import { useForm } from "react-hook-form";
import '../assets/css/Form.css'

function Form(){
  return(
    <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" className="validate"></input>
          <label htmlFor="icon_prefix">Full Name</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" className="validate"></input>
          <label htmlFor="icon_telephone">Telephone</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">email</i>
          <input id="icon_email" type="tel" className="validate"></input>
          <label htmlFor="icon_email">Email</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">pencil</i>
          <textarea id="icon_pencil" type="tel" className="materialize-textarea"></textarea>
          <label htmlFor="icon_pencil">Message</label>
        </div>
      </div>
      <a className="waves-effect waves-light btn" href="/#">Submit</a>
    </form>
  </div>
  );
}

export default Form;
