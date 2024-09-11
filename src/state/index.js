import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  user: null,
  token: null,
  posts: [],
};
/*
Reducers are functions that modify the global state.
Recall under the hood, with redux you typiclaly overwrite the whole state
Below it looks like we are modifying, but under the hood with toolkit and immer
its actually being overwritten. 

action is payload aka arguements for the function
*/
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      //console.log("setLogin state: " , state)
      //console.log("setLogin action: " , action)
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
      state.posts = [];
    },
    setFriends: (state, action) => {
        //if user exists, set the friends list inside state
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      //console.log("state is being manipulated setPosts(). state: ", state, " action: ", action );
      //response.sort((a, b) => b.age - a.age)
      let unsortedPosts = action.payload.posts; // array of objects:  [{}, {}]
      state.posts = unsortedPosts.reverse()
      //state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;