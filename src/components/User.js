import { useContext } from "react";
import GithubContext from "../context/GithubContext";
import { Link } from "react-router-dom";
import Alert from "./Alert";

const User = () => {
  const { users, setAlert ,alert} = useContext(GithubContext);
  console.log(alert);
  return alert !== null? (
    <div className="col-8 mx-auto g-3">
      <Alert msg={alert} />
    </div>
  ) : (
    users?.map((user, index) => (
      <div key={index} className="col-sm-6 col-md-4 col-lg-3 g-3">
        <div className="card">
          <img src={user.avatar_url} alt="" />
        </div>
        <div className="card-footer">
          <h5 className="card-title">{user.login}</h5>
          <p>Lorem ipsum dolor sit amet.</p>
          <Link to={"/user/" + user.login} className="btn btn-primary">
            See User Details
          </Link>
        </div>
      </div>
    ))
  );
};

export default User;
