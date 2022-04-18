import { Box } from "@mui/material";
import bike2 from "../assets/bike2.png";

function BikeOverlay() {
  return (
    <Box
      sx={{
        background: `url(${bike2}) no-repeat`,
        backgroundSize: "50%",
        backgroundPosition: "center left",
        gridColumn: "7/13",
        gridRow: "1/-1",
        zIndex: 1,
      }}
    ></Box>
  );
}

export default BikeOverlay;
