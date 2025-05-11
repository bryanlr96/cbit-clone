import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";  // Asegúrate de importar Layout
import Playground from "./pages/Playground";
import WorkInProgress from "./pages/WorkInProgress";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}> 
        <Route index element={<Playground />} /> 
        <Route path="/activity" element={<WorkInProgress />} /> 
        <Route path="/projects" element={<WorkInProgress />} /> 
        <Route path="/blueprints" element={<WorkInProgress />} /> 
        <Route path="/workflows" element={<WorkInProgress />} /> 
        <Route path="/connection" element={<WorkInProgress />} /> 
        <Route path="/generator" element={<WorkInProgress />} /> 
        <Route path="/predictor" element={<WorkInProgress />} /> 
        <Route path="/extender" element={<WorkInProgress />} /> 
        <Route path="/apikeys" element={<WorkInProgress />} /> 
        <Route path="/invites" element={<WorkInProgress />} /> 
        <Route path="/usage" element={<WorkInProgress />} /> 
        <Route path="/billings" element={<WorkInProgress />} /> 
        <Route path="/settings" element={<WorkInProgress />} /> 
      </Route>
    </Routes>
  );
}

export default App;
