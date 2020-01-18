import React from "react";

import { usePortal } from "hooks/usePortal";

import "./index.scss";

const Alert = () => {
  const render = usePortal();

  return render(<div className="alert">siema</div>);
};

export default Alert;
