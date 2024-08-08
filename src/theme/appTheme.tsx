import { Dimensions, StyleSheet } from "react-native";
import { COLO_PANTALLA, IMPUT_COLOR, SECUNDARY_COLOR } from "../common/constantsColor";


export const styles= StyleSheet.create({

    container:{
        flex: 1, // Ocupa toda la pantalla
        justifyContent: 'center', // Centra verticalmente
        alignItems: 'center', // Centra horizontalmente

       
    },
    image: {
       
        width: Dimensions.get('window').width * 0.9, // Ajusta el tamaño de la imagen
        height: Dimensions.get('window').width * 0.9 * 0.90, // Mantiene una relación de aspecto, ajusta según sea necesario
        resizeMode: 'contain', // Ajusta la imagen dentro del contenedor sin distorsionarla
      },

    
    
   
    contentInput:{
        marginTop:30,
        gap:10,
        width:200,
        height:50,
        borderRadius:20
    },

    button:{
        
        fontSize: 100,
        backgroundColor: 'orange',
        borderRadius: 10,
        justifyContent: "center",
        borderColor: 'black'
    },
    buttonText:{//boton acceder
        justifyContent:'center',
        //alignSelf:'center',
        borderRadius:15,
        borderColor:'black',
        borderWidth:2,
        backgroundColor:'#CBD3D2',
        color:'black',
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center'
    
    },
    titleBody:{//titulo bienvenidos

        fontSize:40,
        fontWeight:'bold',
        color:'black',
        textAlign:'center',
        justifyContent:'center',
        textAlignVertical:'center',
        marginBottom:80,
        marginTop:'20%'

    },
    imputText:{
        backgroundColor:IMPUT_COLOR,
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10 
     },
     contentBody: {
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        paddingTop: 40
    },
    input1: { //ingreso de numeros 
        height: 40,
        
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 16,
        width: '80%',
        paddingHorizontal: 8,
        justifyContent:'center',
        backgroundColor:'white',
        alignSelf:'center',
        alignContent:'center',
        marginTop:15
      },
      input2: { //ingreso de numeros 
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 16,
        width: '80%',
        paddingHorizontal: 8,
      },
      resultado: {//resultado 
        fontSize:17,
        height: 40,
        marginTop:'10%',
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color:'white',
        textAlign:'center',
        justifyContent:'center'
        
        
      },
      imputdv: {
        marginTop:'5%',
        width:200,
        height:50,
        alignSelf:'center',
        fontSize:30,


      }

})