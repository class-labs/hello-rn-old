import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { MovieList } from "./MovieList";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieList />
    </QueryClientProvider>
  );
}
