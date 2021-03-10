import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile213546Navigator from '../features/UserProfile213546/navigator';
import Settings213545Navigator from '../features/Settings213545/navigator';
import Settings213543Navigator from '../features/Settings213543/navigator';
import SignIn2213541Navigator from '../features/SignIn2213541/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile213546: { screen: UserProfile213546Navigator },
Settings213545: { screen: Settings213545Navigator },
Settings213543: { screen: Settings213543Navigator },
SignIn2213541: { screen: SignIn2213541Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
