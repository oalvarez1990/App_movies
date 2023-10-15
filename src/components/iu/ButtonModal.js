import React from "react";

export default function ButtonModal({ title = "" }) {
  return (
    <button
      type="button"
      className="btn btn-outline-primary d-block m-auto mt-3"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      data-bs-whatever="@mdo"
    >
      {title}
    </button>
  );
}
