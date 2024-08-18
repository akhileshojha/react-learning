import React from "react";
import { render } from "@testing-library/react";
import CommentList from "./CommentList";

test("renders a list of comments", () => {
  const comments = ["Comment 1", "Comment 2", "Comment 3"];
  const { getByText } = render(<CommentList comments={comments} />);

  expect(getByText("Comment 1")).toBeInTheDocument();
  expect(getByText("Comment 2")).toBeInTheDocument();
  expect(getByText("Comment 3")).toBeInTheDocument();
});

test('renders "No comments yet" when there are no comments', () => {
  const { getByText } = render(<CommentList comments={[]} />);
  expect(getByText("No comments yet")).toBeInTheDocument();
});
