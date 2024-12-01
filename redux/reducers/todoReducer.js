import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos, deleteTodoApi } from "../actions/todoAction";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        listTodo: [], // Danh sách todos
        loading: false, // Trạng thái tải dữ liệu
        error: null, // Trạng thái lỗi
    },
    reducers: {
        // Công việc cục bộ
        addTodo(state, action) {
            state.listTodo.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            // Xử lý fetchTodos
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.listTodo = action.payload; // Cập nhật danh sách todos
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Lưu lỗi
                console.error("FetchTodos Error:", action.payload);
            })
            // Xử lý deleteTodoApi
            .addCase(deleteTodoApi.fulfilled, (state, action) => {
                state.listTodo = state.listTodo.filter(
                    (row) => row.id !== action.payload
                );
            })
            .addCase(deleteTodoApi.rejected, (state, action) => {
                console.error("DeleteTodo Error:", action.payload);
            });
    },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
