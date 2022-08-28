import React from "react";
import "./styles.css";

export default function index() {
  return (
    <div>
      <div className="fourth_container_wrapper">
        <div className="inner_footer_wrapper">
          <div className="blueText">
            <h6 className="copy_right_logo_footer boldText gradient-text footer-text">
              Illinois Mathematics and Science Academy{" "}
            </h6>
          </div>{" "}
          <div className="copy_right_logo_footer">
            1500 Sullivan Road, Aurora, IL 60506-1000
          </div>
          <div className="copy_right_logo_footer">
            Tel: 630-907-5000 | Fax: 630-907-5976{" "}
          </div>
          <div className="copy_right_logo_footer">
            Copyright ©1993-2022 IMSA, All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
