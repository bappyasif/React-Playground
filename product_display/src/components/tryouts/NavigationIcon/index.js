import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";
import NavigationMenu from "../NavigationMenu";

function Index() {
  let [showMenu, setShowMenu] = useState(false);

  const menuTransitions = useTransition(showMenu, null, {
    from: { opacity: 0, transform: "translateY(-100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(-100%)" },
  });

  const maskTransitions = useTransition(showMenu, null, {
    from: { opacity: 0, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(100%)" },
  });

  return (
    <div>
      <nav>
        <span className="text-xl">
          Menu Icon
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setShowMenu(!showMenu)}
          />
        </span>
        {/* <NavigationMenu closeMennu={() => setShowMenu(false)} /> */}
        {menuTransitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div
                key={key}
                style={props}
                className="bg-blue-500 h-full w-4/5 top-0 left-0 z-50 fixed"
              >
                ✌️
                <span className="font-bold p-2">Menu Items</span>
                <NavigationMenu closeMenu={() => setShowMenu(false)} />
                {/* <ul className="font-bold p-4">
                  <li>Home Page</li>
                  <li>About Us</li>
                </ul> */}
              </animated.div>
            )
        )}
        {maskTransitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div
                key={key}
                style={props}
                className="bg-black-t-50 fixed w-full h-full top-0 left-0"
                onClick={() => setShowMenu(false)}
              ></animated.div>
            )
        )}
      </nav>
    </div>
  );
}

export default Index;

// function Index() {
//   let [showMenu, setShowMenu] = useState(false);

//   const menuTransitions = useTransition(showMenu, null, {
//     from: { position: "absolute", opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//   });

//   const maskTransitions = useTransition(showMenu, null, {
//     from: { position: "absolute", opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//   });

//   return (
//     <div>
//       <nav>
//         <span className="text-xl">
//           Menu Navigation
//           <FontAwesomeIcon
//             icon={faBars}
//             onClick={() => setShowMenu(!showMenu)}
//           />
//         </span>
//         <NavigationMenu closeMennu={() => setShowMenu(false)} />
//         {menuTransitions.map(
//           ({ item, key, props }) =>
//             item && (
//               <animated.div
//                 key={key}
//                 style={props}
//                 className="bg-blue-500 h-full w-4/5 top-0 left-0 z-50 fixed"
//               >
//                 ✌️
//               </animated.div>
//             )
//         )}
//         {maskTransitions.map(
//           ({ item, key, props }) =>
//             item && (
//               <animated.div
//                 key={key}
//                 style={props}
//                 className="bg-black-t-50 fixed w-full h-full top-0 left-0"
//                 onClick={() => setShowMenu(false)}
//               >
//                 ✌️
//               </animated.div>
//             )
//         )}
//       </nav>
//     </div>
//   );
// }

// export default Index;

// function Index() {
//   let [showMenu, setShowMenu] = useState(false);
//   let menuHTML = "";
//   let menuMask = "";

//   if (showMenu) {
//     menuHTML = (
//       <div className="bg-blue-500 h-full w-4/5 top-0 left-0 z-50 fixed">
//         Menu Drawer
//       </div>
//     );
//     menuMask = (
//       <div
//         className="bg-black-t-50 fixed w-full h-full top-0 left-0"
//         onClick={() => setShowMenu(false)}
//       >
//         Menu Masking
//       </div>
//     );
//   }

//   return (
//     <div>
//       <nav>
//         <span className="text-xl">
//           Menu Navigation
//           <FontAwesomeIcon
//             icon={faBars}
//             onClick={() => setShowMenu(!showMenu)}
//           />
//         </span>
//         {menuHTML}
//         {menuMask}
//         <NavigationMenu closeMennu={() => setShowMenu(false)} />
//       </nav>
//     </div>
//   );
// }

// export default Index;
