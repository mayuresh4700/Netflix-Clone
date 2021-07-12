import React from 'react'
import { Footer } from '../components'
export default function FooterContainer(){
    return (
        <Footer>
            <Footer.Title>Questions? Contact us.</Footer.Title>
            <Footer.Break/>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href='#'>FAQ</Footer.Link>
                    <Footer.Link href='#'>Investor Relations</Footer.Link>
                    <Footer.Link href='#'>Ways to Watch</Footer.Link>
                    <Footer.Link href='#'>Corporate Information</Footer.Link>
                    <Footer.Link href='#'>Netfilx Originals</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href='#'>Help Center</Footer.Link>
                    <Footer.Link href='#'>Jobs</Footer.Link>
                    <Footer.Link href='#'>Terms of Use</Footer.Link>
                    <Footer.Link href='#'>Contact Us</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href='#'>Accounts</Footer.Link>
                    <Footer.Link href='#'>Redeem Gift Cards</Footer.Link>
                    <Footer.Link href='#'>Privacy</Footer.Link>
                    <Footer.Link href='#'>Seed Test</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href='#'>Media Center</Footer.Link>
                    <Footer.Link href='#'>Buy Gift Cards</Footer.Link>
                    <Footer.Link href='#'>Cookies Preferences</Footer.Link>
                    <Footer.Link href='#'>Legal Notice</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break/>
            <Footer.Text>Netfilx India</Footer.Text>
        </Footer>
    )
}