import React from 'react'
import {Container,Input,Button,Text,Break} from "./styles/opt-form"

export default function Optform ({children,...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Optform.Input = function OptformInput({...restProps}){
    return <Input {...restProps}/>
}

Optform.Button = function OptformButton({children,...restProps}){
    return <Button {...restProps}>
        {children} <img src="/images/icons/chevron-right.png" alt="right"/>
    </Button>
}
Optform.Text = function OptformText({children,...restProps}){
    return <Text {...restProps}>{children}</Text>
}
Optform.Break = function OptformBreak({...restProps}){
    return <Break {...restProps}/>
}