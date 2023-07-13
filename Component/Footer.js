import React from 'react'; 
import './Footer.css'

const Footer = () =>{
    return(
        <>
        <footer>
    <hr/>
    <p class="footText">&copy;Develop By NITESH KUMAR 
        <i class="fa-solid fa-clone"></i>
        2023
    </p>
            <hr/>
          <div class="footDiv">
                <span><i class="fa-solid fa-at"></i>
                    Mail Us:</span> 
                <p>Laxmisagar road no-6</p>
                <p>Darbhanga</p>
                <p>Bihar</p>
                <p>846009</p>
          </div>
          <div class="footDiv2">
            <span>keep me in touch</span>
            <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
          <div class="playstore">
          <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="img"/>
          <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"alt="img"/>
          </div>
          </div>
         
            <hr/>
            <div class="footDiv1">
                <a href="#"> <i class="fa-solid fa-address-card"></i>
                    About US</a> 
                <a href="#"> 
                    <i class="fa-solid fa-address-book"></i>
                    Contact US</a>
                <a href="#"> <i class="fa-solid fa-store"></i>
                    Flipkart Stories</a>
                    <a href="#"><i class="fa-solid fa-handshake-angle"></i> Help Center</a>    
            </div>
        <div id="social2">
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" alt="rupay" class="socialLogo2"/>
         </div>
         <hr/>          
</footer>
        </>
    )
}

export default Footer;