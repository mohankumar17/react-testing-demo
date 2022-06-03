import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Sum from "../Sum";

test("heading", () => {
  render(<Sum />);
  const headingEl = screen.getByTestId("heading");

  expect(headingEl.textContent).toBe("Count");
});

test("counter starting value", () => {
  render(<Sum />);
  const countEl = screen.getByTestId("counter");

  expect(countEl.textContent).toBe("0");
});

test("increment button", () => {
  render(<Sum />);
  const buttonEl = screen.getByTestId("incrBtn");

  expect(buttonEl.textContent).toBe("Increment");
});

test("decrement button", () => {
  render(<Sum />);
  const buttonEl = screen.getByTestId("decrBtn");

  expect(buttonEl.textContent).toBe("Decrement");
});

test("counter step input handler", () => {
  render(<Sum />);
  const inputEl = screen.getByTestId("stepInput");

  fireEvent.change(inputEl, {
    target: {
      value: "3",
    },
  });

  expect(inputEl.value).toBe("3");
});

test("counter increment button handler", () => {
  render(<Sum />);
  const buttonEl = screen.getByTestId("incrBtn");

  const countEl = screen.getByTestId("counter");

  expect(countEl.textContent).toBe("0");

  fireEvent.click(buttonEl);

  expect(countEl.textContent).toBe("1");
});

test("counter decrement button handler", () => {
  render(<Sum />);
  const buttonEl = screen.getByTestId("decrBtn");

  const countEl = screen.getByTestId("counter");

  expect(countEl.textContent).toBe("0");

  fireEvent.click(buttonEl);

  expect(countEl.textContent).toBe("-1");
});

test("counter increment button with input handler", () => {
  render(<Sum />);
  const buttonEl = screen.getByTestId("incrBtn");
  const countEl = screen.getByTestId("counter");
  const inputEl = screen.getByTestId("stepInput");

  fireEvent.change(inputEl, {
    target: {
      value: "3",
    },
  });

  expect(countEl.textContent).toBe("0");

  fireEvent.click(buttonEl);

  expect(countEl.textContent).toBe("3");
});

test("counter decrement button with input handler", () => {
  render(<Sum />);
  const buttonEl = screen.getByTestId("decrBtn");
  const countEl = screen.getByTestId("counter");
  const inputEl = screen.getByTestId("stepInput");

  fireEvent.change(inputEl, {
    target: {
      value: "3",
    },
  });

  expect(countEl.textContent).toBe("0");

  fireEvent.click(buttonEl);

  expect(countEl.textContent).toBe("-3");
});

test("counter colour change", () => {
  render(<Sum />);
  const incrButtonEl = screen.getByTestId("incrBtn");
  const decrButtonEl = screen.getByTestId("decrBtn");
  const countEl = screen.getByTestId("counter");
  const inputEl = screen.getByTestId("stepInput");

  fireEvent.change(inputEl, {
    target: {
      value: "25",
    },
  });

  expect(countEl.className).toBe("");

  fireEvent.click(incrButtonEl); //count=25

  expect(countEl.className).toBe("");

  fireEvent.click(incrButtonEl); //count=50

  expect(countEl.className).toBe("green");

  fireEvent.click(decrButtonEl); //count=25

  expect(countEl.className).toBe("");

  fireEvent.click(decrButtonEl); //count=0

  expect(countEl.className).toBe("");

  fireEvent.click(decrButtonEl); //count=-25
  fireEvent.click(decrButtonEl); //count=-50

  expect(countEl.className).toBe("red");
});
