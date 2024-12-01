import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, deleteTodoApi } from "../redux/actions/todoAction"; // Import actions
import { Text, View, ActivityIndicator, Button } from "react-native";

const TodoScreen = () => {
    // Lấy trạng thái từ Redux Store
    const { listTodo, loading, error } = useSelector((state) => state.listTodoStore);

    // Lấy đối tượng dispatch
    const dispatch = useDispatch();

    // Hàm xóa todo
    const handleDeleteTodo = async (id) => {
        dispatch(deleteTodoApi(id))
            .unwrap()
            .then((res) => {
                console.log("Xóa thành công:", res);
            })
            .catch((e) => {
                console.error("Lỗi xóa:", e);
            });
    };

    // Gọi API lấy danh sách todos khi màn hình được render
    useEffect(() => {
        dispatch(fetchTodos())
            .unwrap()
            .then(() => console.log("FetchTodos thành công"))
            .catch((e) => console.error("FetchTodos Error:", e));
    }, [dispatch]);

    // Hiển thị giao diện
    return (
        <View style={{ padding: 20 }}>
            {loading && <ActivityIndicator size="large" color="blue" />}
            {error && <Text style={{ color: "red" }}>Lỗi: {error}</Text>}
            {!loading && listTodo.length === 0 && <Text>Không có công việc nào!</Text>}
            {listTodo &&
                listTodo.map((row) => (
                    <View
                        key={row.id}
                        style={{
                            marginVertical: 10,
                            padding: 10,
                            borderColor: "blue",
                            borderWidth: 1,
                            borderRadius: 5,
                        }}
                    >
                        <Text style={{ fontSize: 16 }}>{row.title}</Text>
                        <Button
                            title="Xóa"
                            color="red"
                            onPress={() => handleDeleteTodo(row.id)}
                        />
                    </View>
                ))}
        </View>
    );
};

export default TodoScreen;
