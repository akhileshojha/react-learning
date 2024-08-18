import React from "react";
/**
 * A React component for rendering a list of comments.
 *
 * @param {array} comments - An array of comment strings to be rendered.
 * @return {JSX.Element} A JSX element representing the list of comments.
 */
function CommentList({ comments }) {
  if (comments.length === 0) {
    return <div className="max-w-lg mx-auto mt-6"><p className="p-4 bg-gray-100 rounded-md shadow-md">No comments yet</p></div>;
  }
  return (
    <div className="max-w-lg mx-auto mt-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Comments</h2>
      <ul className="space-y-4">
        {comments.map((comment, index) => (
          <li key={index} className="p-4 bg-gray-100 rounded-md shadow-md">
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CommentList;
