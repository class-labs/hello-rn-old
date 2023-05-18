import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./screens/Home";
import { MovieList } from "./screens/MovieList";
import { RootStackParamList } from "./types/navigation";

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator<RootStackParamList>();

// Task 11
// When the user presses on a movie, we want to navigate to a movie details page
// Add a Stack.Screen below
// Remember to add one entry to the RootStackParamList type also
// Create a file for the MovieDetails screen (put it in the "screens" folder)
// For now, just render a blank page that says "Movie Details"

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MovieList" component={MovieList} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
