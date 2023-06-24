const mainOne = document.querySelector('#main-1');
const mainTwo = document.querySelector('#main-2');
const arSectionMoveOne = mainOne.querySelectorAll('#second, #thrith');
const arSectionMoveTwo = mainTwo.querySelectorAll('#six, #seven');

const optionsFromTo = [
  { y: '+200%' },
  { y: 0,
    duration: 3,
  },
];

const optionsScrollTrigger = {
  start: 'top top',
  end: () => document.body.offsetHeight,
  scrub: true,
  pin: true,
};

const createTimeline = (arSections, trigger) => {
  const timeline = gsap.timeline();
  
  arSections.forEach((section) => timeline.fromTo(section, ...optionsFromTo));
 
  ScrollTrigger.create(
    {
      animation: timeline,
      trigger,
      ...optionsScrollTrigger,
    }
  );
}

createTimeline(arSectionMoveOne, mainOne);
createTimeline(arSectionMoveTwo, mainTwo);
