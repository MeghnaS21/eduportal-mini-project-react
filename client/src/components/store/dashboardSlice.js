const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        setDashboard(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDashboard.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchDashboard.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchDashboard.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});

export const { setDashboard, setStatus } = dashboardSlice.actions;
export default dashboardSlice.reducer;

// Thunks
export const fetchDashboard = createAsyncThunk('courses/fetch', async () => {
    const res = await fetch('http://localhost:4000/courses');
    const data = await res.json();
    return data;
});

// export function fetchDashbard() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setDashboard(data));
//             dispatch(setStatus(STATUSES.IDLE));
//         } catch (err) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     };
// }
