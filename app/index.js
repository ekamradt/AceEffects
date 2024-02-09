import {Text} from "react-native";
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutPage from "../screens/About.js";
import SmokePage from "../screens/Smoke.js";
import TabViewExample from "../screens/TabViewExmple.js";
import HomePage from "../screens/Home.js";


const Home = () => {
  return (
    <BrowserRouter>
      <Text>Where are the tabs?</Text>
      <TabViewExample/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/smoke" element={<SmokePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Home;