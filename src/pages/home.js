import React from 'react'
import JumbotronsContainer from "../containers/jumbotrons"
import FooterContainer from '../containers/footer';
import FaqsContainer from '../containers/faq';
import HeaderContainer from '../containers/header';
import OptformContainer from '../containers/opt-form';
import { Features } from '../components';
export default function home() {
    return (
        <>
            < HeaderContainer>
                <Features>
                    <Features.Title> Unlimited movies, TV shows and more.</Features.Title>
                    <Features.SubTitle>Watch anywhere. Cancel anytime.</Features.SubTitle>
                    <OptformContainer />
                </Features>
            </HeaderContainer>
            <JumbotronsContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}
