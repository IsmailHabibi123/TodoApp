import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);
  const OnsubmiteditTodo = async (e) => {
    try {
      e.preventDefault();
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.td_id}`,
        {
          method: "PUT",
          headers: { "Content-Type" : "application/json" },
          body: JSON.stringify(body),
        },
      );
    } catch (error) {
      console.error(error);
    }
    window.location = "/";
  };


  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.td_id}`}
      >
        Edit
      </button>

      <div class="modal" id={`id${todo.td_id}`}
        onClick={() => setDescription(todo.description)}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              ></button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                class="form-control"
                placeholder="Edit todo..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
                onClick={(e) => OnsubmiteditTodo(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
