import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import { Favorites } from '../screens/Favorites';
import { Home } from '../screens/Home';

import { StarFilled } from '../icons/StarFilled';
import { GitHub } from '../icons/GitHub';

export type RootTabParams = {
  Home: undefined;
  Favorites: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<RootTabParams>();

export function TabRoutes() {
  const { colors } = useTheme();

  return(
    <Navigator
      screenOptions={{
        tabBarInactiveTintColor: colors.tabBarInactive,
        tabBarActiveTintColor: colors.primary,
        headerShown: false,
      }}
      sceneContainerStyle={{
        backgroundColor: colors.primaryBackground,
      }}
    >
      <Screen 
        name="Home" 
        component={Home}
        options={{        
          tabBarLabel: 'Repositórios',
          tabBarIcon: ({ color }) => <GitHub color={color} />
        }}
      />
      <Screen 
        name="Favorites" 
        component={Favorites} 
        options={{        
          tabBarIcon: ({ color }) => <StarFilled color={color} />
        }}
      />
    </Navigator>
  );
}