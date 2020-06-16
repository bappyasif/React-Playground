import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";
import NavigationMenus from "../NavigationMenus";

function Index() {
  let [showMenu, setShowMenu] = useState(false);

  const menuTransitions = useTransition(showMenu, null, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });

  const maskTransitions = useTransition(showMenu, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <nav>
      <span className="text-xl">
        Navigation Bars
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>
      {menuTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-4"
            >
              ✌️
              <span>Menu Items</span>
              <NavigationMenus closeMenu={() => setShowMenu(false)} />
            </animated.div>
          )
      )}
      {maskTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="fixed bg-black-t-50 top-0 left-0 w-full h-full"
              onClick={() => setShowMenu(false)}
            >
              ✌️
            </animated.div>
          )
      )}
    </nav>
  );
}

// function Index() {
//   let [showMenu, setShowMenu] = useState(false);

//   let menuPanel = "";

//   let menuOverlay = "";

//   if (showMenu) {
//     menuPanel = (
//       <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow">
//         Menu Mockup
//       </div>
//     );

//     menuOverlay = (
//       <div
//         className="fixed bg-black-t-50 top-0 left-0 w-full h-full"
//         onClick={() => setShowMenu(false)}
//       >
//         Menu Overlay
//       </div>
//     );
//   }

//   return (
//     <nav>
//       <span className="text-xl">
//         Navigation Bars
//         <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
//       </span>
//       {menuOverlay}
//       {menuPanel}
//       {/* {menuOverlay} */}
//     </nav>
//   );
// }

export default Index;
