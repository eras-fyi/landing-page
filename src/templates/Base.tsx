import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import { Banner } from "./Banner";
import { Blog } from "./Blog";
import { Carousel } from "./Carousel";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { VerticalFeatures } from "./VerticalFeatures";

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Carousel />
    <VerticalFeatures />
    <Banner />
    <Blog />
    <Footer />
  </div>
);

export { Base };
