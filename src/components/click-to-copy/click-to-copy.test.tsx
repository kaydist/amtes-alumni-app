import { render, screen, fireEvent } from "@testing-library/react";
import ClickToCopy from "./click-to-copy";

test("Click to copy test", async () => {
  const handleClick = jest.fn();
  render(
    <ClickToCopy
      text="Copied This Text"
      onClick={() => {
        handleClick();
      }}
    />
  );

  fireEvent.click(screen.getByTestId("click-to-copy"));
  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(await screen.findByText(/\.svg/i)).toBeVisible();
});
