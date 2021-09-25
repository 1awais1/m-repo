// // import React   from 'react';
// // import { useRive } from "rive-react";
// // import RiveAni from "../../assets/animation/auger_anime1.riv";
// // import { useState, useEffect } from "react";

// // const AppAmination = ()=> {
// //   const [isDark, toggleMode] = useState(false);

// //   const params = {
// //     src: RiveAni,
// //     autoplay: true,
// //   };

// //   const { RiveComponent, rive } = useRive(params);

// //   useEffect(() => {
// //     if (rive) {
// //       if (isDark) {
// //         console.log("dark");
// //         rive.reset();
// //         rive.play("dark");
// //       } else {
// //         rive.reset();
// //         rive.play("light");
// //       }
// //       console.log(rive.playingAnimationNames);
// //     }
// //   }, [isDark, rive]);

// //   return (
// //     <div>
// //       <div style={{ width: 600, height: 500 }}>
// //         <RiveComponent />
// //       </div>
// //       <button onClick={() => toggleMode(!isDark)}>
// //         Toggle Mode is:{isDark ? "dark" : "light"}
// //       </button>
// //     </div>
// //   );
// // }

// // export default AppAmination;


// import React   from 'react';
// import { useRive } from 'rive-react';

// function Example() {
//   const params = {
//     src: 'auger_anime1.riv',
//     autoplay: true,
//   };
//   const { RiveComponent, rive } = useRive(params);

//   return (
//     <div style={{ width: 100, height: 100 }}>
//     <RiveComponent
//       onMouseEnter={() => rive && rive.play()}
//       onMouseLeave={() => rive && rive.pause()}
//     />
//     </div>
//   );
// }

// export default Example;

