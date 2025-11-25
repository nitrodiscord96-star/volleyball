import { useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  // const statsRef = useRef(null);
  const featuresTitleRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const whyTitleRef = useRef(null);
  const whyCard1Ref = useRef(null);
  const whyCard2Ref = useRef(null);
  const whyCard3Ref = useRef(null);
  const whyCard4Ref = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    const heroTl = gsap.timeline();
    
    heroTl
      .fromTo(badgeRef.current, 
        { scale: 0, rotation: -180, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
      )
      .fromTo(titleRef.current.children,
        { y: 100, opacity: 0, rotationX: -90 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1, stagger: 0.2, ease: "power4.out" },
        "-=0.3"
      )
      .fromTo(subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(scrollIndicatorRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );

    gsap.fromTo(featuresTitleRef.current,
      { 
        scale: 0.8,
        opacity: 0,
        rotationY: -45
      },
      {
        scale: 1,
        opacity: 1,
        rotationY: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featuresTitleRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    const cardsRefs = [card1Ref, card2Ref, card3Ref];
    
    cardsRefs.forEach((cardRef, index) => {
      const direction = index === 0 ? -100 : index === 1 ? 100 : 0;
      
      gsap.fromTo(cardRef.current,
        { 
          x: direction,
          y: index === 1 ? -50 : 50,
          opacity: 0,
          rotationY: index === 1 ? 0 : (index === 0 ? -25 : 25),
          scale: 0.8
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotationY: 0,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      cardRef.current.addEventListener('mouseenter', () => {
        gsap.to(cardRef.current, {
          y: -15,
          scale: 1.05,
          duration: 0.4,
          ease: "power2.out"
        });
      });

      cardRef.current.addEventListener('mouseleave', () => {
        gsap.to(cardRef.current, {
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out"
        });
      });
    });

    gsap.fromTo(whyTitleRef.current,
      { 
        scale: 0.5,
        opacity: 0,
        rotation: -10
      },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: whyTitleRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    const whyCardsRefs = [whyCard1Ref, whyCard2Ref, whyCard3Ref, whyCard4Ref];
    
    whyCardsRefs.forEach((cardRef, index) => {
      const angle = (index % 2 === 0) ? -90 : 90;
      
      gsap.fromTo(cardRef.current,
        { 
          x: angle,
          opacity: 0,
          rotationZ: angle / 4,
          scale: 0.7
        },
        {
          x: 0,
          opacity: 1,
          rotationZ: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.1
        }
      );
    });

    gsap.fromTo(ctaRef.current,
      { 
        scale: 0.8,
        opacity: 0,
        y: 100,
        rotationX: -30
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    const ctaButton = ctaRef.current.querySelector('button');
    gsap.to(ctaButton, {
      scale: 1.05,
      duration: 0.8,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 70%"
      }
    });

  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section ref={heroRef} className="hero-section position-relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        minHeight: '500px'
      }}>
        <div className="container text-center py-5">
          <div ref={badgeRef} className="badge bg-primary text-white px-4 py-2 mb-4 fs-6 fw-bold">
            EGYPT'S #1 VOLLEYBALL PORTAL
          </div>
          <h1 ref={titleRef} className="display-1 fw-black mb-4 text-white" style={{
            fontWeight: '900',
            letterSpacing: '-2px'
          }}>
            <span style={{display: 'inline-block'}}>UNLEASH YOUR</span><br/>
            <span className="gradient-text-title" style={{display: 'inline-block'}}>VOLLEYBALL POWER</span>
          </h1>
          <p ref={subtitleRef} className="lead fs-3 mb-5 text-white-50 mx-auto" style={{maxWidth: '800px'}}>
            From court legends to championship glory - Everything volleyball in one explosive platform
          </p>
          
          {/* Scroll Indicator */}
          <div ref={scrollIndicatorRef} className="d-flex flex-column align-items-center justify-content-center mt-5 pt-4 scroll-indicator">
            <p className="text-white-50 small fw-bold mb-2 text-uppercase" style={{letterSpacing: '1px'}}>
              Scroll For More
            </p>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="bounce-animation">
              <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"/>
            </svg>
          </div>
        </div>
      </section>

      <div className="bg-dark border-top border-primary border-3"></div>

      {/* Why Volleyball Section */}
      <section className="py-5 bg-black">
        <div className="container py-4">
          <div ref={whyTitleRef} className="text-center mb-5">
            <h2 className="display-3 fw-black text-white text-uppercase mb-3">
              Why <span className="text-primary">Volleyball?</span>
            </h2>
            <div className="bg-primary mx-auto" style={{width: '100px', height: '4px'}}></div>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div ref={whyCard1Ref} className="card bg-dark text-white border-start border-primary border-4 h-100">
                <div className="card-body p-4 d-flex gap-3">
                  <div className="display-3">⚡</div>
                  <div>
                    <h3 className="card-title fw-black text-uppercase fs-4 mb-3">Explosive Action</h3>
                    <p className="card-text fs-5 text-muted text-white-50">
                      Lightning-fast rallies, thunderous spikes, impossible saves. Pure adrenaline.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div ref={whyCard2Ref} className="card bg-dark text-white border-start border-primary border-4 h-100">
                <div className="card-body p-4 d-flex gap-3">
                  <div className="display-3">🤝</div>
                  <div>
                    <h3 className="card-title fw-black text-uppercase fs-4 mb-3">Team Brotherhood</h3>
                    <p className="card-text fs-5 text-muted text-white-50">
                      Six warriors, one mission. Trust, communication, victory together.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div ref={whyCard3Ref} className="card bg-dark text-white border-start border-primary border-4 h-100">
                <div className="card-body p-4 d-flex gap-3">
                  <div className="display-3">🔥</div>
                  <div>
                    <h3 className="card-title fw-black text-uppercase fs-4 mb-3">Total Body Power</h3>
                    <p className="card-text fs-5 text-muted text-white-50">
                      Build explosive strength, cat-like reflexes, warrior endurance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div ref={whyCard4Ref} className="card bg-dark text-white border-start border-primary border-4 h-100">
                <div className="card-body p-4 d-flex gap-3">
                  <div className="display-3">🎯</div>
                  <div>
                    <h3 className="card-title fw-black text-uppercase fs-4 mb-3">Mental Toughness</h3>
                    <p className="card-text fs-5 text-muted text-white-50">
                      Pressure situations, split-second decisions. Champions are forged here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-dark border-top border-primary border-3"></div>

      {/* Features Section */}
      <section className="py-5 bg-dark">
        <div className="container py-4">
          <div ref={featuresTitleRef}>
            <h2 className="display-3 fw-black text-center mb-2 text-white text-uppercase">
              Dominate The <span className="text-primary">Court</span>
            </h2>
            <p className="text-center text-muted text-white-50 text-uppercase fw-bold mb-5 fs-5">
              Everything You Need To Become A Champion
            </p>
          </div>
          
          <div className="row g-4">
            {/* History Card */}
            <div className="col-md-4">
              <div ref={card1Ref} className="card bg-secondary text-white border-3 border-dark h-100" style={{
                cursor: 'pointer'
              }}>
                <div className="card-body p-4">
                  <div className="display-1 mb-3">🔥</div>
                  <h3 className="card-title fw-black text-uppercase fs-2 mb-3">The Legacy</h3>
                  <p className="card-text fs-5 mb-4">
                    From 1895 invention to Olympic glory - Discover the warriors who built this sport
                  </p>
                  <div className="text-primary fw-bold text-uppercase">
                    Explore History →
                  </div>
                </div>
              </div>
            </div>

            {/* Basics Card */}
            <div className="col-md-4">
              <div ref={card2Ref} className="card bg-primary text-white border-3 border-primary h-100" style={{
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(13, 110, 253, 0.3)'
              }}>
                <div className="card-body p-4">
                  <div className="display-1 mb-3">💪</div>
                  <h3 className="card-title fw-black text-uppercase fs-2 mb-3">Master Skills</h3>
                  <p className="card-text fs-5 mb-4">
                    Serves, spikes, blocks, digs - Learn techniques that separate pros from amateurs
                  </p>
                  <div className="text-white fw-bold text-uppercase">
                    Train Now →
                  </div>
                </div>
              </div>
            </div>

            {/* Championships Card */}
            <div className="col-md-4">
              <div ref={card3Ref} className="card bg-secondary text-white border-3 border-dark h-100" style={{
                cursor: 'pointer'
              }}>
                <div className="card-body p-4">
                  <div className="display-1 mb-3">🏆</div>
                  <h3 className="card-title fw-black text-uppercase fs-2 mb-3">Glory Path</h3>
                  <p className="card-text fs-5 mb-4">
                    World Championships, Olympics, Egypt's triumphs - Follow the journey to gold
                  </p>
                  <div className="text-primary fw-bold text-uppercase">
                    View Trophies →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-5 bg-primary text-white position-relative overflow-hidden">
        <div className="container text-center py-5">
          <h2 className="display-2 fw-black mb-4 text-uppercase">
            Your Journey Starts NOW
          </h2>
          <p className="fs-3 mb-5 fw-bold">
            Don't just watch. Don't just dream. BECOME THE CHAMPION.
          </p>
          <button className="btn btn-light btn-lg px-5 py-4 fw-black text-uppercase fs-4 text-primary" style={{
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
          }}>
            Enter The Arena →
          </button>
        </div>
      </section>

      <style>{`
        .bounce-animation {
          animation: bounce 1.5s ease-in-out infinite;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0px);
            opacity: 1;
          }
          50% {
            transform: translateY(15px);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}