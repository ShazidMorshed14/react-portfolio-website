import React from "react";
import algogram from "../../img/algogram.png";
import coffeshop from "../../img/coffeshop.png";
import Corporate from "../../img/corporate.png";
import c19 from "../../img/covid-19 tracker.png";
import Netflix from "../../img/netflix-ss.png";
import oshary from "../../img/oshary.png";
import Ostad from "../../img/ostad-ss.png";
import RaksFlix from "../../img/raksflix-ss.png";
import rehashcraft from "../../img/rehashcraft.png";
import restaurant from "../../img/restaurant.png";
import Socialite from "../../img/socialite-ss.png";
import Tourningon from "../../img/tourningon.png";
import "../ProductList/ProductList.css";
import Product from "./Product";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-header">Create & Inspire. It's Shazid</h1>
        <p className="pl-desc">
          Designing fully functional and responsive websites with modern tools
          like React js and Node js! Explore some of my projects and give
          feedback.
        </p>
      </div>
      <div className="pl-list">
        <Product
          id="1"
          src={Netflix}
          //link="https://netflix-clone-f88e6.web.app/"
          link="https://phenomenal-lollipop-ad6e3e.netlify.app/"
          title="Netflix Clone"
        />
        <Product
          id="1"
          src={Ostad}
          link="https://ostad-app-43edb.web.app/"
          title="Learning Platform"
        />
        <Product
          id="2"
          src={Tourningon}
          link="https://tourningon.netlify.app/"
          title="Tourningon"
        />

        <Product
          id="2"
          src={c19}
          link="https://covid-19-tracker-14.web.app/"
          title="Covid Tracker"
        />

        <Product
          id="1"
          src={Socialite}
          link="https://socialite-75a29.web.app/"
          title="Socialite"
        />

        <Product
          id="1"
          src={Corporate}
          link="https://batapp-74b89.web.app/"
          title="Corporate Portfolios"
        />

        <Product
          id="2"
          src={RaksFlix}
          link="https://raksflix-ba88f.web.app/"
          title="RaksFlix"
        />
        <Product
          id="1"
          src={oshary}
          link="https://oshary.com/"
          title="Oshary"
        />
        <Product
          id="3"
          src={algogram}
          link="https://shazidmorshed14.github.io/Algogram/"
          title="Algogram"
        />
        <Product
          id="4"
          src={restaurant}
          link="https://shazidmorshed14.github.io/Restaurant-website/"
          title="Restaurant"
        />
        <Product
          id="5"
          src={coffeshop}
          link="https://shazidmorshed14.github.io/coffe_shop_project/"
          title="Coffe Shop"
        />
        <Product
          id="6"
          src={rehashcraft}
          link="https://shazidmorshed14.github.io/RehashCraft/"
          title="RehashCraft"
        />
        {/* <Product
          id="6"
          src={Bat}
          link="https://endearing-lolly-3e1bdc.netlify.app/?fbclid=IwAR15AKYA4TFOGg-LmIf2Hjvm8FV3N7dOutv9QMOpItUii8z_16ZA4O9x4_Y"
          title="Portfolio"
        /> */}
        {/* <Product
          id="7"
          src={rps}
          link="https://shazidmorshed14.github.io/RPS/"
          title="Oshary"
        /> */}
      </div>
    </div>
  );
};

export default ProductList;
