import React, { useState } from "react";
import { DragAndDropInterface } from "./interface";
import Input from "../input/input";
import "./_click-to-upload.scss";

function ClickToUpload(props: DragAndDropInterface) {
  const { placeholder, errorMessage, onChange, ...inputProps } = props;
  const [fileName, setFileName] = useState("");

  return (
    <div className="click-to-upload-container">
      <Input
        type="file"
        data-placeholder={fileName ? fileName : placeholder}
        {...inputProps}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFileName(e.target.value);
          onChange(e);
        }}
      />
      {errorMessage && <label className="error-message">{errorMessage}</label>}
    </div>
  );
}

export default ClickToUpload;
