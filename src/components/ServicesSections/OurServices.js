import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';
import '../../stylesheets/ServicesCss.css';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLang } from '../../globalState/actions/langActions';
import PropTypes from 'prop-types';

const text = require('../localization/lan.json');

class OurServices extends Component {
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
      <section className="ourservices">
        <hr />

        <Container>
          <Row>
            <Col sm={12}>
              <h4>{this.state.text.ourservices}</h4>
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <div className="servicesIcon text-center my-3">
            

              <i class="fas fa-hands-helping fa-4x " style={{color:"#243462"}}></i>

              </div>
            </Col>
          </Row>
          <Row>
            <Col className="m-auto" sm={12}>
              <p className="pt-4 text-center">
                {this.state.text.ourservicesTitle}
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="offer mt-5">
          <Row>
            <Col sm={12}>
              <h6
              
                            className={(this.props.language === 'en' ? 'text-left' : ' text-right withoutletterspace')}

              >
              {this.state.text.offer}


              </h6>
            </Col>
          </Row>
          <Row 
          
                          className={"justify-content-center m-auto text-center pt-4 " + (this.props.language === 'en' ? '' : ' flex-row-reverse')}

          
          
          
          >
            <Col md={3} sm={12}>
              {' '}
              

<i class="fas fa-file-import fa-4x " style={{color:"#223362"}}></i>

              <p 
              
              
              className={ "pt-3" +(this.props.language === 'en' ? '' : '  withoutletterspace')}

              >
              
              {this.state.text.import}

              
              </p>
            </Col>
            <Col md={3} sm={12}>
              {' '}
              <i class="fas fa-file-export  fa-4x " style={{color:"#223362"}}></i>
              <p               className={ "pt-3" +(this.props.language === 'en' ? '' : '  withoutletterspace')}
>
              {this.state.text.export}

                </p>
            </Col>
            <Col  md={3} sm={12}>
              {' '}
           
              <i class="fas fa-truck-loading  fa-4x " style={{color:"#223362"}}></i>
              <p               className={ "pt-3" +(this.props.language === 'en' ? '' : '  withoutletterspace')}
>
              {this.state.text.transit}

                </p>
            </Col>
            <Col  md={3} sm={12}>
              
<i class="fas fa-box fa-4x " style={{color:"#223362"}}></i>
              <p               className={ "pt-3" +(this.props.language === 'en' ? '' : '  withoutletterspace')}
>
                
              {this.state.text.rexport}

                </p>
            </Col>
          </Row>
        </Container>
        <Container className="offer mt-5">
          <Row>
            <Col sm={12}>
              <h6                   className={(this.props.language === 'en' ? 'text-left' : ' text-right withoutletterspace')}
>
              {this.state.text.through}

                
               </h6>
            </Col>
          </Row>
        </Container>

        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
          className="py-5"
        >
          <Row className="py-5 m-0 ">
            <Col sm={10} className="mx-auto ">
              <Nav variant="pills" className="servicestabs">
                {/* <div className="tabsimg">
                  <img
                    alt="tabs img"
                    src="https://dawoudy.s3.eu-central-1.amazonaws.com/tabsline.png"
                  />
                </div> */}
                <Nav.Item className="py-2">
                  <Nav.Link eventKey="first" name="SEA FREIGHT">
                    {this.state.text.caru1}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="py-2">
                  <Nav.Link eventKey="second" name="AIR FREIGHT">
                    {this.state.text.caru2}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="py-2">
                  <Nav.Link eventKey="third" name="CONSOLIDATION">
                    {this.state.text.caru3}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="py-2">
                  <Nav.Link eventKey="fourth" name="WAREHOUSING">
                    {this.state.text.caru4}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="py-2">
                  <Nav.Link eventKey="fifth" name="EXHIBITIONS">
                    {this.state.text.caru5}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="py-2">
                  <Nav.Link eventKey="sixth" name="PROJECT LOGISTICS">
                    {this.state.text.caru6}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={12} className="mx-auto servicesphotos">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="servImage justify-content-center pb-5">
                    <img
                      alt="img1"
                      src="http://www.srlogistics.net.in/wp-content/uploads/2019/07/sea-freight.png"
                    />
                  </div>
                  <Container>
                  <p 
                                className={ (this.props.language === 'en' ? 'text-left' : 'text-right')}

                  
                  >{this.state.text.caru1cap}</p>
</Container>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {' '}
                  <div className="servImage justify-content-center  pb-5">
                    <img
                      alt="img2"
                      src="https://www.airlines.iata.org/sites/default/files/event_images/web_cargo_shutterstock_745545163.png"
                    />
                  </div>
                  <Container>

                  <p                                 className={ (this.props.language === 'en' ? 'text-left' : 'text-right')}
>{this.state.text.caru2cap}</p>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div className="servImage justify-content-center  pb-5">
                    <img
                      alt="img3"
                      src="https://lh3.googleusercontent.com/proxy/FyOkQj58lwmb9sYNJ8bokbg9ck-eUv0n1xpn2QxypbJFTUvSG7oIezo7prHz8fPuChd4zlY3bRHNiB1gnSXfTDoMpjp2Mw"
                    />
                  </div>
                  <Container>

                  <p                                 className={ (this.props.language === 'en' ? 'text-left' : 'text-right')}
>{this.state.text.caru3cap}</p>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  {' '}
                  <div className="servImage justify-content-center  pb-5">
                    <img
                      alt="img4"
                      src="https://cdn.techwireasia.com/wp-content/uploads/2019/02/shutterstock_1023035488-897x500.jpg"
                    />
                  </div>
                  <Container>

                  <p                                 className={ (this.props.language === 'en' ? 'text-left' : 'text-right')}
>{this.state.text.caru4cap}</p>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  {' '}
                  <div className="servImage justify-content-center  pb-5">
                    <img
                      alt="img5"
                      src="https://www.qafila.com/wp-content/uploads/2019/06/freight-transportation-Dubai.jpg"
                    />
                  </div>
                  <Container>

                  <p                                 className={ (this.props.language === 'en' ? 'text-left' : 'text-right')}
>{this.state.text.caru5cap}</p>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <div className="servImage justify-content-center  pb-5">
                    <img
                      alt="img6"
                      src="https://detexshipping.com/wp-content/uploads/2019/09/project-cargo-division-houston-overseeing-the-move-at-the-plipdeco-port.jpg"
                    />
                  </div>
                  <Container>

                      <p                                 className={ (this.props.language === 'en' ? 'text-left' : 'text-right')}
>{this.state.text.caru6cap}</p>
                      <p 
                      
                      className={ "pt-4 "+ (this.props.language === 'en' ? 'text-left' : 'text-right')}
                      >{this.state.text.caru6cap}</p>
                    </Container>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </section>
    );
  }
}
OurServices.propTypes = {
  changeLang: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  language: state.lang.language
});

export default connect(mapStateToProps, { changeLang })(
  withRouter(OurServices)
);
