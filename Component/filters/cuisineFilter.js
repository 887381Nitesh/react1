import React from 'react';
import axios from 'axios';

const url ="https://apiflip.onrender.com/filter";


const CuisineFilter = (props) => {
    

    const handleFilter = (event) => {
        let categoryId = props.categoryId;
        let cuisineId = event.target.value;
        let cuisineUrl = "";
        if(cuisineId === ""){
            cuisineUrl = `${url}/${categoryId}`
        }else{
            cuisineUrl = `${url}/${categoryId}?cuisine=${cuisineId}`
        }

        axios.get(cuisineUrl)
            .then((res) => {props.productPerCuisine(res.data)})
    }

    return(
        <>
            <center><h3>Cuisine Filter</h3></center>
            <div style={{marginLeft:'15%'}} onChange={handleFilter}>
                <label className="radio">
                    <input type="radio" name="cuisine" value=""/>All
                </label>
                <label className="radio">
                    <input type="radio" name="cuisine" value="1"/>Mens Collections
                </label>
                <label className="radio">
                    <input type="radio" name="cuisine" value="2"/>Women Collections
                </label>
                <label className="radio">
                    <input type="radio" name="cuisine" value="3"/>Mobile & Tablet
                </label>
                <label className="radio">
                    <input type="radio" name="cuisine" value="4"/>Electronics Item
                </label>
                <label className="radio">
                    <input type="radio" name="cuisine" value="5"/>Home & Application
                </label>
            </div>

        </>
    )
}

export default CuisineFilter