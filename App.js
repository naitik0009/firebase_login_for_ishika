import { StatusBar } from 'expo-status-bar';
import { AuthNavigation } from './src/services/authentication/auth.check';
import { UserProvider } from './src/context/user.context';
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <UserProvider>
      <AuthNavigation/>
      </UserProvider>
    </>
  );
}


