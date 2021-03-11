import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLang } from '../../globalState/actions/langActions';
import PropTypes from 'prop-types';
import '../../stylesheets/AboutCss.css';


const text = require('../localization/lan.json');


class MissionSection extends Component {
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
      <div className="mission-section mt-5">
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <Container>
                <Col className="m-auto" sm={7}>
                  <h6
                                    className={(this.props.language === 'en' ? '' : 'withoutletterspace')}
                                    >
                  {this.state.text.homemissionheader}


                  </h6>
                </Col>
              </Container>

              <div className="m-auto text-center justify-content-center py-4">
                {' '}
                <i class="fas fa-bullseye fa-4x py-3"  style={{color:"rgb(36, 52, 98)"}}></i>
              </div>

              <p className={(this.props.language === 'en' ? 'text-left' : ' text-right ')}>
              {this.state.text.homemissionheader2}

              </p>
            </Col>

            <Col sm={12} md={6}>
              <Container>
                <Col className="m-auto" sm={7}>
                  <h6                   className={(this.props.language === 'en' ? '' : 'withoutletterspace')}
>
                  {this.state.text.homevisionheader}


                  </h6>
                </Col>
              </Container>

              <div className="m-auto text-center justify-content-center py-4">
                {' '}
                <i class="far fa-eye fa-4x py-3"  style={{color:"rgb(36, 52, 98)"}}></i>
              </div>

              <p className={(this.props.language === 'en' ? 'text-left' : ' text-right ')}>
              {this.state.text.homevisionheader2}

              </p>
            </Col>
          </Row>
          <Row>
            <Col className="m-auto pt-4 pb-4">
              {' '}
              <h5>
              {this.state.text.ETHICS}
 </h5>
            </Col>
          </Row>
        </Container>
        <div className="ethics-section">
          <Container fluid className="justify-content-center m-auto">
            <Row>
              <Col className="mx-auto numbersSection" sm={12} md={2}>
              <h1  className={(this.props.language === 'en' ? 'text-left' : ' text-right ')}>1</h1>
                <p className={(this.props.language === 'en' ? 'text-left' : ' text-right ')} 
                >
                {this.state.text.ETHICScap1}

                 
                </p>
              </Col>
              <Col className="mx-auto numbersSection" sm={12} md={2}>
              <h1  className={(this.props.language === 'en' ? 'text-left' : ' text-right ')}>2</h1>

                <p className={(this.props.language === 'en' ? 'text-left' : ' text-right ')}>
                {this.state.text.ETHICScap2}

                 
                </p>
              </Col>
              <Col className="mx-auto numbersSection" sm={12} md={2}>
              <h1  className={(this.props.language === 'en' ? 'text-left' : ' text-right ')}>3</h1>

                <p className={(this.props.language === 'en' ? 'text-left' : ' text-right ')}>
                {this.state.text.ETHICScap3}

                
                </p>
              </Col>
              <Col className="mx-auto numbersSection" sm={12} md={2}>
              <h1  className={(this.props.language === 'en' ? 'text-left' : ' text-right ')}>4</h1>

                <p className={(this.props.language === 'en' ? 'text-left' : ' text-right ')}>
                {this.state.text.ETHICScap4}

               </p>
              </Col>
              <Col className="mx-auto numbersSection" sm={12} md={2}>
               <h1  className={(this.props.language === 'en' ? 'text-left' : ' text-right ')}>5</h1>
                <p className={(this.props.language === 'en' ? 'text-left' : ' text-right ')}>
                {this.state.text.ETHICScap5}

                 
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
MissionSection.propTypes = {
  changeLang: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  language: state.lang.language
});

export default connect(mapStateToProps, { changeLang })(withRouter(MissionSection));
