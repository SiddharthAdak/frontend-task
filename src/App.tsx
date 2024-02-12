import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Page404 from "./pages/page404/Page404";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <div className="bg-slate-100 h-[calc(100vh)] overflow-scroll w-screen overscroll-none">
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
