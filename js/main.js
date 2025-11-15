init();

function init() {
  gsap.to(".intro-text", { text: "Classic Car :", ease: "bounce", opacity: 1, duration: 1, repeat: 1, yoyo: true });
  gsap.to(".intro-text", { text: "Timeless Classic Car :", opacity: 1, ease: "power2.inOut", duration: 2 }, "+=0.5");
  gsap.to(".effect", { opacity: 0, display: "none" });
  gsap.to(".impala-info", { opacity: 0 });
  // gsap.to(".volvo-info", { opacity: 0, display: "none" });
  // gsap.to(".aston-martin-info", { opacity: 0, display: "none" });

  onComplete();
}


function onComplete() {
  let animation = gsap.timeline();

  animation.to(".container", { backgroundColor: "black", ease: "power3.inOut", duration: 2 }, "+=1.5")

  animation.to(".container", { display: "none", ease: "back", duration: 2.5 }, "+=2.5");

  // .effect elementinin görünmesini sağla
  let tl = gsap.timeline();

  tl.to(".effect", { opacity: 1, visibility: "visible", display: "block", ease: "back(2)", duration: 1.5 }, "+=7.5"); // visibility'yi visible yapıyoruz
  tl.to(".car-text", {
    text: "IMPALA",
    duration: 2.5,
    ease: "power4.inOut",
  }, ">");

  tl.from("h1", { scale: 0.03, duration: 3, ease: "power1.inOut" }, "+=1");
  tl.to(".blendImage, .bg", { scale: 1, duration: 2 }, "+=1");
  tl.to(".dark", { opacity: 0, duration: 4 }, ">-=100%");
  tl.to(".impala-info ", { opacity: 1, duration: 1 });
  tl.to(".impala-text", {
    text: "Chevrolet Impala 1963",
    y: -40,
    x: -190,
    ease: "back(2).in",
    duration: 2
  }, "<=0.25");
  // tl.to(".volvo-info", { opacity: 1, display: "block" });


  // tl.to(".volvo-info img",
  //   {
  //     scrollTrigger: {
  //       trigger: ".bg",
  //       start: "31.25% 20%",
  //       // markers: "true",
  //       end: "40% 30%",
  //       duration: 1.5,
  //       ease: "power1.in",
  //       scrub: "true",
  //       once: "true"


  //     },
  //     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",

  //   },)

  // tl.to(".aston-martin-info", { opacity: 1, display: "block" });
  // tl.to(".aston-martin-info img",
  //   {
  //     scrollTrigger: {
  //       trigger: ".volvo-info img",
  //       start: "31.25% 20%",
  //       // markers: "true",
  //       end: "60% 35%",
  //       duration: 1.5,
  //       ease: "power1.in",
  //       scrub: "true",
  //       once: "true"

  //     },
  //     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",


  //   },)

}

