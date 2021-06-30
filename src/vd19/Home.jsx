import { Tabs, Tab, AppBar } from "@material-ui/core";
import { useState } from "react";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  const [sTab, setSTab] = useState(0);
  const onChange = (e, newVal) => {
    setSTab(newVal);
  };
  return (
    <>
      <AppBar position="static">
        <Tabs value={sTab} onChange={onChange}>
          <Tab label="About" />
          <Tab label="Contact" />
        </Tabs>
      </AppBar>
      {sTab === 0 && <About />}
      {sTab === 1 && <Contact />}
    </>
  );
};

export default Home;
