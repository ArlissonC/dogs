import { useCallback, useState } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>();
  const [data, setData] = useState<any>();

  const request = useCallback(async (method: any) => {
    let response;
    try {
      setError(null);
      setLoading(true);
      response = await method;
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setData(response);
      setLoading(false);
      return { response };
    }
  }, []);

  return { request, loading, error, data };
};

export default useFetch;
