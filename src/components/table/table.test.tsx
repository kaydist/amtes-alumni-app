import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./table";
import TableRow from "./tablebody";

test("on table init", () => {
  render(
    <Table
      tableHeader={["col-1", "col-2"]}
      isEmpty={false}
      emptyStateComponent={<></>}
    >
      <TableRow>
        <td>test</td>
        <td>test</td>
      </TableRow>
      <TableRow>
        <td>test</td>
        <td>test</td>
      </TableRow>
    </Table>
  );
});

test(`Table row should be row icon`, async () => {
  render(
    <Table
      tableHeader={["col-1", "col-2"]}
      isEmpty={false}
      emptyStateComponent={<></>}
    >
      <TableRow>
        <td>test</td>
        <td>test</td>
      </TableRow>
      <TableRow>
        <td>test</td>
        <td>test</td>
      </TableRow>
    </Table>
  );

  expect(await screen.findByTestId("table")).toHaveAttribute(
    "data-rowicon",
    "false"
  );

  screen.queryAllByTestId("table-row-icon").map((item) => {
    expect(item).not.toBeInTheDocument();
  });
});
