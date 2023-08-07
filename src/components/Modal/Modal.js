import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./modal.scss";
import Input from "../Input/Input";

const Modal = ({ click }) => {
  if (click === false) return;

  return (
    <div className="modal backdrop">
      <div className="title-container">
        <div className="title">Create new assessment</div>
        <div className="icon-container">
          <CloseIcon className="icon" />
        </div>
      </div>

      <div className="form-container">
        <div>
          <Input label={"Name of assessment"} placeholder={"Type Here"} />
        </div>

        <div>
          <Input
            label={"Purpose of the test is"}
            placeholder={"Select"}
            select={true}
          />
        </div>
        <div>
          <Input label={"Description"} select={true} />
        </div>
        <div>
          <Input label={"Skills"} placeholder={"Type Here"} />
        </div>
        <div>
          <Input
            label={"Duration of the assessment"}
            placeholder={`HH:MM:SS`}
          />
        </div>
      </div>
      <div className="btn-container">
        <button>Save</button>
      </div>
    </div>
  );
};

export default Modal;
