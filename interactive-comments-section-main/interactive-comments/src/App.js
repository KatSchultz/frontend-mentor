import "./App.css";
import CommentDisplay from "./components/CommentDisplay";
import React, { useEffect, useState } from "react";
import { getComments } from "./services/comment.service";
import Modal from "./components/Modal";

function App() {
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState({});
  const [modalDisplay, setModalDisplay] = useState(false);

  useEffect(() => {
    getComments().then((response) => {
      setComments(response.data.comments);
      setUser(response.data.currentUser);
      console.log(response.data.comments);
    });
  }, []);

  function displayModal() {
    console.log("display modal clicked");
    setModalDisplay(true);
  }

  return (
    <div className="App">
      {modalDisplay && <Modal />}
      {comments.map((comment) => (
        <CommentDisplay
          comment={comment}
          user={user}
          displayModal={displayModal}
        />
      ))}
    </div>
  );
}

export default App;
