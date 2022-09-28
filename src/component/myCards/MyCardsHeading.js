import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// import axios from "axios";
// import material UI
import {
  Typography,
  Stack,
  TextField,
  Autocomplete,
  Container,
  Button,
} from "@mui/material";

function CardHeading() {
  //   const [card, setcard] = useState([]);
  //   useEffect(() => {
  //     const fetch = async () => {
  //       await axios
  //         .get(
  //           `https://drive.google.com/file/d/1WaF56r-RL4VA57mEpbExDYX4UcVAesVc/view?usp=sharing`
  //         )
  //         .then((response) => {
  //           setcard(response.data);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     };
  //     fetch();
  //   }, []);

  //   console.log(card)

  // fetching tha data
  const cards = useSelector((state) => state.cardReducers.card);

  const getName = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <Typography
        gutterBottom
        variant="h2"
        component="div"
        style={{ textAlign: "center" }}
      >
        Heliverse Task
      </Typography>

      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          flexWrap: "wrap",
          marginBottom: "1rem"
        }}

      >
        {/* Taking the Input To Search By Name  */}
        <Stack spacing={2} sx={{ width: 300 }}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={cards.map(
              (option) => option.first_name + " " + option.last_name
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search by name..."
                variant="standard"
                defaultValue="Small"
                size="small"
                onChange={getName}
              />
            )}
          />
        </Stack>
        <Button variant="outlined" size="medium">Search</Button>
      </Container>
    </>
  );
}

export default CardHeading;
