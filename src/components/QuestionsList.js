import { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";
import AddQuestionForm from "./AddQuestionForm";
import UpdateQuestionForm from "./UpdateQuestionForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function QuestionsList({ questions }) {
  const [data, setData] = useState(questions);
  const [newQuestion, setNewQuestion] = useState("");
  const [updateData, setUpdateData] = useState("");

  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(data));
  }, [data]);

  const addQuestion = () => {
    if (newQuestion) {
      let num = data.length + 1;
      let newData = {
        id: num,
        question: newQuestion,
        status: false,
      };
      setData([...data, newData]);
      setNewQuestion("");
    }
  };

  const deleteQuestion = (id) => {
    let newQuestion = data.filter((question) => question.id !== id);
    setData(newQuestion);
  };

  const markDone = (id) => {
    let newQuestion = data.map((question) => {
      if (question.id === id) {
        return { ...question, status: !question.status };
      }
      return question;
    });
    setData(newQuestion);
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  const changeQuestion = (e) => {
    let newData = {
      id: updateData.id,
      question: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newData);
  };

  const updateQuestion = () => {
    let filterRecords = [...data].filter(
      (question) => question.id !== updateData.id
    );
    let updateObj = [...filterRecords, updateData];
    setData(updateObj);
    setUpdateData("");
  };
  const activeQuestions = data.filter((question) => !question.status);
  const doneQuestions = data.filter((question) => question.status);

  return (
    <div className=" container App ">
      <h2 className="m-3">Questions list </h2>

      {updateData && updateData ? (
        <UpdateQuestionForm
          changeQuestion={changeQuestion}
          updateQuestion={updateQuestion}
          cancelUpdate={cancelUpdate}
          updateData={updateData}
        />
      ) : (
        <AddQuestionForm
          newQuestion={newQuestion}
          setNewQuestion={setNewQuestion}
          addQuestion={addQuestion}
        />
      )}

      {data && data.length ? "" : "No questions... "}

      <QuestionItem
        data={data}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteQuestion={deleteQuestion}
        activeQuestions={activeQuestions}
        doneQuestions={doneQuestions}
      />
    </div>
  );
}
export default QuestionsList;
