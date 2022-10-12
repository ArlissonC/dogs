import { createContext, useContext, useEffect, useState } from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "services/auth";

interface AuthContextState {
  userLogin: (username: string, password: string) => void;
  userLogout: () => void;
  error: any;
  loading: boolean;
  login: boolean | null;
  data: any;
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider = ({ children }: Props) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(false);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          setError(null);
          setLoading(true);
          const response = await TOKEN_VALIDATE_POST(token);
          if (response.data.data.status !== 200)
            throw new Error("Token inválido");

          await getUser();
        } catch (error) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    })();
  }, []);

  const userLogout = async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    localStorage.removeItem("token");
    window.location.href = "login";
  };

  const getUser = async () => {
    const response = await USER_GET();
    setData(response.data);
    setLogin(true);
  };

  const userLogin = async (username: string, password: string) => {
    try {
      setError(null);
      setLoading(true);

      const response = await TOKEN_POST({
        username: username,
        password: password,
      });
      localStorage.setItem("token", response.data.token);
      await getUser();
    } catch (error) {
      if (error instanceof Error) {
        setError("Usuário inválido");
        setLogin(false);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ userLogin, data, userLogout, error, loading, login }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextState {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
