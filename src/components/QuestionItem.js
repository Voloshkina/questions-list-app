import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

function QuestionItem({
  data,
  markDone,
  setUpdateData,
  deleteQuestion,
  doneQuestions,
  activeQuestions,
}) {
  return (
    <>
      {data &&
        [...activeQuestions, ...doneQuestions].map((question, index) => {
          return (
            <>
              <div className="col questionBg">
                <div className={question.status ? "done" : ""}>
                  <span className="questionNumber">{index + 1}</span>
                  <span className="questionText">{question.question}</span>
                </div>
                <div className="iconsWrap">
                  <span
                    onClick={(e) => markDone(question.id)}
                    title="Resolved / Unresolved"
                  >
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  {question.status ? null : (
                    <span
                      title="Edit"
                      onClick={() =>
                        setUpdateData({
                          id: question.id,
                          question: question.question,
                          status: question.status ? true : false,
                        })
                      }
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  )}
                  <span
                    onClick={() => deleteQuestion(question.id)}
                    title="Delete"
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
}

export default QuestionItem;
