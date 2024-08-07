import React from 'react'
import { Image, ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { PRIMARY_COLOR } from '../common/constantsColor'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/StackNavigator'
import { ButonnComponent } from '../component/ButtonComponent'


interface Props extends StackScreenProps<RootStackParams,'Home'> { }

export const screen1 = ({navigation}:Props) => {
  return (
    <View>
      
      
      <Text style={styles.titleBody}>Bienvenido</Text>
      
  
      <Image source={require('../../assets/app.webp')} style={styles.image}/>
     
      
      



      <TouchableOpacity style={styles.contentInput} onPress={() => navigation.navigate('Screen2')}>
        <Text style={styles.buttonText}>Acceder</Text>
      </TouchableOpacity>

    </View>

  )
}
