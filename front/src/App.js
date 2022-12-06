import { BrowserRouter } from "react-router-dom";
import { useInitialRequest } from "./hooks/useInitialRequest";
import RouteConfig from "./routes";
import Request from "./components/common/snipper/Request";

function App() {
  const { request, error } = useInitialRequest();
  if (request) return <Request />;
  return (
    <BrowserRouter>
      <RouteConfig />
    </BrowserRouter>
  );
}

export default App;
