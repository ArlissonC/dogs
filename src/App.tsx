import Footer from "components/Footer";
import Header from "components/Header";
import { AuthProvider } from "context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import Router from "routes";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
