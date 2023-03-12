import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DragAndDrop from "./drag-and-drop";

beforeEach(() => {
  render(
    <DragAndDrop
      placeholder={<p>data</p>}
      status="idle"
      resetStatusAction={() => {
        return;
      }}
    />
  );
});

it("On Drag and Drop render", () => {
  expect(screen.queryByTestId("file-uploading-state")).not.toBeInTheDocument();
});

// it("On Upload Start", () => {
//   fireEvent.drop(queryByLabelText("file-upload-input"), {
//     dataTransfer: {
//       files: [new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" })],
//     },
//   });
// });
