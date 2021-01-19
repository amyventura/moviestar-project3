import logo from './logo.svg';
import SignIn from './pages/sign-in/sign-in.page';
import { Route, Router } from 'react-router-dom';
import ForgetPassword from './pages/forget-password/forget-password.page'
import { GlobalStyles } from './global.styles';
import Home from './pages/home-page/home-page.page';
import SignUp from './pages/sign-up/sign-up.page';
function SignIn() {
  return (
    <div className="SignIn">
      <GlobalStyles/>
<Route exact path='/' component={SignIn}/>
<Route exact path='/forget-password' component={ForgetPassword}/>
<Route exact path='/home' component={Home}/>
<Route exact path='/signup' component={SignUp}/>


    </div>
  );
}

export default SignIn;
