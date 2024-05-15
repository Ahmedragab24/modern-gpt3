import {
  Header,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Footer,
} from "./Containers";
import { Brand, Cta, Navbar } from "./Components";

export default function Home() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}
