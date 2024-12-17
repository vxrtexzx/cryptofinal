import React from "react";
import { Button } from "@mui/material";

function UpdateButton({ onClick }) {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      style={{ marginTop: "10px", marginBottom: "10px" }}
    >
      Update
    </Button>
  );
}

export default UpdateButton;
