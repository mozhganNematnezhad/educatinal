import React ,{useEffect} from "react";

// import animation
import "aos/dist/aos.css";
import Aos from "aos";
import "./RotateCircle.css"


const RotateCircle = (props) => {
    useEffect(() => {
      Aos.init();
    }, []);
  return (
    <>
      <div data-aos="zoom-in" className="le_Globele ">
        <div className="le_ImgHistory">
          <img src={props.img} className="img-fluid" alt=" history img" />
        </div>

        <div className="le_AllCircle w-full h-full absolute top-0 left-0 ">
          <div className="Circlele1">
            <img
              src={props.Ellipse1}
              alt="circle"
              className="Ellipse1"
            />
          </div>

          <div className="Circlele2">
            <img
              src={props.Ellipse2}
              alt="circle"
              className="Ellipse2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RotateCircle;
