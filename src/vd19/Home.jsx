import { Tabs, Tab, AppBar } from "@material-ui/core";
import { useState } from "react";
import About from "./About";
import Contact from "./Contact";

const Home = (props) => {
  const page = props.match.params.page;
  console.log(page);

  const tabNametoIndex = {
    0: "about",
    1: "contact",
  };

  const indextoTabName = {
    about: 0,
    contact: 1,
  };

  const [sTab, setSTab] = useState(indextoTabName[page]);
  const onChange = (e, newVal) => {
    props.history.push(`/home/${tabNametoIndex[newVal]}`);
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
