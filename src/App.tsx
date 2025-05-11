import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";  // Asegúrate de importar Layout
import Playground from "./pages/Playground";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}> 
        <Route index element={<Playground />} /> 
      </Route>
    </Routes>
  );
}

export default App;
