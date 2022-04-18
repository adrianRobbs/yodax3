import { Menu } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Typography,
  styled,
  Stack,
} from "@mui/material";
import { Linker } from "./shared/S-Button-text";

const Logo = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  ":hover": {
    backgroundColor: "transparent",
    color: theme.palette.primary.light,
  },
  ".MuiTypography-h6": {
    ":hover": {
      backgroundColor: "transparent",
      color: "inherit",
    },
  },
}));

function Navigation() {
  return (
    <Box
      sx={{
        backgroundColor: "",
        gridColumn: "1 / -1",
        gridRow: "1 / 2",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        alignItems: "center",
        position: "relative",
      }}
    >
      <IconButton>
        <Menu
          color="secondary"
          sx={{
            zIndex: 1,
            ":hover": {
              backgroundColor: "transparent",
              color: "#F484B3",
            },
          }}
        />
      </IconButton>
      <Stack
        direction="row"
        position={"absolute"}
        width="90%"
        justifyContent={"space-between"}
        left="5%"
        right="5%"
      >
        <Logo color="secondary">
          <Typography color="secondary" variant="h6">
            YodaX3
          </Typography>
        </Logo>
        <Stack direction="row" spacing={4}>
          <Linker color="secondary">Bikes</Linker>
          <Linker color="secondary">About Us</Linker>
          <Linker color="secondary">{`Services & Support`}</Linker>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Navigation;
