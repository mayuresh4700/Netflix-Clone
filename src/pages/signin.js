import React, { useState,useContext } from 'react'
import { useHistory } from 'react-router';
import { FirebaseContext } from "../context/firebase"
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';


export default function Signin() {
    const {firebase}  = useContext(FirebaseContext)
    const History = useHistory()
    const [Error, setError] = useState('');
    const [EamilAddress, setEmailAddress] = useState('');
    const [Password, setPassword] = useState('');
    
    const isInvalid = EamilAddress === '' || Password === '';
    const handleSignIn = (event) =>{
       event.preventDefault();
       firebase
        .auth()
        .signInWithEmailAndPassword(EamilAddress,Password)
        .then(()=>{
            History.push(ROUTES.BROWSE);
        })
        .catch((error)=>{
            setPassword('');
            setEmailAddress('');
            setError(error.message);
        })

    }

    return <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {Error && <Form.Error>{Error}</Form.Error>}
                <Form.Base onSubmit={handleSignIn} method ="POST">
                    <Form.Input
                        placeholder="Email or phone number"
                        type="email"
                        value = {EamilAddress}
                        onChange={({ target }) => setEmailAddress(target.value)}
                    />
                    <Form.Input
                        placeholder="Password"
                        value = {Password}
                        type="password"
                        autoComplete="off"
                        onChange={({target}) =>setPassword(target.value)}
                    />
                    <Form.Submit disabled ={isInvalid} type = "submit">Sign In</Form.Submit>
                </Form.Base>
                <Form.Text>
                    New to Netflix ? <Form.Link to ={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
                </Form.Text>
                <Form.TextSmall>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                </Form.TextSmall>
            </Form>

        </HeaderContainer>
        <FooterContainer />
    </>

}
