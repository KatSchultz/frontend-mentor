import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { getComments } from "./services/data.service";
import Comment from "./components/Comment";
import TourCard from "./components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function App() {
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    getComments().then((response) => {
      setComments(response.data.comments);
      setUser(response.data.currentUser);
    });
  });

  return (
    <div className="App">
      <Container>
        <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
      {/* {comments.map((comment) => (
        <Comment comment={comment} user={user} />
      ))} */}
    </div>
  );
}

export default App;
