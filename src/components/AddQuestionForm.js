function AddQuestionForm({ newQuestion, setNewQuestion, addQuestion }) {
  return (
    <div className="row mb-4">
      <div className="col">
        <input
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          className="form-control form-control-lg"
        ></input>
      </div>
      <div className="col-auto">
        <button onClick={addQuestion} className="btn btn-lg btn-success">
          Add question
        </button>
      </div>
    </div>
  );
}

export default AddQuestionForm;
