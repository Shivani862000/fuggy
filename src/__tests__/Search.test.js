import { fireEvent, render, screen } from "@testing-library/react";
import { Home } from "../pages/Home";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
describe("search", () => {
  it("get search data", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const filterBtn = screen.getByRole("button",{name:"Top Rating Restaurants"})
    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput,{target:{value:"Pizza"}});
    fireEvent.click(searchBtn);
    fireEvent.click(filterBtn)
    expect(filterBtn).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
    const card = screen.getAllByTestId("resCard")
    expect(card.length).toBe(12);
    // expect(card.length).toBe(2)
  });
});
