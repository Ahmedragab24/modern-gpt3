import React from "react";
import "./Brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
import Image from "next/image";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <Image src={google} alt="Brand" />
      </div>
      <div>
        <Image src={slack} alt="Brand" />
      </div>
      <div>
        <Image src={atlassian} alt="Brand" />
      </div>
      <div>
        <Image src={dropbox} alt="Brand" />
      </div>
      <div>
        <Image src={shopify} alt="Brand" />
      </div>
    </div>
  );
};

export default Brand;
