import { createAsyncThunk } from "@reduxjs/toolkit";

const api_url = 'https://6704cf0aab8a8f892734e0bf.mockapi.io/thuc-hanh'; // URL API

// Lấy danh sách todos từ API
export const fetchTodos = createAsyncThunk(
    'todo/fetchTodos',
    async (_, thunkAPI) => {
        try {
            const response = await fetch(api_url);

            // Kiểm tra trạng thái phản hồi
            if (!response.ok) {
                const error = await response.json();
                console.error("Error fetching todos:", error);
                return thunkAPI.rejectWithValue(error);
            }

            // Xử lý dữ liệu trả về
            const data = await response.json();
            console.log("Fetched todos:", data);
            return data; // Trả về danh sách todos cho reducer
        } catch (error) {
            console.error("FetchTodos Exception:", error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// Xóa todo
export const deleteTodoApi = createAsyncThunk(
    'todo/deleteTodoApi',
    async (id, thunkAPI) => {
        try {
            const res = await fetch(`${api_url}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Kiểm tra trạng thái phản hồi
            if (!res.ok) {
                const err = await res.json();
                console.error("Error deleting todo:", err);
                return thunkAPI.rejectWithValue(err);
            }

            console.log("Deleted todo ID:", id);
            return id; // Trả về ID của todo đã xóa
        } catch (error) {
            console.error("DeleteTodo Exception:", error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
