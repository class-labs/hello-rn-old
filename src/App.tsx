import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { RepoList } from "./RepoList";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RepoList />
    </QueryClientProvider>
  );
}
