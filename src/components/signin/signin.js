import React, { Component } from "react";
import { connect } from "redux-zero/react";
import { NavLink, Redirect} from 'react-router-dom';
/*
const SignIn = () => {
    return(
<div className="col-md-4">
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
                <span className="input-status" title="Input your email."> </span>
                <input type="email" data-min-length="8" placeholder="Email" required=""/>
            </span>
        </div>
        <div className="row">
            <span className="req-input confirm-password">
                <span className="input-status" data-toggle="tooltip" title="Password Must Match Initial Password Field."> </span>
                <input type="password" data-min-length="8" placeholder="Password" required=""/>
            </span>
        </div>  
        <div className="row submit-row">
            <NavLink to="/trello" className="btn btn-block submit-form">Sign In</NavLink>
        </div>
        <div class="row">
            <NavLink to="/signup" className="create-account">Create an Account </NavLink>
	    </div>
    </div>
    </div>

    </form>
</div>
    );
}

export default SignIn;
*/

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
  
  const FormSignIn =({successLogin})=> {
  
      return (
        <div className="col-md-4 " method='' action=''>
            {
            successLogin  && <Redirect to = "/signup" />
         }
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
                        text='Sign In'
                    />
                </div>
                <div class="row">
                    <NavLink to="/signup" className="create-account">Create an Account </NavLink>
                </div>
            </div>
          </div> 
        </form>
        </div> 
      )
    }
  
  //export default FormSignIn;

  
  const mapToProps = ({successLogin})  => ({successLogin}) 
  export default connect(mapToProps)(FormSignIn) ;