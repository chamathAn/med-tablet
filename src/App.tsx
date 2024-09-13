import Dashboard from "./ComponentsByMe/Dashboard";
import MainPage from "./Pages/MainPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Tracker from "./ComponentsByMe/Tracker";
import Exercise from "./ComponentsByMe/Exercise";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainPage />}>
        <Route index element={<Dashboard />} />
        <Route path="tracker" element={<Tracker />} />
        <Route path="exercises" element={<Exercise />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
