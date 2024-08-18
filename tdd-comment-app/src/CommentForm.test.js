import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CommentForm from "./CommentForm";

test("renders comment form", () => {
  const { getByLabelText, getByText } = render(<CommentForm />);
  expect(getByLabelText(/your comment/i)).toBeInTheDocument();
  expect(getByText(/submit/i)).toBeInTheDocument();
});

test("allows the user to submit a comment", () => {
  const addComment = jest.fn();
  const { getByLabelText, getByText } = render(
    <CommentForm addComment={addComment} />
  );

  fireEvent.change(getByLabelText(/your comment/i), {
    target: { value: "This is a test comment" },
  });
  fireEvent.click(getByText(/submit/i));
  expect(addComment).toHaveBeenCalledTimes(1);
  expect(addComment).toHaveBeenCalledWith("This is a test comment");
});

test("does not allow the user to submit an empty comment", () => {
  const addComment = jest.fn();
  const { getByLabelText, getByText } = render(
    <CommentForm addComment={addComment} />
  );

  fireEvent.click(getByText(/submit/i));
  expect(getByLabelText(/your comment/i).value).toBe("");
});

test("clears the input after submission", () => {
  const { getByLabelText, getByText } = render(
    <CommentForm addComment={() => {}} />
  );
  const input = getByLabelText(/your comment/i);

  fireEvent.change(input, { target: { value: "Another test comment" } });
  fireEvent.click(getByText(/submit/i));
  expect(input.value).toBe("");
});
