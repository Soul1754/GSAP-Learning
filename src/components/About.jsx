import { useGSAP } from "@gsap/react";
import React from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", { type: "words" });

    const scrolltl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });
    scrolltl
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
    
        .from(".top-grid div, .bottom-grid div", {
        
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
          stagger: 0.06,
        
      }, "-=0.5");
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where Every Detail Matters <span className="text-white">-</span>
              From muddle to garnish
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Every cocktail we craft is a labor of love, a symphony of flavors
              meticulously balanced to create an unforgettable experience. Our
              expert mixologists blend premium spirits with fresh ingredients,
              infusing each drink with creativity and passion.
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
