/* import { useState } from "react";
import { TopBar } from "./top-bar";
import { UserInput } from "./user-input";

export function App() {
  const [booksCount, setBooksCount] = useState<number>(2);

  return (
    <div className="app">
      <TopBar>React Components are state machines</TopBar>
      <h1 className="headline white-text">_ ^ _ Stateful Bookstore _ ^ _</h1>
      <div className="hbox space-between mt20">
        <h3 className="paragraph">Book counter: {booksCount}</h3>
        <button className="button" onClick={() => setBooksCount(booksCount + 1)}>
          add Book
        </button>
      </div>
      <br />
      <hr />
      <UserInput
          question="What is your name?"
          placeholder="Your name here..."
        />
    </div>
  );
} */


//  Refactored
//---------------------
import { TopBar } from "./top-bar";
import { UserInput } from "./user-input";
import { Counter } from "./counter";

export function App() {
  return (
    <div className="app">
      <TopBar>React Components are state machines</TopBar>
      <h1 className="headline white-text">_ ^ _ Stateful Bookstore _ ^ _</h1>
      <Counter item="Book" initialValue={3}/>
      <Counter item="Customer" initialValue={12}/>
      <Counter item="Employee" initialValue={24}/>
      <br />
      <hr />
      <UserInput
          question="What is your name?"
          placeholder="Your name here..."
        />
    </div>
  );
}

