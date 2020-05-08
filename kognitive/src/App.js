import React from 'react';
import './App.css';

function App() {
  return (
    
    <div className="App-header">

      <div class="card mt-4 mr-3 ml-3">
  <div class="card-body">

  <div class="login-form">
    <form action = "">
    <img class="card-img-top" src="./kog_logo_flat@3x.png/" alt="Card image cap"/>

    <div class="social-icon">
        <button type="button mb-3"><span class="input-icon"><img  src="./assets/icons/othersize/google-favicon.png/"/>&nbsp;</span>Login With Google</button>
        <button type="button"><span class="input-icon"><img  src="./assets/icons/othersize/microsoft.png/"/>&nbsp;</span>Login With Office 365</button>
      </div>
      <div class="seperator"><b>or</b></div>
    <div class="form-group">
        <input type="email" name="email" placeholder="Your Employee ID"/>
        <span class="input-icon"><img  src="./assets/icons/24/icon-24-person-grey.png/"/></span>
      </div>
      <div class="form-group">
        <input type="password" name="psw" placeholder="Your Password"/>
        <span class="input-icon"><img src="./assets/icons/24/icon-24-password.png/"/></span>
      </div>
      <button class="login-btn">Login</button> 
    </form>
    </div>

  </div>
  </div>
</div>
  );
}

export default App;
