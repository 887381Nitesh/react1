import React from 'react';
import axios from 'axios';

const url = "https://apiflip.onrender.com/filter";

const CostFilter = (props) => {

    const handleFilter = (event) => {
        let categoryId = props.categoryId;
        let cost = (event.target.value).split('-')
        let lcost = cost[0];
        let hcost = cost[1];
        let costUrl = "";
        if(event.target.value === ""){
            costUrl = `${url}/${categoryId}`
        }else{
            costUrl = `${url}/${categoryId}?hcost=${hcost}&lcost=${lcost}`
        }

        axios.get(costUrl)
            .then((res) => {props.productPerCost(res.data)})
    }

    return(
        <>
            <center><h3>Cost Filter</h3></center>
            <div style={{marginLeft:'15%'}} onChange={handleFilter}>
                <label className="radio">
                    <input type="radio" name="cuisine" value=""/>All
                </label>
                <label className="radio">
                    <input type="radio" name="cuisine" value="0-500"/>0-500
                </label>
                <label className="radio">
                    <input type="radio" name="cuisine" value="501-1000"/>501-1000
                </label>
                <label className="radio">
                    <input type="radio" name="cuisine" value="1101-1500"/>1101-1500
                </label>
                <label className="radio">
                    <input type="radio" name="cuisine" value="1501-2000"/>1501-2000
                </label>
                <label className="radio">
                    <input type="radio" name="cuisine" value="2001-50000"/>2001-50000
                </label>
            </div>

        </>
    )
}

export default CostFilter