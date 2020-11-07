import { useState } from "react";

const Ghost = () => {
  //   let isGhostVisible = false;
  const [isGhostVisible, setIsGhostVisible] = useState(false);

  const hideGhost = () => {
    // isGhostVisible = false;
    setIsGhostVisible(false);
  };

  const showGhost = () => {
    // isGhostVisible = true;
    setIsGhostVisible(true);
  };

  if (isGhostVisible === true) {
    return (
      <>
        <button onClick={hideGhost}>Hide ghost</button>
        <h1>Boo!</h1>
      </>
    );
  } else if (isGhostVisible === false) {
    return (
      <>
        <button onClick={showGhost}>Show ghost</button>
      </>
    );
  }
};

export default Ghost;
