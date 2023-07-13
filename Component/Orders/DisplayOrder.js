import React from 'react';

const Display = (props) => {

    const renderData =({orderData}) => {
        if(orderData){
            return orderData.map((item) =>{
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.product_name}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td> Rs.{item.cost}</td>
                        <td>{item.address}</td>
                    </tr>
                )
            })
        }
    }

    return(
        <div className="container1">
            <center><h3>Orders place Successfully..</h3></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>Pname</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Cost</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {renderData(props)}
                </tbody>
            </table>
            <div className="placeorder1">
            
            </div>
        </div>
        
        
    )

}

export default Display;