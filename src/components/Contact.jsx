import React from 'react'
import { openingHours, socials } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { SplitText, ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);
const Contact = () => {

    useGSAP(() => {
        const titleSplit = SplitText.create("#contact h2", { type: "words" });
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top 30%",
            },
            ease: "power1.inOut",
        })

        tl.from(titleSplit.words, {
            yPercent: 100,
            opacity: 0,
            stagger: 0.02,
          
        }).from("#contact h3, #contact p", {
            yPercent: 100,
            opacity: 0,
            stagger: 0.02,
           
        })
            .to('#f-right-leaf', {
                y: -50,
                duration: 0.5,
                duration: 1,
                ease: 'power1.inOut',
        },'<')
        .to('#f-left-leaf', {
            y: -50,
            duration: 0.5,
            duration: 1,
            ease: 'power1.inOut',
        },'<')

    });
  return (
      <footer id='contact'>
            <img src="images/footer-right-leaf.png" alt="f-right-leaf" id='f-right-leaf'/>
          <img src="images/footer-left-leaf.png" alt="f-left-leaf" id='f-left-leaf' />
          

          <div className='content'>
              <h2>Where to Find Us</h2>
              <div>
                  <h3>Visit Our Bar</h3>
                  <p>
                      BANER, PUNE
                  </p>
              </div>
              <div>
                  <h3>
                      Contact Us
                  </h3>
                  <p>
                      +91 9322857003 
                  </p>
                  <p>
                      siddhant.gaikwad1754@gmail.com
                  </p>

              </div>
              <div>
                  <h3>
                      Open Every Day
                  </h3>
                  {openingHours.map((time) => (
                      <p key={time.day}>
                          {time.day}: {time.time} 
                      </p>
                      
                  ))}
              </div>
              <div>
                  <h3>
                      Socials
                  </h3>
                  <div className="flex-center gap-5">
                      {socials.map((social) => (
                          <a href={social.url} key={social.name} target='_blank' rel="noopener noreferrer" aria-label={social.name}>
                              <img src={social.icon} alt={social.icon} />
                          </a>
                      ))}
                  </div>
              </div>
          </div>
   </footer>
  )
}

export default Contact