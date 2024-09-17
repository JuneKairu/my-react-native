import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login/index" options={{
        title: 'Login', 
        headerShown: false
        }} />
      <Stack.Screen name="login/SignUpScreen" options={{
        title: 'Sign Up',
        headerShown: false
        }} />
      <Stack.Screen name="todo/index" options={{
        title: 'Todo List',
        headerShown: false
        }} />
    </Stack>
  );
}