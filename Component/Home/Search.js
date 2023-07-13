import React,{useState} from 'react';
import './Search.css' ;

const Search = () =>{

  const [Product, setProduct] = useState('Test')
  const [Item, setItem] = useState('Test')
    return(
        <>
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
        
<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://i.ibb.co/PWw2w84/one.jpg" className="d-block w-100" alt="img"/>
      </div>
      <div className="carousel-item">
        <img src="https://i.ibb.co/L801rzC/two.jpg" className="d-block w-100" alt="img"/>
      </div>
      <div className="carousel-item">
        <img src="https://i.ibb.co/yQSxBrM/three.jpg" className="d-block w-100" alt="img"/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
        </>
    )
}

export default Search;