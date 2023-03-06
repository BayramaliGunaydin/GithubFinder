import GithubReducer from "./GithubReducer";
import GithubContext from "./GithubContext";
import { useReducer } from "react";

const GithubState = (props) => {
  const initialState = {
    users: [],
    loding: false,
    user: {},
    repos: [],
    alert: null,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const getUsers = () => {
    dispatch({
      type: "LOADING",
    });
    setTimeout(() => {
      fetch(`https://api.github.com/users`)
        .then((res) => res.json())
        .then((res) =>
          dispatch({
            type: "GET_USERS",
            payload: res,
          })
        );
    }, 1000);
  };

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  const getUser = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return dispatch({
          type: "GET_USER_DETAIL",
          payload: res,
        });
      });
  };

  const getUserRepos = (username) => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: "GET_USER_REPOS",
          payload: res,
        });
      });
  };

  const searchUser = (keyword) => {
    if (keyword === "") {
      getUsers();
    } else {
      dispatch({
        type: "LOADING",
      });
      setTimeout(() => {
        fetch(`https://api.github.com/search/users?q=${keyword}`)
          .then((res) => res.json())
          .then((res) =>{
            console.log(res.items.length)
            if(res.items.length===0){
              dispatch({
                          type: "SEARCH_USER_ERROR",
                          payload: "Aradığınız kriterde kullanıcı bulunamadı",
                        })
          }else{
            dispatch({
              type: "SEARCH_USER",
              payload: res.items,
            })
          }
        }    
          )
      }, 1000);
    }
  };

  const setAlert = (keyword) => {
    dispatch({
      type: "SET_ALERT",
      payload: keyword,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        alert: state.alert,
        getUsers,
        clearUsers,
        getUser,
        getUserRepos,
        searchUser,
        setAlert,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
