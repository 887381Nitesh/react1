import React from 'react';
import {Link} from 'react-router-dom';

const ListingDisplay = (props) => {

    const renderData =({listData}) => {
        if(listData){
            if(listData.length > 0) {
                return listData.map((item) => {
                    return(
                       
 <div class="card card" key={item._id}>
<Link to={`/details?productId=${item.product_id}`}>

  <img class="card-img-top" src={item.Image} alt={item.product_name}/>
  
  <div class="card-body">
    <h4 class="card-title">{item.description}</h4>
    <p class="card-text"><b>{item.rating}</b></p>
    
    <p class="card-text"> <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span></p>
   
   <a  class="btn btn-danger">{item.Price} <del>1000</del> 50% off</a>

  </div>
  </Link>
</div>
                    )
                })
            
            }else{
                return(
                    <h2>No Data Found</h2>
                )
            }
        }else{
            return(
                <div>
                    <h2>Loading</h2>
                    <img src="/images/loader.gif" alt="loader"/>
                </div>
            )
        }
    }

    return(
        <div className="row">
            {renderData(props)}
        </div>
    )
}
export default ListingDisplay;
