import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'


const DemoTextInput = (props) => {
 return (
   <View style={st.khung}>
     <Text style={st.label}>{props.label}</Text>
     <TextInput
       style={[st.input  , props.style]}
       {...props}
       placeholderTextColor={props.placeholderTextColor || '#000fff'}
     />
   </View>
 )
}
export default DemoTextInput


const st = StyleSheet.create({
   khung: {backgroundColor: 'cyan', margin:10},
   label:{ fontWeight:'bold', fontSize: 20, color:'blue'},
   input: { borderColor:'pink', borderWidth: 2}
})
