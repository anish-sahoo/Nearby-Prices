import TestPage from "./components/TestPage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div className=" h-full min-h-screen w-screen bg-blue-200">
      <Layout>
        <TestPage />
      </Layout>
    </div>
  );
};

export default App;
