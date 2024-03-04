import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import TestPage from "./pages/TestPage";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
