import * as React from 'react';
import {useWindowDimensions, View} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import SmokePage from "./Smoke.js";
import AboutPage from "./About.js";
import HomePage from "./Home.js";
import QuestionTypeReport from "../components/QuestionTypeReport.js";

const HomeRoute = () => (
  <View style={{flex: 1, backgroundColor: '#ff4081'}}>
    <HomePage/>
  </View>
);

const AboutRoute = () => (
  <View style={{flex: 1, backgroundColor: '#ff4081'}}>
    <AboutPage/>
  </View>
);

const SmokeRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}}>
    <SmokePage/>
  </View>
);

const renderScene = SceneMap({
  home: HomeRoute,
  questiontypes: QuestionTypeReport,
  smoke: SmokePage,
  about: AboutRoute,
});

export default function TabViewExample() {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'Home'},
    {key: 'questiontypes', title: 'Question Types'},
    {key: 'smoke', title: 'Smoke'},
    {key: 'about', title: 'About'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}