import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import CryptoAccordion from "./components/CryptoAccordion";
import UpdateButton from "./components/UpdateButton";
import { Typography, Box } from "@mui/material";

function App() {
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    const response = await axios.get("https://api.coinlore.net/api/tickers/");
    setCryptos(response.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredCryptos = cryptos.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p={4}>
      <Typography variant="h2" fontWeight="bold">
        Cryptocurrency Prices
      </Typography>
      <UpdateButton onClick={fetchData} />
      <SearchBar onSearch={setSearchTerm} />
      {filteredCryptos.map((crypto) => (
        <CryptoAccordion key={crypto.id} crypto={crypto} />
      ))}
    </Box>
  );
}

export default App;
