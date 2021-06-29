import React from "react";
import CoolButton from "./CoolButton";

const App = () => {
  const cool = true;
  return (
    <div>
      <h1>
        <CoolButton cool={cool} />
      </h1>
    </div>
  );
};

export default App;
