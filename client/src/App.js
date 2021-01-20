import logo from './logo.svg';
import SignIn from './pages/sign-in/sign-in.page';
import { Route, Router } from 'react-router-dom';
import ForgetPassword from './pages/forget-password/forget-password.page'
import { GlobalStyles } from './global.styles';
import Home from './pages/home-page/home-page.page';
import SignUp from './pages/sign-up/sign-up.page';
import { Join } from './pages/Join/Join';
import { Chat } from './pages/Chat/Chat';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
<Route exact path='/' component={SignIn}/>
<Route exact path='/forget-password' component={ForgetPassword}/>
<Route exact path='/home' component={Home}/>
<Route exact path='/signup' component={SignUp}/>
<Route path='/' exact component={Join} />
<Route path='/chat' component={Chat} />


    </div>
  );
}

export default App;
