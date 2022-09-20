const { createSlice } = require('@reduxjs/toolkit');

const myCourseSlice = createSlice({
    name: 'myCourse',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

export const { add, remove } = myCourseSlice.actions;
export default myCourseSlice.reducer;
