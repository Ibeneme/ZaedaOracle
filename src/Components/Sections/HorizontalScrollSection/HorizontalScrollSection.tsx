// import React, { useEffect } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import ScrollToPlugin from 'gsap/ScrollToPlugin';
// import './HorizontalScroll.css'; // Import your CSS

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// const HorizontalScroll: React.FC = () => {
//   useEffect(() => {
//     // Main navigation
//     document.querySelectorAll(".anchor").forEach((anchor) => {
//       anchor.addEventListener("click", function (e) {
//         e.preventDefault();
//         const targetElem = document.querySelector(e.target.getAttribute("href") || '') as HTMLElement;
        
//         if (targetElem) {
//           const panelsContainer = document.querySelector("#panels-container") as HTMLElement;
//           const scrollPos = targetElem.offsetLeft; // Get the position of the target element

//           gsap.to(window, {
//             scrollTo: {
//               x: scrollPos,
//               autoKill: false
//             },
//             duration: 1
//           });
//         }
//       });
//     });

//     // Panels
//     const panelsContainer = document.querySelector("#panels-container") as HTMLElement;
//     const panels = gsap.utils.toArray("#panels-container .panel");

//     gsap.to(panels, {
//       x: () => -1 * (panelsContainer.scrollWidth - window.innerWidth),
//       ease: "none",
//       scrollTrigger: {
//         trigger: "#panels-container",
//         pin: true,
//         start: "top top",
//         scrub: 1,
//         end: () => "+=" + (panelsContainer.scrollWidth - window.innerWidth),
//         onUpdate: (self) => {
//           console.log(self.progress);
//         }
//       }
//     });
//   }, []);

//   return (
//     <div id="page" className="site">
//       <header id="masthead" className="site-header" role="banner">
//         <nav className="anchor-nav" role="navigation">
//           <a href="#panel-1" className="anchor">Panel 1</a>
//           <a href="#panel-2" className="anchor">Panel 2</a>
//           <a href="#panel-3" className="anchor">Panel 3</a>
//           <a href="#panel-4" className="anchor">Panel 4</a>
//           <a href="#panel-5" className="anchor">Panel 5</a>
//         </nav>
//       </header>

//       <main id="content" className="site-content" role="main">
//         <section id="intro" className="full-screen pt-5 blue">
//           <h1>A cool title</h1>
//         </section>

//         <section id="panels">
//           <div id="panels-container" style={{ width: '500%' }}>
//             <article id="panel-1" className="panel full-screen red">
//               <div className="container">
//                 <h2>Panel 1</h2>
//                 <div className="panels-navigation text-right">
//                   <a href="#panel-2" className="anchor">Next</a>
//                 </div>
//               </div>
//             </article>
//             <article id="panel-2" className="panel full-screen orange">
//               <div className="container">
//                 <h2>Panel 2</h2>
//                 <div className="panels-navigation">
//                   <a href="#panel-1" className="anchor">Prev</a>
//                   <a href="#panel-3" className="anchor">Next</a>
//                 </div>
//               </div>
//             </article>
//             <article id="panel-3" className="panel full-screen purple">
//               <div className="container">
//                 <h2>Panel 3</h2>
//                 <div className="panels-navigation">
//                   <a href="#panel-2" className="anchor">Prev</a>
//                   <a href="#panel-4" className="anchor">Next</a>
//                 </div>
//               </div>
//             </article>
//             <article id="panel-4" className="panel full-screen green">
//               <div className="container">
//                 <h2>Panel 4</h2>
//                 <div className="panels-navigation">
//                   <a href="#panel-3" className="anchor">Prev</a>
//                   <a href="#panel-5" className="anchor">Next</a>
//                 </div>
//               </div>
//             </article>
//             <article id="panel-5" className="panel full-screen gray">
//               <div className="container">
//                 <h2>Panel 5</h2>
//                 <div className="panels-navigation">
//                   <a href="#panel-4" className="anchor">Prev</a>
//                 </div>
//               </div>
//             </article>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default HorizontalScroll;
