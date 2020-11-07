

import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel' 

class Home extends Component {

  render() {

    return (
      <div className="container">
      <Carousel> 
      <Carousel.Item style={{'height':"600px"}} >  
            <img style={{'height':"600px"}} className="d-block w-100" src={'https://i.redd.it/mlkg8iy5xeu21.jpg'}  />  
          </Carousel.Item  > 
          <Carousel.Item style={{'height':"600px"}} >  
            <img style={{'height':"600px"}} className="d-block w-100" src={'https://store.hp.com/app/assets/images/uploads/prod/hp-pavilion-gaming-desktop-review-hero1589983682725190.jpg'}  />  
          </Carousel.Item  >
          <Carousel.Item style={{'height':"600px"}} >  
            <img style={{'height':"600px"}} className="d-block w-100" src={'https://www.samma3a.com/tech/en/wp-content/uploads/sites/2/2018/12/razer-blade-15-gaming-laptop-setup.png'}  />  
          </Carousel.Item  >
          <Carousel.Item style={{'height':"600px"}} >  
            <img style={{'height':"600px"}} className="d-block w-100" src={'https://www.digitalstorm.com/img/desktops-2020-05-B.jpg'}  />  
          </Carousel.Item  >
          <Carousel.Item style={{'height':"600px"}} >  
            <img style={{'height':"600px"}} className="d-block w-100" src={'https://cdn.mos.cms.futurecdn.net/enZ95BdJbdw5hDeBKcMMFe-768-80.jpg'}  />  
          </Carousel.Item  >
      </Carousel> 
  </div>
    )};
}
 export default Home;