import { useState } from "react";
import Layout from "./components/layout/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div>VITE + REACT</div>
    </Layout>
  );
}

export default App;
