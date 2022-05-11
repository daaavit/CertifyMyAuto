import React from 'react'
import { MainWrapper } from '../Styles/Home.Styles';
import Navbar from './Navbar';
import Info from './Info'

const Home = () => {
    return(
        <MainWrapper>
            <Navbar />
            <Info />
        </MainWrapper>
    )
}

export default Home;