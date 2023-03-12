import React, { useMemo, useState, useRef } from "react";
import { DragAndDropInterface } from "./interface";
import "./_drag-and-drop.scss";

//icon
import { ReactComponent as UploadingIcon } from "../../assets/icons/arrow-up-with-border.svg";
import { ReactComponent as SuccessIcon } from "../../assets/icons/check-with-border.svg";
import { ReactComponent as ErrorIcon } from "../../assets/icons/cancel-with-border.svg";
import ProgressBar from "../progress-bar/progress-bar";

function DragAndDrop(props: DragAndDropInterface) {
  const {
    placeholder,
    onDrop,
    className,
    status,
    resetStatusAction,
    fileTypes,
    setFileToUpload,
    value,
    showPreview = false,
    ...inputProps
  } = props;

  const [isUploading, setIsUploading] = useState(false);

  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState<any>({
    file: null,
    preview: "",
  });

  useMemo(() => {
    if (isUploading) {
      setProgress(0);
    }
  }, [isUploading]);

  useMemo(() => {
    if (progress >= 100 && isUploading) {
      setProgress(99);
      return;
    }
  }, [progress]);

  useMemo(() => {
    if (status === "success" || status === "error") {
      setIsUploading(false);
      if (resetStatusAction) {
        setTimeout(() => {
          resetStatusAction();
        }, 2000);
      }
    }
  }, [status]);

  const handleChange = (e: any) => {
    setFile({
      file: e.target.files[0],
      preview: URL.createObjectURL(e.target.files[0]),
    });
    setFileToUpload(e.target.files[0]);
    setIsUploading(!isUploading);

    let progressInterval = setInterval(() => {
      if (progress >= 100) clearInterval(progressInterval);
      setProgress((prevState) => prevState + 2);
    }, 100);
  };

  return (
    <div className={`drag-and-drop-container ${className ? className : ""}`}>
      <input
        type="file"
        data-testid="file-upload-input"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleChange(e);
        }}
        accept={fileTypes}
        {...inputProps}
      />

      <div
        className={`mask ${
          status === "success"
            ? "success-mask"
            : status === "error"
            ? "error-mask"
            : ""
        }`}
      >
        {status === "success" ? (
          <div className="file-uploading" data-testid="file-uploading-state">
            <span className="success-icon">
              <SuccessIcon />
            </span>

            <p className="file-name">File upload complete</p>
          </div>
        ) : status === "error" ? (
          <div className="file-uploading" data-testid="file-uploading-state">
            <span className="error-icon">
              <ErrorIcon />
            </span>

            <p className="file-name">Error Uploading</p>
          </div>
        ) : isUploading ? (
          <div className="file-uploading" data-testid="file-uploading-state">
            <span className="uploading-icon">
              <UploadingIcon />
            </span>

            <p className="progress-level">{progress}% Uploaded...</p>

            <div className="progress-indicator">
              <ProgressBar />
            </div>

            <p className="file-name">{file?.name}</p>
          </div>
        ) : file.preview && showPreview ? (
          <div className="uploaded-image">
            {file.preview && <img src={file.preview} alt="" />}
            <div>Click to update</div>
          </div>
        ) : (
          <div className="uploaded-image">
            <div>{placeholder}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DragAndDrop;
