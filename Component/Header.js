import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import {Link} from 'react-router-dom';

const url ="http://3.17.216.66:5000/api/auth/userinfo"

const Header = () => {

    const [userData,setUserData] = useState('')
    let navigate = useNavigate();

    useEffect(() => {
        if(sessionStorage.getItem('ltk') !== null){
            fetch(url,{
                method:'GET',
                headers:{
                    'x-access-token':sessionStorage.getItem('ltk')
                }
            })
            .then((res) => res.json())
            .then((data) => {
                setUserData(data)
            })
        }
    },[])

    const handleLogout = () => {
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('userInfo')
        setUserData('');
        navigate('/')
    }



    const ConditionalHeader = () => {
        if(userData){
            if(userData.name){
                return(
                    <>
                    <Link to="register" className='btn btn-danger'>
                    <span className="glyphicon glyphicon-user"></span> Hi {userData.name}
                 </Link>&nbsp;&nbsp;
                <button onClick={handleLogout} className='btn btn-success'>
                    <span className="glyphicon glyphicon-log-in"></span> Logout
                </button>
                </>  
                )
                }
            }else{
                return(
                    <>
                     <Link to="register" className='btn btn-danger'>
                        <span className="glyphicon glyphicon-user"></span> Sign Up
                    </Link>&nbsp;&nbsp;
                    <Link to="login" className='btn btn-success'>
                        <span className="glyphicon glyphicon-log-in"></span> Login
                    </Link>
                    </>
                )
            }
        
    }
    return(
        <>
        <nav>
          <Link className ='btn btn-warning' to ="/">Home</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="name">   
                Flip<span>kart  
                    <i class="fa-solid fa-clone"></i> </span>
            </div>

            <button class="btn_location" onClick="geolocation()">Location <i class="fa-solid fa-location-dot"></i></button>
            
            <div class="search">
                <input type="text" placeholder="Search For Products brands and more"/>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div id ="social">
                {ConditionalHeader()}
            
                <a href="#" class="become">More<i class="fa-solid fa-angle-down"></i></a>
            <a href="#" class="become">
                <i class="fa-solid fa-cart-shopping"></i> Cart</a>
            </div>
                
            
                <div class="mode">       
                    <span class="change">OFF </span>
                    <i class="fa-regular fa-lightbulb"></i>
                </div>     
        
       </nav>

        </>
    )
    
}

export default Header;