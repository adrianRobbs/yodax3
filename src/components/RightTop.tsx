import { Star } from "@mui/icons-material";
import { Box, Rating, Typography } from "@mui/material";

function RightTop() {
  return (
    <Box
      sx={{
        backgroundColor: "",
        gridColumn: "7 / 13",
        gridRow: "2 / 3",
        display: "flex",
        justifyContent: "end",
      }}
    >
      <Box
        bgcolor={"#F81D79"}
        width="174px"
        height="63px"
        boxSizing={"border-box"}
        padding={"0.5rem 1rem"}
        marginRight="10%"
        marginTop={"5rem"}
      >
        <Rating
          precision={0.5}
          value={4.5}
          readOnly
          icon={<Star sx={{ color: "#F484B3" }} />}
          emptyIcon={<Star color="secondary" />}
        />
        <Typography variant="body2" color="secondary">
          1000+ Review
        </Typography>
      </Box>
    </Box>
  );
}

export default RightTop;
