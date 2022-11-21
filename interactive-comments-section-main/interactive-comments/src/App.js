import "./App.css";
import CommentDisplay from "./components/CommentDisplay";
import React, { useEffect, useState } from "react";
import { getComments } from "./services/comment.service";

function App() {
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    getComments().then((response) => {
      setComments(response.data.comments);
      setUser(response.data.currentUser);
      console.log(response.data.comments);
    });
  }, []);

  console.log(user);
  return (
    <div className="App">
      {comments.map((comment) => (
        <CommentDisplay comment={comment} user={user} />
      ))}
    </div>
  );
}

export default App;
