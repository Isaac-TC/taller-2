import React from 'react'
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { PRIMARY_COLOR } from '../common/constantsColor'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams,'Home'> { }

export const screen1 = ({navigation}:Props) => {
  return (
    <View>
      
      <Text style={styles.imputText}>Bienvenido</Text>
      
      <Image source={require('../../assets/Aplicaciones-Moviles.webp')} style={styles.imageAP}/>

      

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pantalla2')}>
        <Text style={styles.buttonText}>Acceder</Text>
      </TouchableOpacity>

    </View>

  )
}
