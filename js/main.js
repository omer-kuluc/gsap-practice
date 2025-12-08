

function onComplete() {
  let animation = gsap.timeline();

  animation.to(".container", { backgroundColor: "black", ease: "power3.inOut", duration: 2 }, "+=1.75")

  animation.to(".container", { display: "none", ease: "back", duration: 1.75 }, "+=1");

  let tl = gsap.timeline();

  tl.to(".effect", { opacity: 1, visibility: "visible", display: "block", ease: "back(2)", duration: 1.5 }, "+=4.75"); // visibility'yi visible yapıyoruz
  tl.to(".car-text", {
    text: "IMPALA",
    duration: 2.5,
    ease: "power4.inOut",
  }, ">");

  tl.from("h1", { scale: 0.03, duration: 3, ease: "power1.inOut" }, "+=1");
  tl.to(".blendImage, .bg", { scale: 1, duration: 2 }, "+=1");
  tl.to(".dark", { opacity: 0, duration: 4 }, ">-=100%");
  tl.to(".impala-info ", { opacity: 1, duration: 1 });
  tl.to(".car-info-card", { display: "block", opacity: 1, duration: 1.5, ease: "power2.inOut" }); // Sonra opacity'yi animasyonla arttır

  let t = gsap.timeline();

  t.to(".car-info-text-brand", { display: "block", opacity: 1 })
  t.to(".car-info-text-model", { display: "block", opacity: 1, duration: 0.5 })
  t.to(".car-info-text-year", { display: "block", opacity: 1, duration: 0.5 })

  t = gsap.to(".car-info-text-brand", {
    scrambleText: {
      text: "Chevrolet",
      tweenLength: true,
      speed: 4,
      newClass: "new"
    },
    duration: 2.5, ease: "none"
  }, "-=0.5");

  t = gsap.to(".car-info-text-model", {
    scrambleText: {
      text: "Impala",
      tweenLength: true,
      speed: 4,
      newClass: "new"
    },
    duration: 2.75, ease: "none"
  }, "-=2.5");

  t = gsap.to(".car-info-text-year", {
    scrambleText: {
      text: "1963",
      tweenLength: true,
      speed: 4,
      newClass: "new"
    },
    duration: 3, ease: "none"
  }, "-=2.5");


}

function init() {
  gsap.to(".intro-text", { text: "Classic Car :", ease: "bounce", opacity: 1, duration: 1, repeat: 1, yoyo: true });
  gsap.to(".intro-text", { text: "Timeless Classic Car :", opacity: 1, ease: "power2.inOut", duration: 2 }, "+=0.5");
  gsap.to(".effect", { opacity: 0, display: "none" });
  gsap.to(".impala-info", { opacity: 0 });
  gsap.to(".car-info-card", { opacity: 0, display: "none" });
  gsap.to(".car-info-text-brand", { opacity: 0, display: "none" });
  gsap.to(".car-info-text-model", { opacity: 0, display: "none" });
  gsap.to(".car-info-text-year", { opacity: 0, display: "none" });

  onComplete();
}

init();
