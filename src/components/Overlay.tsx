import { Box } from "@mui/material";

function Overlay() {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(17,11,11,0.5)",
        gridColumn: "1/7",
        gridRow: "1/-1",
      }}
    ></Box>
  );
}

export default Overlay;
