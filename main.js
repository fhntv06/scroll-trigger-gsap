const wrapper = document.querySelector('wrapper');
const mainOne = document.querySelector('#main-1');
const mainTwo = document.querySelector('#main-2');
const arSectionMoveOne = mainOne.querySelectorAll('#second, #thrith');
const arSectionMoveTwo = mainTwo.querySelectorAll('#six, #seven');

const arSelectorsSectionMoveOne = ['#second', '#thrith'];
const arSelectorsSectionMoveTwo = ['#six', '#seven'];

// const optionsFromTo = [
//   { y: '+100%' },
//   { y: 0 },
// ];

// const optionsScrollTrigger = {
//   start: 'top top',
//   end: () => document.body.offsetHeight,
//   scrub: true,
//   markers: true,
//   pin: true,
// };

gsap.registerPlugin(ScrollTrigger);

const createTimeline = (arSections, trigger) => {
  arSections.forEach((section) => {
    // const timeline = gsap.timeline();
    // timeline.fromTo(section, ...optionsFromTo);
    gsap.fromTo(`${section} .section-move`,
      { y: '+100%' },
      {
        y: 0,
        scrollTrigger: {
          trigger: section,
          markers: true,
          scrub: true,
          start: 'top 100%',
          end: "bottom 50%+=10px",
          onToggle: ({ trigger }) => console.log(`trigger is work: ${trigger.id}`),
          onUpdate: ({ progress }) => {
            console.log(`progress: ${progress}, `);
          }
        }
      });

    // ScrollTrigger.create(
    //   {
    //     animation: timeline,
    //     trigger,
    //     ...optionsScrollTrigger,
    //   }
    // );
  });
}
createTimeline(arSelectorsSectionMoveOne, mainOne);
createTimeline(arSelectorsSectionMoveTwo, mainTwo);

// createTimeline(arSectionMoveOne, mainOne);
// createTimeline(arSectionMoveTwo, mainTwo);
