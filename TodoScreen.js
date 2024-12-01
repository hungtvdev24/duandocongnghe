import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo,toggleTodoStatus } from "../redux/reducers/todoReducer";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
const TodoScreen  =()=>{
    //1. Khai báo các state để thực hiện thêm
    const [title, setTitle] = useState('');
   
    //lấy  danh sách dữ liệu
    const  listTodo =  useSelector(state=>state.listTodoStore.listTodo);
    // chú ý: state.listTodo.listTodo  thì state.listTodo là cái ở trong store, còn listTodo cuối cùng là cái trong reducer
    // lấy đối tượng để điều khiển các action
    const dispatch = useDispatch();// của redux
    // hàm xử lý việc thêm
    const handleAddTodo = ()=>{
        let duLieuThem = { id: Math.random().toString(), title: title };
        dispatch( addTodo ( duLieuThem )  );
    }
     
    return (
         // nội dung return bạn xem trong ảnh dưới
         <View>
            <TextInput placeholder="Nhap ten viec" onChangeText={setTitle}>

            </TextInput>
            <View>
                {/* {Hien danh sach} */}
                {listTodo.map(row =>
                (
                    <View
                    key={row.id} style={{padding:10,margin: 10, backgroundColor:'cyan'}}> 
                        <Text>{row.title}== {row.id}</Text>
                    </View>
                )

                )}
            </View>
         </View>
    );
}
export default TodoScreen;
