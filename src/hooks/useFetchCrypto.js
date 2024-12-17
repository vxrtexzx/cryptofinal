import { useState, useEffect } from "react";
import { getCryptoData } from "../services/cryptoService";

const useFetchCrypto = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const result = await getCryptoData();
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, fetchData };
};

export default useFetchCrypto;
