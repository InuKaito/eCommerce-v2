import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../SCSS/Slider.scss'
import ImgComp from '../Components/ImgComp'
import i1 from '../SliderImg/img1.png'
import i2 from '../SliderImg/img2.jpg'
import i3 from '../SliderImg/img3.jpg'
import i4 from '../SliderImg/img4.jpg'
import i5 from '../SliderImg/img5.jpg'
import i6 from '../SliderImg/img6.jpg'

function Slider () {
       // create an array for components to show inside the slider
       let sliderArr = [
       <ImgComp src={i1} />,
       <ImgComp src={i2} />,
       <ImgComp src={i3} />,
       <ImgComp src={i4} />,
       <ImgComp src={i5} />,
       <ImgComp src={i6} />,
       ];
       const [x, setX] = useState(0);
       const goLeft = () => {
        // sliderArr.length used so the input can be dynamic
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
       };
       const goRight = () => {
        // sliderArr.length used so the input can be dynamic
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
        };

    return (
       <div className="slider">
           {sliderArr.map((item, index) => {
               return (
               <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                   {item}
                </div>
           );   
           })};
         {/* add buttons to naviagte slider */}
         <button id="goLeft" onClick={goLeft}>
         <i class="fas fa-arrow-circle-left"></i>
         </button>
         <button id="goRight" onClick={goRight}>
         <i class="fas fa-arrow-circle-right"></i>
         </button>
       </div>
    );
}

export default Slider;