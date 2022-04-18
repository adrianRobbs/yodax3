import { Facebook, FacebookRounded, Instagram } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";

function LeftBottom2() {
  return (
    <Box
      sx={{
        backgroundColor: "",
        gridColumn: "4 / 7",
        gridRow: "3 / 4",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Stack direction={"row"} spacing={3}>
        <IconButton>
          <FacebookRounded color="secondary" fontSize="large" />
        </IconButton>
        <IconButton>
          <Instagram color="secondary" fontSize="large" />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default LeftBottom2;
