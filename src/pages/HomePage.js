import axios from "axios";
import { useState, useEffect } from "react";
import { Button, TextField, Typography, Container, Box, CircularProgress } from "@mui/material";
import CryptoCard from "../components/CryptoCard";

const API_URL = "https://api.coinlore.net/api/tickers/";

function HomePage() {
  const [cryptoData, setCryptoData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setCryptoData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container maxWidth="md" style={{ paddingTop: "20px" }}>
      {/* Header Section */}
      <Typography variant="h3" fontWeight="bold" align="center" gutterBottom>
        Cryptocurrency Prices
      </Typography>

      <Box display="flex" justifyContent="center" mb={2}>
        <Button variant="outlined" onClick={fetchData}>
          Update
        </Button>
      </Box>

      {/* Search Bar */}
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "20px" }}
      />

      {/* Crypto List */}
      {loading ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        cryptoData
          .filter(
            (coin) =>
              coin.name.toLowerCase().includes(search.toLowerCase()) ||
              coin.symbol.toLowerCase().includes(search.toLowerCase())
          )
          .map((coin) => <CryptoCard key={coin.id} coin={coin} />)
      )}
    </Container>
  );
}

export default HomePage;
