import React from 'react'
import {Optform} from "../components"

export default function OptformContainer() {
    return <Optform>
                <Optform.Input placeholder="Email address"/>
                <Optform.Button>Get Started</Optform.Button>
                <Optform.Break />
                <Optform.Text>Ready to watch? Enter your email to create or restart your membership.</Optform.Text>
            </Optform>
}