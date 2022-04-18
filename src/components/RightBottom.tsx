import { Box, Stack, Typography } from "@mui/material";

function RightBottom() {
  return (
    <Box
      sx={{
        backgroundColor: "",
        gridColumn: "7 / 13",
        gridRow: "3 / 4",
        display: "grid",
        placeItems: "center",
        zIndex: 4,
      }}
    >
      <Stack direction={"row"} spacing={6}>
        <Stack>
          <Typography variant="h4" color="secondary">
            25 km/h
          </Typography>
          <Typography variant="body2" color="secondary">
            Assist Speed
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="h4" color="secondary">
            70 km
          </Typography>
          <Typography variant="body2" color="secondary">
            Battery Range
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="h4" color="secondary">
            3.5 h
          </Typography>
          <Typography variant="body2" color="secondary">
            Chargin Time
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="h4" color="secondary">
            16.9 kg
          </Typography>
          <Typography variant="body2" color="secondary">
            Weight
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default RightBottom;
