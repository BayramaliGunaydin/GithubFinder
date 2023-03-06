import { useContext, useEffect } from "react";
import GithubContext from "../context/GithubContext";

const Alert = ({ msg }) => {
  const { alert, setAlert } = useContext(GithubContext);

  useEffect(() => {
    setAlert(msg);
  }, []);

  return (
    alert != null && (
      <div className="alert alert-danger" role="alert">
        {alert}
      </div>
    )
  );
};

export default Alert;
