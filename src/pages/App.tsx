import Layout from "../components/layout/layout";
import { Store } from "../store/store";
import Home from "./Home";

function App() {
  return (
    <div>
      <Store>
        <Layout>
          <Home />
        </Layout>
      </Store>
    </div>
  );
}

export default App;
