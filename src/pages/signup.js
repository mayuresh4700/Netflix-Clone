import React, { useState,useContext } from 'react'
import { useHistory } from 'react-router';
import { FirebaseContext } from "../context/firebase"
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signup() {
    const History = useHistory();
    const {firebase} = useContext(FirebaseContext);
    const [firstName,setfirstName] = useState('');
    const [Error,setError] = useState('');
    const [emailAddress,setemailAddress] = useState('');
    const [password,setpassword] = useState('');
    const isInvalid = firstName === '' || emailAddress ==='' || password === ''

    const handleSignUp = (event) =>{
        event.preventDefault();
        return firebase
        .auth()
        .createUserWithEmailAndPassword(emailAddress,password)
        .then((result) =>{
            result.user
            .updateProfile({
                displayName: firstName,
                photoURL :Math.floor(Math.random()* 5) +1,
            })
            .then(()=>{
                History.push(ROUTES.BROWSE);
            })
            .catch((error)=>{
                setfirstName('');
                setpassword('');
                setemailAddress('');
                setError(error.message)
            })

        })
    }
    
    return <>
            <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {Error && <Form.Error>{Error}</Form.Error>}
                <Form.Base onSubmit={handleSignUp} method ="POST">
                    <Form.Input
                        placeholder="First Name"
                        type="text"
                        value = {firstName}
                        onChange={({ target }) => setfirstName(target.value)}
                    />
                    <Form.Input
                        placeholder="Email address"
                        value = {emailAddress}
                        type="email"
                        onChange={({target}) =>setemailAddress(target.value)}
                    />
                    <Form.Input
                        placeholder="Password"
                        value = {password}
                        type="password"
                        autoComplete="off"
                        onChange={({target}) =>setpassword(target.value)}
                    />
                    <Form.Submit disabled ={isInvalid} type = "submit">Sign Up</Form.Submit>
                </Form.Base>
                <Form.Text>
                    Already a user ? <Form.Link to ={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
                </Form.Text>
                <Form.TextSmall>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                </Form.TextSmall>
            </Form>

        </HeaderContainer>
        <FooterContainer />
    </>

}
