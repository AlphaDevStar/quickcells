import React, { useEffect } from "react";

export interface IDocumentTitle {
  title?: string;
}

export const DocumentTitle: React.FC<IDocumentTitle> = ({
  children,
  title,
}) => {
  useEffect(() => {
    title && (document.title = title);
  }, [title]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default DocumentTitle;
