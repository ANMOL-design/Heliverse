import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetCards } from "../../redux/action/cartAction/cartAction";
import { AddToTeam } from "../../redux/action/cartAction/teamAction";

// import material UI
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Pagination,
  Stack,
  TextField,
  Button,
  MenuItem,
  CardActions,
} from "@mui/material";

function MyCards() {
  // fetching tha data
  const cards = useSelector((state) => state.cardReducers.card);

  // State to store the data
  const [MyCards, setMyCards] = useState([]);
  const [BackupCard, setBackupCard] = useState([]);

  // State to Filter Out values
  const [name, setname] = useState("");
  const [gender, setgender] = useState("");
  const [domain, setdomain] = useState("");
  const [avail, setavail] = useState("");

  //   console.log(gender, domain, avail);

  // State for pagination
  const [page, setpage] = useState(0);

  const dispatch = useDispatch();
  let navigate = useNavigate();
  // Making a call to set data for first time
  useEffect(() => {
    dispatch(GetCards());
    setMyCards(cards);
    setBackupCard(cards);
  }, [dispatch, cards]);

  const handlePagination = (event, newpage) => {
    setpage(newpage);
  };

  const handleSearchByName = () => {
    if (name !== "") {
      var ans = BackupCard.map((a) => {
        let item = a.first_name + " " + a.last_name;
        if (item.toUpperCase().search(name.toUpperCase()) > -1) {
          return a;
        }
      });

      ans = ans.filter((e) => e !== undefined);
      setMyCards(ans);
    } else {
      setMyCards(BackupCard);
    }
  };

  const handleFilterByValues = () => {
    console.log(gender, domain, avail)
    if (gender && domain && avail !== "") {
        console.log('run')
      const ans = BackupCard.filter((item) => {
        return (
          item.gender === gender &&
          item.domain === domain &&
          item.available === avail
        );
      });
      setMyCards(ans);
    }
    else if (domain && avail !== "") {
      const ans = BackupCard.filter((item) => {
        return item.domain === domain && item.available === avail;
      });
      setMyCards(ans);
    }
    else if (gender && avail !== "") {
      const ans = BackupCard.filter((item) => {
        return item.gender === gender && item.available === avail;
      });
      setMyCards(ans);
    } else if (gender && domain) {
      const ans = BackupCard.filter((item) => {
        return item.gender === gender && item.domain === domain;
      });
      setMyCards(ans);
    }
    // Filter for Gender
    else if (gender !== "") {
      let ans = BackupCard.map((a) => {
        return a;
      });

      ans = ans.filter((e) => e.gender === gender);
      setMyCards(ans);
    }
    // Filter for Domain
    else if (domain !== "") {
      let ans = BackupCard.map((a) => {
        return a;
      });

      ans = ans.filter((e) => e.domain === domain);
      setMyCards(ans);
    }
    // Filter For available
    else if (avail !== "") {
      let ans = BackupCard.map((a) => {
        return a;
      });

      ans = ans.filter((e) => e.available === avail);
      setMyCards(ans);
    }
  };

  const addToHeliverse = (data) => {
    dispatch(AddToTeam(data));
  };

  const handleReset = () => {
    setMyCards(BackupCard);
    setgender("");
    setdomain("");
    setavail("");
  };

  // Filter the Category of Data
  const allCardCat = [
    ...new Set(
      BackupCard.map((item) => {
        return item.domain;
      })
    ),
  ];

  return (
    <>
      {/* Heading Of the Page  */}
      <Typography
        gutterBottom
        variant="h2"
        component="div"
        style={{ textAlign: "center" }}
      >
        Heliverse Task
      </Typography>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* Search By Name  */}
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          flexWrap: "wrap",
          marginBottom: "1rem",
        }}
      >
        {/* Taking the Input To Search By Name  */}
        <Stack spacing={2} sx={{ width: 300 }}>
          <TextField
            label="Search by name..."
            variant="standard"
            size="small"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </Stack>
        <Button variant="outlined" size="medium" onClick={handleSearchByName}>
          Search
        </Button>
      </Container>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* Filter Data Acc to domain, gender and availability */}
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
          margin: "1.5rem 0px",
          gap: "0.5rem",
        }}
      >
        {/* Filter By Gender  */}
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={gender}
          size="small"
          onChange={(e) => {
            setgender(e.target.value);
          }}
          helperText="Select Gender"
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Agender">Agender</MenuItem>
        </TextField>

        {/* Filter By Domain  */}
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={domain}
          size="small"
          onChange={(e) => {
            setdomain(e.target.value);
          }}
          helperText="Select Domain"
        >
          {allCardCat.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        {/* Filter By Avalible  */}
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={avail}
          size="small"
          onChange={(e) => {
            setavail(e.target.value);
          }}
          helperText="Select Available"
        >
          <MenuItem value={true}>Available</MenuItem>
          <MenuItem value={false}>Unavailable</MenuItem>
        </TextField>

        {/* Button To Trigger The Filter  */}
        <Button variant="outlined" size="medium" onClick={handleFilterByValues}>
          Filter
        </Button>
        <Button variant="outlined" size="medium" onClick={handleReset}>
          Reset
        </Button>
      </Container>

      {/* // Present the Member of team //  */}
      <Button variant="outlined" size="medium" onClick={() => {navigate('/my-team');}}>
        View Team
      </Button>
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* Rendering the Data  */}
      <Container
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "stretch",
          flexWrap: "wrap",
          gap: "0.75rem",
          marginTop: "1rem"
        }}
      >
        {MyCards.length > 0 ? (
          MyCards.slice(page * 20, page * 20 + 20).map((item) => {
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
                {/* Button to Add to Team  */}
                <CardActions style={{ justifyContent: "center" }}>
                  {item.available ? (
                    <Button
                      size="small"
                      color="primary"
                      variant="contained"
                      onClick={() => {
                        addToHeliverse(item);
                      }}
                    >
                      Add to Team
                    </Button>
                  ) : (
                    <Button
                      size="small"
                      color="primary"
                      variant="contained"
                      disabled
                    >
                      Unavailable
                    </Button>
                  )}
                </CardActions>
              </Card>
            );
          })
        ) : (
          <Typography gutterBottom variant="h3" component="div" mt={4}>
            No Data Found...
          </Typography>
        )}
      </Container>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
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
