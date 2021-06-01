import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';


export default function App() {
  return (
    <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({
  ReadStory: {screen: ReadStoryScreen},
  WriteStory: {screen: WriteStoryScreen}
},
{defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ({})=>{
      const routeName = navigation.state.routeName;
      if(routeName === "ReadStory"){
        return(
          <Image
            style = {{width: 40, height: 40}}
            source = {require("./assets/booklogo.jpg")}
          />

        )
      }
    }
})
}
);

const AppContainer = createAppContainer(TabNavigator);