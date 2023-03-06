import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/GithubContext";
import Repos from "./Repos";

const UserDetail = () => {
  const params = useParams();
  const { user, getUser, getUserRepos } = useContext(GithubContext);
  console.log(useContext(GithubContext));
  useEffect(() => {
    getUser(params.login);
    getUserRepos(params.login);
  }, []);

  console.log(user);
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-4">
          <div className="card">
            <img src={user.avatar_url} alt="" />
            <div className="card-body">
              <div className="card-title">
                <h2>{user.login}</h2>
                <p>
                  <i class="bi bi-geo-alt"></i>
                  {" " + user.location}
                </p>
                <a
                  href={user.html_url}
                  target="_blank"
                  className="btn btn-primary"
                >
                  Github Profile
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card-body">
              {user.bio && (
                <>
                  <h2>About</h2> <p>{user.bio}</p>
                </>
              )}
              {user.blog && (
                <>
                  <h2>Blog</h2> <p>{user.blog}</p>
                </>
              )}
              <span className="badge bg-primary rounded-pill mx-2">
                Followers:{user.followers}
              </span>
              <span className="badge bg-danger rounded-pill mx-2">
                Following:{user.following}
              </span>
              <span className="badge bg-success rounded-pill mx-2 p-1">
                Repostories:{user.public_repos}
              </span>
            </div>
          </div>
          <div className="card mt-5">
            <div className="card-header">
              <div className="card-title">
                <h2>Repositories</h2>
              </div>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <Repos />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
