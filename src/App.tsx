import PlayerStats from "./components/PlayerStats";
import Navbar from "./components/layout/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <PlayerStats />
    </QueryClientProvider>
  );
}

export default App;
