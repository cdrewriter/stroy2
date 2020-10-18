import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./Carousel.module.css";
import CardObject from "../Card/CardObject";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <a className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="47.25"
        height="47.25"
        viewBox="0 0 47.25 47.25"
      >
        <path
          className="a"
          d="M47.25-1.687V-38.812a5.064,5.064,0,0,0-5.062-5.062H5.063A5.064,5.064,0,0,0,0-38.812V-1.687A5.064,5.064,0,0,0,5.063,3.375H42.188A5.064,5.064,0,0,0,47.25-1.687ZM5.063,0A1.692,1.692,0,0,1,3.375-1.687V-38.812A1.692,1.692,0,0,1,5.063-40.5H42.188a1.692,1.692,0,0,1,1.688,1.688V-1.687A1.692,1.692,0,0,1,42.188,0ZM15.23-21.146a1.31,1.31,0,0,0-.011,1.8L27.359-7.214a1.267,1.267,0,0,0,1.793,0l.749-.749a1.267,1.267,0,0,0,0-1.793L19.406-20.25l10.5-10.484a1.267,1.267,0,0,0,0-1.793l-.749-.749a1.267,1.267,0,0,0-1.793,0Z"
          transform="translate(47.25 3.375) rotate(180)"
        />
      </svg>
    </a>
  );
}

function SamplePrevArrow(props) {
  const { className, styles, onClick } = props;
  return (
    <a className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="47.25"
        height="47.25"
        viewBox="0 0 47.25 47.25"
      >
        <path
          className="a"
          d="M47.25-1.687V-38.812a5.064,5.064,0,0,0-5.062-5.062H5.063A5.064,5.064,0,0,0,0-38.812V-1.687A5.064,5.064,0,0,0,5.063,3.375H42.188A5.064,5.064,0,0,0,47.25-1.687ZM5.063,0A1.692,1.692,0,0,1,3.375-1.687V-38.812A1.692,1.692,0,0,1,5.063-40.5H42.188a1.692,1.692,0,0,1,1.688,1.688V-1.687A1.692,1.692,0,0,1,42.188,0ZM15.23-21.146a1.31,1.31,0,0,0-.011,1.8L27.359-7.214a1.267,1.267,0,0,0,1.793,0l.749-.749a1.267,1.267,0,0,0,0-1.793L19.406-20.25l10.5-10.484a1.267,1.267,0,0,0,0-1.793l-.749-.749a1.267,1.267,0,0,0-1.793,0Z"
          transform="translate(0 43.875)"
        />
      </svg>
    </a>
  );
}

export default class SlideChangeHooks extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  state = {
    activeSlide: 0,
    activeSlide2: 0,
  };
  render() {
    const data = this.props.data;
    const bd = data.props;
    const buildObjects = [];
    if (data && data.length) {
      for (let i = 0; i < data.length; ++i) {        
        buildObjects.push(
          <div>
          <CardObject
            key={data[i].id}
            title={data[i].title}
            description={data[i].description}
            image={data[i].image.publicUrl}
          />
          </div>
        );
      }
    }
    const settings = {
      dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,     
      arrows: false,     
      dots: false,
      infinite: true,     
      //nextArrow: <SampleNextArrow />,
      //prevArrow: <SamplePrevArrow />,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      afterChange: (current) => this.setState({ activeSlide2: current }),
    };

    return (
      <div className="carous">
        <div className="sliderblock">
          <Slider
            ref={(c) => (this.slider = c)}
            className={styles.slider}
            {...settings}
          >
            {buildObjects}
          </Slider>
          <div className="card_properties">
            <div className="counters__digit">         
                
                    <span className="digits">{this.state.activeSlide2}</span>
                    <span>/</span>
                    <span className="digits">{data.length}</span>
                         
            </div>
            <div className="block__arrows" style={{ textAlign: "center" }}>
             

              <SamplePrevArrow
                className={`buttons arrowsleft  .${styles.arrowsleft}`}
                styles={styles}
                onClick={this.previous}
              />
               <SampleNextArrow
                className={`buttons arrowsright .${styles.arrowsright}`}
                styles={styles}
                onClick={this.next}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
