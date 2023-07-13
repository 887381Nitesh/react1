import React,{useState,useEffect} from 'react'; 
import './Quick.css';
import QuickDisplay from './QuickDisplay'

const base_url ="https://apiflip.onrender.com";

const Quick = () =>{
    const [productType,setProductType] =useState();
    useEffect(() =>{
    fetch(`${base_url}/categoryoption`,{method:'GET'})
    .then((res) => res.json())
    .then((data) =>{
            setProductType(data)   
    })
    },[])
    return(
        <>
            
        <div className="Fashion">
           <p> Men's Top <span>Collections
            <i class="fa-solid fa-shirt"></i>
        </span></p>
        </div>
    
            
            <section className="Container1">
                <div className="MainContainer">
                    <div className="ContainerOffer">
                        <div className="ContainerOffer1">
                            Mens Collections
                        <button>View All</button>
                        </div>
                  </div>
                </div>
            </section>
           
            

            <QuickDisplay productData={productType}/> 
             
            
        
        </>
    )
}

export default Quick;