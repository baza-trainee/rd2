import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Layout = lazy(() => import("../components/Layout"));
const About = lazy(() => import("../pages/About"));
const Activity = lazy(() => import("../pages/Activity"));
const Demining = lazy(() => import("../pages/Demining"));
const Contacts = lazy(() => import("../pages/Contacts"));
const NotFound = lazy(() => import("../pages/NotFound"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="activity" element={<Activity />} />
          <Route path="demining" element={<Demining />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
