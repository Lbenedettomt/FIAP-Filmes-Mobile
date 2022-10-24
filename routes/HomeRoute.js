import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FavoritesProvider } from '../contexts/FavoritesContext';
import Home from '../views/Home';
import Detail from '../views/Detail';
import Favoritos from '../views/Favoritos';
import UltimoVisto from '../views/UltimoVisto';

export default function HomeRoute() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Detail' component={Detail} />
      <Stack.Screen name='Favoritos' component={Favoritos} />
      <Stack.Screen name='UltimoVisto' component={UltimoVisto} />
    </Stack.Navigator>
  );
}
