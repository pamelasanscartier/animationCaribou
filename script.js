gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

//Animer le titre de la page
var animate = function(titre){
  var textSplit = SplitText.create(titre, {
  type: "chars, words"
});
  return gsap.from(textSplit.chars, {
    duration: 0.1, visibility:"hidden", stagger: 0.1
  });
};
animate('.titre');

//Animation caribou
const t1 = gsap.timeline({
  defaults: {
    ease: 'none'
  },
  duration: 20,
  scrollTrigger: {
    trigger: '#bloc3',
    markers: true,
    start: 'top bottom',
    end: '150% 150%',
    scrub: true,
  },
})  
t1.from('.caribou', {
  display: "none",
})
t1.to('.caribou', {
  delay: 10,
  display: "none",
})
t1.from('.caribouTete', {
  display: "none",
})
t1.to('.caribouTete', {
  display: "block",
  delay:10,
})
t1.to('.caribouTete', {
  display: "none",
})
t1.to('.caribou',{
   display: "block",
})

const t2 = gsap.timeline({
  defaults: {
    ease: 'none'
  },
  duration: 25,
  scrollTrigger: {
    trigger: '#bloc1',
    markers: true,
    start: '100% top',
    end: '400% 150%',
    scrub: true,
  },
}) 
t2.from('.pancarte', {
  opacity: 0,
  y:-300,
})

t2.to('.pancarte', {
  opacity: 1,
  y: 300,
  delay: 10
})
t2.to('.pancarte', {
  opacity: 0,
})
t2.to('.caribou', {
  opacity: 0,
})