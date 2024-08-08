import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { IMPUT_COLOR } from '../common/constantsColor'
import { styles } from '../theme/appTheme'

//interface - props
interface Props{
    placeholder: string;
    value:string;
    onChangeText:string;

}

export const ImputComponent = ({ placeholder,value,onChangeText}:Props) => {
  return (
    <TextInput
    placeholder={placeholder}
    keyboardType='numeric'
    value={value}
    
    
    
    style={styles.imputText}
    />
  )
}

