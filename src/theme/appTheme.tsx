import { Dimensions, StyleSheet } from "react-native";


export const styles= StyleSheet.create({
    imageAP:{
    width: Dimensions.get('window').width * 0.9, // Ajusta el tamaño de la imagen
    height: Dimensions.get('window').width * 0.8 * 0.75, // Mantiene una relación de aspecto, ajusta según sea necesario
    resizeMode: 'contain',
    },
   
    imputText:{
       
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center'
    },
    contentInput:{
        marginTop:30,
        gap:10
    },
    button:{
        backgroundColor:'green',
        paddingVertical:10,
        borderRadius:10,
        marginTop:40,
        gap:10
    },
    buttonText:{
        color:'black',
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center'
    }
})