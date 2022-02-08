
const AuthReducer = (state, action) => {
  switch (action.type) {

//judge the state and do action accordingly
const AuthReducer = (state, action) => {

  switch (action.type) {
    //login 

    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };


    //login successfully

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };


    //login failed

    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };


    //follow a user

    case "FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: [...state.user.followings, action.payload],
        },
      };


    //unfollow a friend

    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: state.user.followings.filter(
            (following) => following !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default AuthReducer;
