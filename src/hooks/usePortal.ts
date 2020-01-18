import { useEffect, useMemo, ReactNode } from "react";
import { createPortal } from "react-dom";

export const usePortal = (id = "root-modal") => {
  const el = useMemo(() => {
    const div = document.createElement("div");
    div.id = id;

    return div;
  }, []);

  useEffect(() => {
    document.body.appendChild(el);

    return () => {
      document.body.removeChild(el);
    };
  }, []);

  return (children: ReactNode) => createPortal(children, el);
};
