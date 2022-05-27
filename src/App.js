import { lazy, Suspense } from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home").then(module => ({default:module.Home})))

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense>
          <Routes>

            <Route path="/" element={<Home />} />

          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
