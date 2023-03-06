import { useContext } from "react";
import User from "./User";
import GithubContext from "../context/GithubContext";

const UserList = () => {
  const { loading } = useContext(GithubContext);
  return (
    <div className="container">
      <div className="row">
        {loading ? (
          <div className="text-center mt-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <User />
        )}
      </div>
    </div>
  );
};

export default UserList;
