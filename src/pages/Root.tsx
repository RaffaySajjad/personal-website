import { Outlet } from "react-router-dom";
import { Lines } from "../components/Lines";
import { Navbar } from "../components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export const Root: React.FC = () => (
  <div className="mi-wrapper">
    <Navbar />
    <Lines />
    <QueryClientProvider client={client}>
      <Outlet />
    </QueryClientProvider>
  </div>
);
