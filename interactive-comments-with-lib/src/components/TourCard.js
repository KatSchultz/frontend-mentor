import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material";

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          className="img"
          src="https://imgur.com/NJTm50N.jpg"
          alt="waterfall"
        ></img>
        <Box paddingX={1}>
          <Typography component="h2" variant="subtitle1">
            Immersive Falls Tour
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTime></AccessTime>
            <Typography variant="body2" component="p">
              5 hours
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
