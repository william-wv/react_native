import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MotorcycleList from './src/views/MotorcycleList';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <MotorcycleList />
    </SafeAreaProvider>
  );
}
