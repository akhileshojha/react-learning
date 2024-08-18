import React, { useState } from "react";
/**
 * A React component for rendering a comment form.
 *
 * @param {function} addComment - A callback function to add a new comment.
 * @return {JSX.Element} A JSX element representing the comment form.
 */
function CommentForm({ addComment }) {
  const [comment, setComment] = useState("");
  /**
   * Handles the submission of the comment form.
   *
   * @param {SyntheticEvent} e - The event object triggered by the form submission.
   * @return {void}
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(comment);
      setComment("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
        <div className="mb-4">
      <label htmlFor="comment" className="block text-gray-700 text-lg font-bold mb-2">Your comment:</label>
      <input
        type="text"
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addComment(comment);
          setComment("");
        }}
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Submit
      </button>
      </div>
    </form>
  );
}

export default CommentForm;
