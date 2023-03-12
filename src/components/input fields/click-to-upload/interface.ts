export interface DragAndDropInterface {
  fileTypes?: string[];
  placeholder?: string;
  onDrop?: (files: File[]) => void;
  onDragOver?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave?: (event: React.DragEvent<HTMLDivElement>) => void;

  [inputProps: string]: any;
}
