import React from 'react';
import {Link} from 'react-router-dom';

const QuickDisplay =(props) => {
    const ListProduct =({productData}) =>{
        if(productData){
            return productData.map((item) =>{
                return(
                    <Link to={`/listing/}${item.category_id}`}> 
                <div className="TileContainer">
                    <div className="TileComponent1">
                        <img src={item.Image} alt={item.product_name}/>
                    </div>
                    <div className="TileComponent2">
                        <div className="ComHeading">
                            {item.product_name}
                        </div>
                        <div className="ComSubHeading">
                        <b>{item.description}</b>
                            <h3> {item.Price} </h3>
                        </div>
                    </div>
                </div>
                </Link>
                )
            })
        }
    }
    return(
        <div className="MainBox">
              {ListProduct(props)}  
                
            </div>
    )
}
export default QuickDisplay;