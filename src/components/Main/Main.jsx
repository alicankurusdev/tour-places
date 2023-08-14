import React from "react";
import "./Main.scss";

const Main = ({ data }) => {
  return (
    <div className="card-container">
      {data.map((item) => {
        const { id, title, desc, image } = item;
        return (
          <div key={id} className="card">
            <div className="title"><h2>{title}</h2></div>
            <div className="img-container">
            <div className="img-filter"></div>
                <div className="img-box">
                <img src={image} alt="img" />
                </div>
                
            </div>
            <div className="img-filter"></div>
            <div className="card-info">
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
