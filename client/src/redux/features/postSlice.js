import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk("users/getPost", async ({ id }) => {
    return fetch(`http://localhost:3000/users/${id}`).then((res) =>
        res.json()
    );
});

export const deletePost = createAsyncThunk(
    "post/deletePost",
    async ({ id }) => {
        return fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE",
        }).then((res) => res.json());
    }
);


export const createPost = createAsyncThunk(
    "post/createPost",
    async ({ values }) => {
        return fetch(`http://localhost:3000/users/`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                firstName: values.firstName,
                lastName: values.lastName,
                age: values.age
            }),
        }).then((res) => res.json());
    }
);


export const updatePost = createAsyncThunk(
    "post/updatePost",
    async ({ id, firstName, lastName, age }) => {
        return fetch(`http://localhost:3000/users/${id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                firstName,
                lastName,
                age
            }),
        }).then((res) => res.json());
    }
);



const postSlice = createSlice({
    name: "post",
    initialState:{
        post: [],
        loading: false,
        error: null,
        body: "",
        edit: false,
    },

    reducers: {
        setEdit: (state, action) => {
          state.edit = action.payload.edit;
          state.body = action.payload.body;
        },
      },

      extraReducers: {
        [getPost.pending]: (state, action) => {
          state.loading = true;
        },
        [getPost.fulfilled]: (state, action) => {
          state.loading = false;
          state.post = [action.payload];
        },
        [getPost.rejected]: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        [deletePost.pending]: (state, action) => {
          state.loading = true;
        },
        [deletePost.fulfilled]: (state, action) => {
          state.loading = false;
          state.post = action.payload;
        },
        [deletePost.rejected]: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        [createPost.pending]: (state, action) => {
          state.loading = true;
        },
        [createPost.fulfilled]: (state, action) => {
          state.loading = false;
          state.post = [action.payload];
        },
        [createPost.rejected]: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        [updatePost.pending]: (state, action) => {
          state.loading = true;
        },
        [updatePost.fulfilled]: (state, action) => {
          state.loading = false;
          state.post = [action.payload];
        },
        [updatePost.rejected]: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
      },
})

export const { setEdit } = postSlice.actions;

export default postSlice.reducer;