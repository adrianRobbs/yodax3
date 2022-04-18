import { Box, Button, Stack, Typography } from "@mui/material";
import { Linker } from "./shared/S-Button-text";

function MainContent() {
  return (
    <Box
      sx={{
        backgroundColor: "",
        gridColumn: "1 / 7",
        gridRow: "2 / 3",
        zIndex: 9,
        display: "grid",
        placeItems: "center",
      }}
    >
      <Stack width="70%" spacing={4}>
        <Typography variant="h1" color="secondary">
          Take the{" "}
          <Box>
            {`streets. `}
            <Box component={"span"} sx={{ color: "#F81D79", fontSize: "36px" }}>
              YodaX3
            </Box>
          </Box>
        </Typography>
        <Typography sx={{ color: "#A99C9C", lineHeight: 2 }} variant="body2">
          <Box
            component={"span"}
            sx={{ color: "#fff" }}
          >{`Shift your ride, not gears. `}</Box>{" "}
          Ease your path toward the fastest way to move in the city. Free your
          mind as the bike adapts intuitively to power the speed you need.
        </Typography>
        <Stack direction="row" spacing={3}>
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize", padding: "0.8rem 1.3rem" }}
          >
            Book a test ride
          </Button>
          <Linker color="secondary">Configure yours</Linker>
        </Stack>
      </Stack>
    </Box>
  );
}

export default MainContent;
