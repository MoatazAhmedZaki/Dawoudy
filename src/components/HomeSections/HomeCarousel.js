import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
const text = require('../localization/lan.json');


export default class HomeCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: text.en
    };
  }
  checklang = () => {
    if (this.props.language === 'en') {
      this.setState({ text: text.en });
    } else {
      this.setState({ text: text.ar });
    }
  };

  componentDidUpdate(previousProps, previousState) {
    if (previousProps !== this.props) {
      if (this.props.language === 'ar') {
        this.setState({ text: text.ar });
      } else {
        this.setState({ text: text.en });
      }
    }
  }

  changeLanguage = e => {
    e.preventDefault();
    this.props.changeLang(e.target.id);
  };
  componentDidMount() {
    this.checklang();
  }
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.morethanshipping.com/wp-content/uploads/2015/10/iStock_000054772328_Large.jpg"
              alt="First slide"
              style={{maxHeight:"500px"}}

            />
            {/* <Carousel.Caption > */}
              {/* <h3             
>
              {this.state.text.homecaru1}

              </h3> */}
            {/* </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://atlas-network.com/wp-content/uploads/2019/03/containers1-16.9.jpg"
              alt="Third slide"
              style={{maxHeight:"500px"}}
            />

            {/* <Carousel.Caption> */}
              {/* <h3>
              {this.state.text.homecaru2}

              </h3> */}
            {/* </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://techbeacon.scdn7.secure.raxcdn.com/sites/default/files/styles/article_hero_image/public/field/image/container-security-nist.jpg?itok=j7ustzm4"

              alt="Third slide"
              style={{maxHeight:"500px"}}

            />

            {/* <Carousel.Caption> */}
              {/* <h3> 
              {this.state.text.homecaru3}

              </h3> */}
            {/* </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
