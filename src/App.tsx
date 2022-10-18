import Footer from "components/Footer";
import Header from "components/Header";
import { AuthProvider } from "context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import Router from "routes";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <main className="AppBody">
            <Router />
          </main>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
