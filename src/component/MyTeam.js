import React from "react";
import { useSelector } from "react-redux";

// import material UI
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Button,
  CardActions,
} from "@mui/material";

const MyTeam = () => {
  // fetching tha data
  const team = useSelector((state) => state.teamReducers.myteam);
  console.log(team);

  return (
    <>
      {/* Heading Of the Page  */}
      <Typography
        gutterBottom
        variant="h2"
        component="div"
        style={{ textAlign: "center" }}
      >
        Heliverse Team
      </Typography>

      <Typography
        gutterBottom
        variant="h6"
        component="div"
      >
        Available Member in Team {team.length}
      </Typography>

      {/* Rendering the Data  */}
      <Container
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "stretch",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        {team.length > 0 ? (
          team.map((item) => {
            return (
              <Card sx={{ width: "17rem" }} key={item.id}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.avatar}
                  alt={item.domain}
                  style={{ margin: "auto", width: "auto" }}
                />
                <hr style={{ margin: "0" }} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.first_name + " " + item.last_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <b>Email: </b>
                    {item.email} <br />
                    <b>Gender: </b>
                    {item.gender} <br />
                    <b>Domain: </b>
                    {item.domain} <br />
                    <b>Avalability: </b>
                    True
                  </Typography>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <Typography gutterBottom variant="h3" component="div" mt={4}>
            No Member in Team
          </Typography>
        )}
      </Container>
    </>
  );
};
export default MyTeam;
