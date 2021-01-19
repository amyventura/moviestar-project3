import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import CustomInput from '../../components/custom-input/custom-input.component';

import {Container, Header ,Button} from './forget-password.style';

const ForgetPassword=()=>{
    const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
    const handleEmail = event => {
        const { value } = event.target;
        setEmail(value);
      
      };
      const handlePassword = event => {
        const { value } = event.target;
        setPassword(value);
      
      };
    return <div className="main__page">
 <Container>
        <Header>Forgot Email/Password</Header>
        <span className="question">How would you like to reset your password?</span>
        <div className="radios">
            <div>
                 <input type="radio" name='type' className="radio-btn"/> 
            <span className="title">Email</span>
            </div>
            <div>
                 <input type="radio" name='type' className="radio-btn"/>
            <span className="title">Text Message (SMS)</span>

            </div>
           
           
        </div>
        <input type="email" className="recovery"/>
       
    <Button>Email Me</Button> <div className="description">
                <a href="#" className="facebook">I don't remember my email or phone</a>
            </div>
        
        </Container>
    </div>  
    
   
    
}

export default ForgetPassword;