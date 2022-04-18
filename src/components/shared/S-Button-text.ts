import { Button, styled } from "@mui/material";

export const Linker = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  ":hover": {
    backgroundColor: "transparent",
    color: theme.palette.primary.light,
  },
}));
