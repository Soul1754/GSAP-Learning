"use client";
import React, { use, useRef, useState } from "react";
import { sliderLists } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Menu = () => {



  const contentRef = useRef();
    const [currentIndex, setcurrentIndex] = useState(0);
    
    useGSAP(() => {
        // Initial leaf animations - start outside the page
        gsap.set('#m-left-leaf', { x: -200, opacity: 0 });
        gsap.set('#m-right-leaf', { x: 200, opacity: 0 });

        // Scroll-triggered animation to bring leaves inside
        gsap.timeline({
            scrollTrigger: {
                trigger: "#menu",
                start: "top 80%",
                end: "top 20%",
                scrub: 1,
            }
        })
        .to('#m-left-leaf', { x: 0, opacity: 1, duration: 1, ease: 'power2.out' })
        .to('#m-right-leaf', { x: 0, opacity: 1, duration: 1, ease: 'power2.out' }, 0);

        // Parallax effect - leaves move upward when scrolling toward contact section
        gsap.timeline({
            scrollTrigger: {
                trigger: "#menu",
                start: "center center",
                end: "bottom top",
                scrub: 1.5,
            }
        })
        .to('#m-left-leaf', { 
            y: -150, 
            rotation: 10,
            scale: 0.9,
            ease: 'none' 
        })
        .to('#m-right-leaf', { 
            y: -150, 
            rotation: 10,
            scale: 0.9,
            ease: 'none' 
        }, 0);

        gsap.fromTo('#title', {
           
            opacity: 0
        }, {
            
            opacity: 1,
            duration: 1
        });
        gsap.fromTo('.cocktail img', {
            opacity: 0,
            xPercent: -100,
        },
            {
                opacity: 1,
                xPercent: 0,
                duration: 1,
                ease: 'power1.inOut',
            });
        gsap.fromTo('.details h2', {
                opacity: 0,
                yPercent: 100,
        }, {
            opacity: 1,
            yPercent: 0,
            duration: 1,
            ease: 'power1.inOut',
        })
        gsap.fromTo('.details p', {
                opacity: 0,
                yPercent: 100,
        }, {
            opacity: 1,
            yPercent: 0,
            duration: 1,
            delay: 0.2,
            ease: 'power1.inOut',
        })
    }, [currentIndex]);


  const totalCocktails = sliderLists.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setcurrentIndex(newIndex);
  };
  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="left leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right leaf"
        id="m-right-leaf"
      />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
          </h2>
          
      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>
              {
                sliderLists[
                  (currentIndex - 1 + totalCocktails) % totalCocktails
                ].name
              }
            </span>
            <img
              src="/images/right-arrow.png"
              alt="right arrow "
              aria-hidden="true"
            />
          </button>
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{sliderLists[(currentIndex + 1) % totalCocktails].name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left arrow "
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="cocktail">
          <img src={sliderLists[currentIndex].image} alt="" />
        </div>
        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe For:</p>
            <p id="title">{sliderLists[currentIndex].name}</p>
          </div>
          <div className="details">
            <h2>{sliderLists[currentIndex].title}</h2>
            <p>{sliderLists[currentIndex].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
