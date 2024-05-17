import React from "react";
import "./header.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <div className="container">
          <div className="row header_all">
            <div className="col-6 logo">Tasty</div>

            <div className="col-6 list">
              <ul>
                <li>Home</li>
                
                <li><Link to='admin/add'>Add</Link></li>
                <li><Link to='admin/product'>Product</Link></li>
                <li><Link to='admin/basket'>Basket</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
