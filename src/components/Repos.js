import { useContext } from "react";
import GithubContext from "../context/GithubContext";

const Repos = () => {
  const { repos } = useContext(GithubContext);

  console.log(repos);

  return repos.map((repo) => (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <h5>{repo.name}</h5>
      <a href={repo.html_url} className="btn">
        <i class="bi bi-arrow-right-square-fill"></i>
      </a>
    </li>
  ));
};

export default Repos;
