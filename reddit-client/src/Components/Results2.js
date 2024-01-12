import react, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function Results2({ hasChosenNo, result }) {
  const hasResults2 =
    result &&
    typeof result === "object" &&
    "accumulated_wealth_at_67" in result &&
    "x" in result &&
    "age_at_SO" in result &&
    "house_price" in result;
  const hasError = result && typeof result === "object" && "error" in result;
  {
    console.log("Result2:", result);
  }

  return (
    <div id="results2" className="bg-gray-200 h-screen">
      <div
        className="text-black text-5xl flex items-center justify-center h-full"
        id="results"
      >
        {hasResults2 ? (
          <div>
            <p>
              House Price: £{result.house_price.toFixed(0)} in{" "}
              {new Date().getFullYear()}{" "}
            </p>
            <br />
            <p>
              If you save at {result.x}% you would be able to buy your first 25%
              share (equity) in a shared ownership property when you are{" "}
              {result.age_at_SO.toFixed()}
            </p>
            <br />
            <p>
              {" "}
              See graph for proposed staircasing pathway. Your accumulated
              wealth would be £{result.accumulated_wealth_at_67.toFixed(0)} at
              67 years of age
            </p>
            <br />
            <p>
              Staircasing in shared ownership is the process of gradually
              increasing the ownership share of a property over time by
              purchasing additional percentages, thereby reducing the amount of
              rent paid on the remaining share.
            </p>
          </div>
        ) : hasError ? (
          <p>Error: {result.error}</p>
        ) : hasChosenNo ? (
          <p>You have chosen not to explore shared ownership</p>
        ) : (
          <p> No results to display </p>
        )}
      </div>
    </div>
  );
}

export default Results2;
