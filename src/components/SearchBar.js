import React from "react";
import { TextField } from "@mui/material";

function SearchBar({ onSearch }) {
  return (
    <TextField
      fullWidth
      margin="normal"
      variant="outlined"
      placeholder="Search"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
