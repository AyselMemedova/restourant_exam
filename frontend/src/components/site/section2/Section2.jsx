import React from "react";
import "./Section2.css";
const Section2 = () => {
  return (
    <div>
      <div className="inputs">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <input type="text" placeholder="Name" />
              <input type="number" placeholder="Phone" />
              <input type="date" placeholder="M/D/YYYY" />
              <input type="time" placeholder="Time" />
              <input type="text" placeholder="Person" />
              <button id="input_btn">Book A Table</button>
            </div>
          </div>
        </div>
      </div>

<div className="container tasty">
    <div className="row">
        <div className="col-6 tasty_img">
            <img src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg.webp" alt="" />
        </div>

        <div className="col-6 tasty_text">
            <span>ABOUT TASTY</span>
            <h3>Our chef cooks the most delicious food for you</h3>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        </div>
    </div>
</div>
    </div>
  );
};

export default Section2;
