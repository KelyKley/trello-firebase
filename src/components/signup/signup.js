import React, { Component } from "react";
import { connect } from "redux-zero/react";
import { NavLink} from 'react-router-dom';
import "./signup.css";

class Button extends React.Component {
    render() {
      return (
        <fieldset className="row submit-row">
          <button  className="btn btn-block submit-form"
            type={this.props.type || 'button'}
            value={this.props.value || null}
          >
            {this.props.text}
          </button>
        </fieldset>
      );
    }
  };
  
  class Label extends React.Component {
    render() {
      if (this.props.hasLabel === 'true') {
        return <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
      }
    }
  }
  
  class Input extends React.Component {
    render() {
      return (
        <fieldset>
          <Label
            hasLabel={this.props.hasLabel}
            htmlFor={this.props.htmlFor}
            label={this.props.label}
          />
  
          <input
            id={this.props.htmlFor}
            max={this.props.max || null}
            min={this.props.min || null}
            name={this.props.name || null}
            placeholder={this.props.placeholder || null}
            required={this.props.required || null}
            step={this.props.step || null}
            type={this.props.type || 'text'}
          />
        </fieldset>
      );
    }
  }
  
  class Form extends React.Component {
    render() {
      return (
        <div className="col-md-4 " method='' action=''>
        <form>
            <div id="login-form" className="form-container">
                <div className="row">
                    <div className="form-title">
                        <h1><img src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d"/></h1>
                    </div>
                </div>
            <div className="input-container">
                <div className="row">
                    <span className="req-input valid" >
                        <span className="input-status"> </span>
                        <Input
                            hasLabel='true'
                            htmlFor='textInput'
                            placeholder='First Name'
                            required='true'
                            type='text'
                            data-min-length="8"
                        />
                    </span>
                </div>
                <div className="row">
                    <span className="req-input valid" >
                        <span className="input-status"> </span>
                        <Input
                            hasLabel='true'
                            htmlFor='textInput'
                            placeholder='Last Name'
                            required='true'
                            type='text'
                            data-min-length="8"
                        />
                    </span>
                </div>
                <div className="row">
                    <span className="req-input valid" >
                        <span className="input-status"> </span>
                        <Input
                            hasLabel='true'
                            htmlFor='emailInput'
                            placeholder='Email'
                            required='true'
                            type='email'
                        />
                    </span>
                </div>
                <div className="row">
                    <span className="req-input confirm-password">
                        <span className="input-status"> </span>
                        <Input
                            hasLabel='true'
                            htmlFor='passwordInput'
                            placeholder='Password'
                            required='true'
                            type='password'
                        />
                    </span>
                </div> 
                <div className="row submit-row">
                    <Button
                        type='submit'
                        value='submit'
                        text='Sign Up'
                    />
                </div>
                <div class="row">
                    <NavLink to="/signip" className="create-account">Sign In</NavLink>
                </div>
          </div>
          </div> 
        </form>
        </div> 
      )
    }
  }
  export default Form;

  