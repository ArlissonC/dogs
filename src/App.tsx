import Footer from "components/Footer";
import Header from "components/Header";
import { BrowserRouter } from "react-router-dom";
import Router from "routes";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="AppBody">
          <Router />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
