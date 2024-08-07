import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'

interface Props{ 
    textButton: string;
}

export const ButonnComponent = ({textButton}: Props) => {
  return (
    <TouchableOpacity 
    style={styles.button}>
        <Text style={styles.buttonText}>{textButton}</Text>
    </TouchableOpacity>
  )
}
