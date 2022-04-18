import { Box } from "@mui/material";
import bike from "../assets/biker1.png";

function LeftBottom1() {
  return (
    <Box
      sx={{
        backgroundColor: "",
        gridColumn: "1 / 4",
        gridRow: "3 / 4",
        zIndex: 8,
        position: "relative",
        overflow: "clip",
      }}
    >
      <Box
        position="absolute"
        width={"100%"}
        component={"img"}
        src={bike}
        alt="YodaX3 bike"
      ></Box>
    </Box>
  );
}

export default LeftBottom1;
