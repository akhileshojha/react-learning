import React, { useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import "./tailwind.css";
/**
 * A React component representing the main application.
 *
 * @return {JSX.Element} A JSX element representing the application.
 */
function App() {
  const [comments, setComments] = useState([]);
  const addComment = (comment) => {
    setComments([...comments, comment]);
  };
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1
        id="comments"
        name="comments"
        className="text-4xl font-bold text-center text-gray-800 mb-6"
      >
        Comments
      </h1>
      <CommentForm addComment={addComment} />
      <CommentList comments={comments} />
    </div>
  );
}

export default App;
