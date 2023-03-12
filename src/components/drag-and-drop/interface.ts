import React from "react";

export interface DragAndDropInterface {
  className?: string;
  fileTypes?: string;
  placeholder?: string | React.ReactNode;
  value?: string;
  status: "success" | "error" | 'idle' | 'loading';
  resetStatusAction: () => void;
  showPreview?: boolean;
  onDrop?: (files: File[]) => void;
  onDragOver?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave?: (event: React.DragEvent<HTMLDivElement>) => void;
  [inputProps: string]: any;
}
