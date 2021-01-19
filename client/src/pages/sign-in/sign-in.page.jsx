import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import CustomInput from '../../components/custom-input/custom-input.component';
import './sign-in.css'

import {Container, Header ,Button} from './sign-in.style';

const SignIn=(props)=>{
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
    return   <div className='main__page'> 
        <Container>
        <div className="upper">
        <Header>Sign In</Header>
        <CustomInput
						name='Email'
						type='email'
						value={email}
						handleChange={handleEmail}
						label='Email'
					/>
                    <CustomInput
                                    name='Password'
                                    type='password'
                                    value={password}
                                    handleChange={handlePassword}
                                    label='Password'
                                />
<Button onClick={()=>props.history.push('/home')}>Sign In</Button>
        </div>
        <div className="lower">
            <div className="to-signup">
                <span className="gray">New to Movie Star ?</span>
                <a href="/signup" className="signup">SignUp</a>
            </div>
        </div>
        
        </Container>
    

    </div>
}

export default SignIn;