// Test away!

import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";

afterEach(rtl.cleanup);

test("<App /> snapshot", async () => {
  const wrapper = rtl.render(<Controls />);
  await wrapper.queryAllByText(/lock/i);

  // Saves our snapshot to disk, or checks an existing snapshot on the disk.
  // If it looks at all different, the test will fail.
  expect(wrapper.asFragment()).toMatchSnapshot();
});

// test("Cleared images", async () => {
//   const wrapper = rtl.render(<Controls />);
//   await wrapper.queryAllByText(/lock/i);

//   const clear = wrapper.getByText("/clear/i");

//   rtl.act(() => {
//     rtl.fireEvent.click(clear);
//   });
// });
