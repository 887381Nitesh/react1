import React, {useState,useEffect} from 'react';
import './details.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useParams, useSearchParams,useNavigate } from 'react-router-dom';
import Header from '../Header';

const base_url ="https://apiflip.onrender.com";

const DetailDisplay =() =>{
        let navigate = useNavigate()
        let [searchParams] = useSearchParams()
        let [productDetails, setproductDetails]=useState()
        let [categoryId]=useState(sessionStorage.getItem('categoryId'))
        let productId = searchParams.getAll('productId');
const productDetail= async() => {
         const rdata = await axios.get(`${base_url}/details/${productId}`)
         setproductDetails(rdata.data[0])
         }
            useEffect(() =>{
            productDetail()
            
        },[])

        const proceed =() =>{
         navigate(`/placeOrder/${productDetails.product_name}`)
          
        }

    const renderDetails = () => {
        if(productDetails){
         return(
        <>
        <Header/>
            
            <div id="content">
                <div id="imgDiv">
                    <img src={productDetails.Image} alt={productDetails.product_name}/>
                </div>
                    <div id="contentDiv">
                            <h1>{productDetails.description}</h1>
                            <h2>{productDetails.product_name}</h2>
                            <span><h3>{productDetails.rating}</h3></span>
                            <h3>Old Price:<del>Rs.1000</del></h3>
                            <h3>New Price:Rs.{productDetails.Price}</h3>
                            <h2> {productDetails.Brand}</h2>
                    <div class="feature_Container">
                                <figure >
                                    <img src="https://i.ibb.co/wJvrhYg/veg.png" class="featureIcon" alt="feature"/>
                                    <figcaption>Pure Cotton</figcaption>
                                </figure>
                                <figure class="featureIcon">
                                    <img src="https://i.ibb.co/mD3jpgc/sentizied.png" class="featureIcon" alt="feature"/>
                                    <figcaption> Senatized</figcaption>
                                </figure>
                                <figure class="featureIcon">
                                    <img src="https://i.ibb.co/kHrm3Mh/delivery.png" class="featureIcon" alt="feature"/>
                                    <figcaption>Free Delivery</figcaption>
                              </figure>

                              
                    </div>
                    <hr/>
                 <div className="col-md-12">  
                <Link className="btn btn-danger btn-lg"
                to={`/listing/${productId}`}>Back</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-warning btn-lg"
                onClick={proceed}>Buy Now</button>
                </div>
                    </div>  
                        
                </div>

   
        </>
         )
        }
    }
    return(
   <>
        <div className="Main">
           {renderDetails()} 
        </div>
        

   </>
    )
}

export default DetailDisplay