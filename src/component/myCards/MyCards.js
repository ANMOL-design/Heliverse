import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Cards } from "../../redux/action/cartAction/cartAction";
// Other Component
import CardHeading from "./MyCardsHeading";
// import material UI
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Pagination,
  Stack,
} from "@mui/material";

function MyCards() {
  // fetching tha data
  const cards = useSelector((state) => state.cardReducers.card);
  // State to store the data
  const [MyCards, setMyCards] = useState([]);
  console.log(MyCards);
  const dispatch = useDispatch();
  // Making a call to set data for first time
  useEffect(() => {
    dispatch(Cards());
    setMyCards(cards);
  }, [dispatch, cards]);
  // State for pagination
  const [page, setpage] = useState(0);

  const handlePagination = (event, newpage) => {
    setpage(newpage);
  };

  return (
    <>
      <CardHeading />
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        {MyCards.slice(page * 20, page * 20 + 20).map((item) => {
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
                  {item.available ? "True" : "False"}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Container>

      {/* Making the Pagination for cards  */}
      <Stack spacing={2} mt={3}>
        <Typography style={{ textAlign: "center" }}>
          Page: {page < 1 ? 1 : page}
        </Typography>
        <Pagination
          count={MyCards.length / 20 - 1}
          page={page}
          rowsperpage={20}
          onChange={handlePagination}
        />
      </Stack>
    </>
  );
}

export default MyCards;
