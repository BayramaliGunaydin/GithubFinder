import { useContext } from "react";
import GithubContext from "../context/GithubContext";

const Search = () => {
  const { getUsers, clearUsers, users, searchUser } = useContext(GithubContext);

  return (
    <div className="container mt-5">
      <div className="col-8 mx-auto">
        <form
          className="input-group"
          onSubmit={(e) => {
            e.preventDefault();
            searchUser(e.target.children[0].value);
          }}
        >
          <input type="text" className="form-control" />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
        {users.length > 0 ? (
          <button onClick={clearUsers} className="btn btn-dark w-100 mt-2">
            Clear Result
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Search;
