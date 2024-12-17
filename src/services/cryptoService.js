import axios from "axios";

const API_URL = "https://api.coinlore.net/api/tickers/";

export const getCryptoData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching cryptocurrency data:", error);
    return [];
  }
};
