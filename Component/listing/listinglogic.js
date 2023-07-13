import React,{useState,useEffect} from 'react';
import './listing.css';
import {useParams} from 'react-router-dom';
import ListingDisplay from './listingDisplay';
import axios from 'axios';
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/costFilter';
import Header from '../Header';

const base_url ="https://apiflip.onrender.com";

const Listing =() =>{
    let params = useParams();

    const [productList, setProductList] = useState();
    let categoryid =params.categoryId;
    useEffect(() =>{
    
    sessionStorage.setItem('categoryId',categoryid) 
    axios.get(`${base_url}/itemlisting1?category_id=${categoryid}`)
    .then((res) =>{
        setProductList(res.data)
    })
    },[])

    const setDataPerFilter = (data) => {
        setProductList(data)
    }
    return(
        <>
        <Header/>
        <section className="topProduct">
            <div className="topProduct_nav">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47e5c31ef7dcce1e.png?q=100"/>
                <p>Top Offers </p>
            </div>
            <div className="topProduct_nav">
                <img src="	https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5f8bd5669e19e724.png?q=100"/>
                <p>Mobiles & Tablets</p>
            </div>
            <div className="topProduct_nav">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/361d53b8725c2d2d.png?q=100"/>
                <p>Electronics</p>
            </div>
            <div className="topProduct_nav">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/904f3c8e7101408b.png?q=100"/>
                <p>TVs & Appliances</p>
            </div>
            <div className="topProduct_nav">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/7f7355480c6adc16.png?q=100"/>
                <p>Fashion</p>
            </div>
            <div className="topProduct_nav">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f97d6138516056bc.png?q=100"/>
                <p>Beauty</p>
            </div>
            <div className="topProduct_nav">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/6728ed3cf145562c.png?q=100"/>
                <p>Home & Furniture</p>
            </div>
            <div id="container_location">
                <h3 className="location_img">Weather location <i class="fa-solid fa-cloud-sun" ></i></h3>
    
                 
                <p id="out"></p>
                <p id="weather"></p>
            </div>
        </section>

        <div className="Fashion">
           <p> Men's Top <span>Collections
            <i class="fa-solid fa-shirt"></i>
        </span></p>
        </div>
        
        
            <div className='row'>
                <div id="mainListing">
                    <div id="filter">
                    <CuisineFilter categoryId={categoryid}
                    productPerCuisine={(data) => {setDataPerFilter(data)}} />
                    <CostFilter  categoryId={categoryid}
                    productPerCost={(data) => {setDataPerFilter(data)}} />
            
                    </div>
                    <ListingDisplay listData={productList}/>
                </div>
            </div>
        

        
        </>
    )
}

export default Listing;
