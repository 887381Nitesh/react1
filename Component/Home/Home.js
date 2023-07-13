import React from 'react'; 
import Search from './Search';
import Quick from './Quick';
import Header from '../Header';

const Home = () =>{
    return(
        <>
        <Header/>
        <Search/>
        <Quick/>
        </>
    )
}

export default Home;