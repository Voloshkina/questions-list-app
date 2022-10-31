function UpdateQuestionForm({
  changeQuestion,
  updateQuestion,
  cancelUpdate,
  updateData,
}) {
  return (
    <div className="row mb-4">
      <div className="col">
        <input
          value={updateData && updateData.question}
          onChange={(e) => changeQuestion(e)}
          className="form-control form-control-lg"
        ></input>
      </div>
      <div className="col-auto">
        <button
          onClick={(e) => updateQuestion()}
          className="btn btn-lg mr-20 btn-success"
        >
          Update
        </button>
        <button onClick={cancelUpdate} className="btn btn-lg btn-warning">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default UpdateQuestionForm;
