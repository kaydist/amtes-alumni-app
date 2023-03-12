import { render, screen, fireEvent } from "@testing-library/react";
import SlidingPane from "./slidingpane";

test("on init of sliding pane", async () => {
  render(
    <SlidingPane title="Test" isOpen={false} onClose={() => {}}>
      <p>Test</p>
    </SlidingPane>
  );

  expect(await screen.findByTestId("sliding-pane")).not.toHaveClass("open");
});

test("Sliding pane close", async () => {
  const handleClick = jest.fn();
  const openState = false;
  render(
    <SlidingPane title="Test" isOpen={openState} onClose={handleClick}>
      <p>Test</p>
    </SlidingPane>
  );
  fireEvent.click(screen.getByTestId("sliding-pane-close-btn"));
  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(await screen.findByTestId("sliding-pane")).not.toHaveClass("open");
});
