import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { Provider } from './src/context/BlogContext';
import { Feather,EvilIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={IndexScreen} 
          options={({navigation}) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
              </TouchableOpacity>
            )
          })
          }
        />
        <Stack.Screen 
          name="Show" 
          component={ShowScreen} 
          options={({navigation, route}) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: route.params.id})}>
                <EvilIcons name="pencil" size={30} />
              </TouchableOpacity>
            )
          })
          }
        />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
      <Provider>
        <App />
      </Provider>
  );
};