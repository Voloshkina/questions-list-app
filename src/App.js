import React from "react";
import QuestionsList from "../src/components/QuestionsList";
import questions from "./db/data";

function App() {
  return (
    <div>
      {localStorage.getItem("questions") ? (
        <QuestionsList
          questions={JSON.parse(localStorage.getItem("questions"))}
        />
      ) : (
        <QuestionsList questions={questions} />
      )}
    </div>
  );
}

export default App;
