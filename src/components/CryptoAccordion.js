import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Tooltip } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function CryptoAccordion({ crypto }) {
  const percentChangeColor = crypto.percent_change_24h < 0 ? "red" : "green";

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" fontWeight="bold">
          {crypto.name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <strong>Symbol:</strong> {crypto.symbol}
        </Typography>
        <Typography>
          <strong>Price USD:</strong> {crypto.price_usd}
        </Typography>
        <Typography>
          <strong>Price BTC:</strong> {crypto.price_btc}
        </Typography>
        <Tooltip title="The market capitalization of a cryptocurrency is calculated by multiplying the number of coins in circulation by the current price">
          <Typography>
            <strong>Market Cap USD:</strong> {crypto.market_cap_usd}
          </Typography>
        </Tooltip>
        <Typography style={{ color: percentChangeColor }}>
          <strong>Percent Change 24H:</strong> {crypto.percent_change_24h}%
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default CryptoAccordion;
