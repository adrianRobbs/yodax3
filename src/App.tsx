import { Box, Container } from "@mui/material";
import {
  LeftBottom1,
  LeftBottom2,
  Navigation,
  RightBottom,
  RightTop,
  MainContent,
  Overlay,
  BikeOverlay,
} from "./components";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        <title>YodaX3 | Ride the streets</title>
        <meta name="description" content="Take the streets with speed" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridTemplateRows="1fr"
        sx={{
          background:
            "radial-gradient(700px 700px at 50px bottom, #F81D79 -50%, #181515)",
        }}
      >
        <Box
          sx={{
            height: "100vh",
            maxWidth: "1280px",
            width: "100%",
            mx: "auto",
            gridColumn: "1/-1",
            gridRow: "1/-1",
            display: "grid",
            gridTemplateColumns: "repeat(12,1fr)",
            gridTemplateRows: "66px 2fr 1.2fr",
          }}
        >
          <Navigation />
          <MainContent />
          <LeftBottom1 />
          <LeftBottom2 />
          <RightTop />
          <RightBottom />
        </Box>
        <Overlay />
        <BikeOverlay />
      </Box>
    </>
  );
}

export default App;
