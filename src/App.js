import React, { Component, Fragment } from 'react';
import "./App.css";

class App extends Component {
  render() {
    return(
      <Fragment>
        {/* MENU */}

        <div className="menu">
          <ul>
            <li className="logo"><img src="/images/77c3f8418880a56f5f75687c4d268a20" /></li>
            <li>Home</li>
            <li>Help Center</li>
            <li>Services</li>
            <li>About Us</li>
            <li><a href="#" className="signup-btn"><span>Sign Up</span></a></li>
          </ul>
        </div>

        {/* Background and heading */}

        <section className="home">
          <div className="container">
            <div className="row">
              <h1 className="h1h1h1">You Sell it We <span> Deliver </span> it</h1>
              <br />
              <p className="p2">Leave the logistics to us, while you foucs on your<br /> customers & your Products</p>
              <img src="/images/landing_bg.png" className="iaiaiaimg" />
              <img src="/images/Mask Group 1.png" className="iiaimg" />
              <img src="/images/clouds.png" className="iaiaimg" />
              <img src="/images/waves.png" className="waves" />
            </div>
          </div>
        </section>

      <img src="/images/second_section_.png" className="client" />

  
      <div className="container">
        <div className="col-lg-12 col-md-12">
          <img src="/images/Group 140.png" className="image" />
          <h5 className="H111">Super Fast Delivery </h5>
          <p className="pp">We only need 45-60 minutes to get your prodect into your customers hands</p>
        </div>

        <div className="col-lg-12 col-md-12">
          <img src="/images/Group 152.png" className="image1" />
          <h5 className="H1111">Super Fast Delivery </h5>
          <p className="ppp">We only need 45-60 minutes to get your prodect into your customers hands</p>
        </div>
      </div>


      <section className="miideles text-center">
        <div className="container">
          <div className="row">
              <div className="col-lg-6 col-md-6">
              <h4 className="h4h4h4 text-center">Why Choose <br /> <span>kudzoka</span></h4>
                 <img src="/images/why_kudzoka_bg.png" className="image2" />
              </div>

              <div className="col-lg-6 col-md-6 text-center">
                <img src="/images/Group 1020.png" className="image3" />
                <h5 className="H5555555">Discounts</h5>
                <p className="ppp555">We only need 45-60 minutes to get your prodect into your customers hands</p>
              </div>
          </div>
        </div>
      </section>

    <section className="features text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <img src="/images/Group 1006.png" className="imgg" />
          </div>
    
          <div className="col-lg-4 col-md-4 text-center">
          <img src="/images/Group 1007.png" className="imggg" />
          <h2 className="H2">Round the clock Support</h2>
          <p className="Parahrag">We only need 45-60 minutes to get your product<br /> into your customers hands</p>
          </div>

          <div className="col-lg-4 col-md-4">
          <img src="/images/Group 1008.png" className="imgg" />
          </div>

        </div>
      </div>
    </section>


        {/* Footer */}

        <section className="footer">
              <div className="imggggggggggs">
                <img src="/images/120570240_1438492939673479_1452111268841416043_n-removebg-preview.png" style={{width: "400px"}} className="imggggggg"/>
                <div>
                      
                  <ul className="buttonnn list-unstyled">
                    <li className="li1"><img src="/images/apple.png"/>App Store </li>
                    <li className="li2"><img src="/images/play-store.png"/>Play Store </li>
                  </ul>
      
                  <ul className="list-unstyled three-columns linkks">
                    <li><img src="/images/Icon simple-whatsapp.png" /></li>
                    <li><img src="/images/Icon feather-facebook.png" /></li>
                    <li><img src="/images/Icon awesome-instagram.png" /></li>
                  </ul>

                  <ul className="list-unstyled social-list">
                    <li>Home </li>
                    <li>Services </li>
                    <li>About Us </li>
                    <li>Help Center </li>
                  </ul>
                </div>
              </div>
        </section>
    
    </Fragment>

    )
  }
}

export default App;
