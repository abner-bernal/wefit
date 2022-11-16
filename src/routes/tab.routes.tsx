import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StarFilled } from '../icons/StarFilled';
import { GitHub } from '../icons/GitHub';

import { Favorites } from '../screens/Favorites';
import { Home } from '../screens/Home';
import { useTheme } from 'styled-components';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

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
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.tabBarInactive,
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