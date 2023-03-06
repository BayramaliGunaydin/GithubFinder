const GithubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };
    case "GET_USER_DETAIL":
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case "GET_USER_REPOS":
      return {
        ...state,
        repos: action.payload,
      };
    case "SEARCH_USER":
      return {
        ...state,
        alert:null,
        users: action.payload,
        loading: false,
      };
    case "SET_ALERT":
      return {
        ...state,
        alert: action.payload,
      };
    case "SEARCH_USER_ERROR":
      return{
        ...state,
        loading:false,
        alert:action.payload,
        users:[]
      }  
  }
};

export default GithubReducer;
