// start login
export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

// login success
export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

// login failure
export const LoginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error
});

// follow a person 
export const Follow = (userId) => ({
  type: "FOLLOW",
  payload: userId,
});

// withdraw follow a person 
export const Unfollow = (userId) => ({
  type: "UNFOLLOW",
  payload: userId,
});
