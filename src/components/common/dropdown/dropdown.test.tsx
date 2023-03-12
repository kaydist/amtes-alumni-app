import { render, screen, fireEvent } from "@testing-library/react";
import DropdownMenu from "./dropdown-menu";
import DropdownOption from "./dropdown-option";
import React from "react";
import { openDropdown } from "../../../utils/dropdown";

test("On Dropdown Render", async () => {
  render(
    <DropdownMenu renderButton={<p>Test</p>} id="1">
      <DropdownOption>Test</DropdownOption>
      <DropdownOption>Test</DropdownOption>
      <DropdownOption>Test</DropdownOption>
    </DropdownMenu>
  );

  expect(await screen.findByTestId("dropdown-menu")).not.toHaveClass("open");
});

// test("On Dropdown Open", async () => {
//   const id = 1;
//   const handleClick = jest.fn(() => {
//     openDropdown(`.dropdown-menu-${id}`);
//   });

//   render(
//     <DropdownMenu
//       renderButton={<p>Test Button</p>}
//       onClick={() => {
//         handleClick();
//       }}
//       id={`${id}`}
//     >
//       <DropdownOption>Test</DropdownOption>
//       <DropdownOption>Test</DropdownOption>
//       <DropdownOption>Test</DropdownOption>
//     </DropdownMenu>
//   );

//   fireEvent.click(await screen.findByTestId("dropdown-menu-render-button"));

//   expect(handleClick).toHaveBeenCalledTimes(1);

//   //   expect(await screen.findByTestId("dropdown-menu")).not.toHaveClass("open");
// });
