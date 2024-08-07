import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { IMPUT_COLOR } from '../common/constantsColor'
import { styles } from '../theme/appTheme'

//interface - props
interface Props{
    placeholder: string;
    numerador:string;
    setNumerador: string;

}

export const ImputComponent = ({ placeholder,numerador, setNumerador}:Props) => {
  return (
    <TextInput
    placeholder={placeholder}
    keyboardType='numeric'
    value={numerador}
    
    
    style={styles.imputText}
    />
  )
}

