import React, { useState } from 'react'
import { Optform } from "../components"
import { useHistory } from 'react-router';
import * as ROUTES from '../constants/routes';
import { Form } from '../components';


export default function OptformContainer() {
    const [EamilAddress, setEmailAddress] = useState('');
    const [Error, setError] = useState('');
    const History = useHistory()
    const isInvalid = EamilAddress === ''
    const handleSubmit = () => {
        (isInvalid ? setError("Fill email address correctly") : History.push(ROUTES.SIGN_IN))

    }
    return <>

        <Optform>
            <Optform.Input placeholder="Email address" onChange={({ target }) => setEmailAddress(target.value)} />
            <Optform.Button onClick={handleSubmit}>Get Started</Optform.Button>
            <Optform.Break />
            <Optform.Text>Ready to watch? Enter your email to create or restart your membership.</Optform.Text>
        </Optform>
        <Optform>
            {Error && <Form.Error>{Error}</Form.Error>}
        </Optform>
    </>
}