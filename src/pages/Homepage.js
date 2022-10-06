import React, { Suspense } from "react";
import Hero from "../components/Hero";
const Section = React.lazy(() => import("../components/Section"));
const Offers = React.lazy(() => import("../components/Offers"));
const Newarrivals = React.lazy(() => import("../components/Newarrivals"));
const Reviewslider = React.lazy(() => import("../components/Reviewslider"));
const Newsletter = React.lazy(() => import("../components/Newsletter"));
const Footer = React.lazy(() => import("../components/Footer"));


const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <Suspense fallback={<div>...</div>}>
      <Section />
      </Suspense>
      <Suspense fallback={<div>...</div>}>
      <Offers />
      </Suspense>
      <Suspense fallback={<div>...</div>}>
      <Newarrivals />
      </Suspense>
      <Suspense fallback={<div>...</div>}>
      <Reviewslider />
      </Suspense>
      <Suspense fallback={<div>...</div>}>
      <Newsletter />
      </Suspense>
      <Suspense fallback={<div>...</div>}>
      <Footer />
      </Suspense>
    </div>
  );
};

export default Homepage;
