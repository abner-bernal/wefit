import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

import { RepositoryDetails } from '../screens/RepositoryDetails';
import { TabRoutes } from './tab.routes';

export type RootAppParams = {
  TabRoutes: undefined;
  RepositoryDetails: undefined | {};
};

const { Navigator, Screen } = createNativeStackNavigator<RootAppParams>();

export function Routes(){
  return(
    <NavigationContainer>
      <Navigator
        initialRouteName='TabRoutes'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen 
          name='TabRoutes'
          component={TabRoutes}
        />
        <Screen 
          name='RepositoryDetails'
          component={RepositoryDetails}
        />
      </Navigator>
    </NavigationContainer>
  );
}