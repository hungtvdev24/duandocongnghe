import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
/**
* title: Tiêu đề cho section
* children: Các thẻ con được bao chứa bởi thẻ DemoSection,
* VD: <DemoSection>  <Abc>...</Abc> </DemoSection>
* @param title, children, style
* @returns
*/
const DemoSection = ({title, children, style}) => {
 return (
   <View style={[st.khungBao, style]}>
       {/* Nếu có truyền tiêu đề thì hiển thị, không truyền thi thôi */}
       {
           title && <Text style={st.tieuDe}>{title}</Text>
       }
       <View style={st.noiDung}>
           {children}
       </View>
   </View>
 )
}
export default DemoSection
const st = StyleSheet.create({
   khungBao:{ padding: 15, backgroundColor:'#eee', borderRadius: 5,
           shadowOpacity: 0.1,shadowRadius: 10, elevation: 5
   },
   tieuDe: {fontSize: 20, fontWeight: 'bold', color:'blue', marginBottom: 10},
   noiDung: {marginBottom: 20}


})