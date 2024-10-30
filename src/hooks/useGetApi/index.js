import APIClient from "@/config/services";

export const usePaginationGetApi = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});

  const handleApiCall = async () => {
    try {
      setIsLoading(true);
      const { data } = await APIClient.get(url);
      if (data.value) {
        setData(data.value);
      }
    } catch (error) {
      console.error(error);
      setError(error.response);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleApiCall();
  }, []);

  return { isLoading, data, isError, error };
};
