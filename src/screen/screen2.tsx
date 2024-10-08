import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

import { ButonnComponent } from '../component/ButtonComponent'
import { ImputComponent } from '../component/ImputComponent'
import { styles } from '../theme/appTheme'

export const screen2 = () => {
  const [numerador, setNumerador] = useState('');
  const [denominador, setDenominador] = useState('');
  const [resultado, setResultado] = useState('');

  const dividir = () => {
    const num = parseFloat(numerador);
    const denom = parseFloat(denominador);

    if (denom === 0) {
      if (num === 0) {
        setResultado('INDETERMINACIÓN');
      } else {
        setResultado('NO EXISTE DIVISIÓN PARA CERO');
      }
    } else {
      setResultado((num / denom).toString());
    }
  };
  
  return (
    
    
      <View>
         <Text style={styles.titleBody}>Formulario</Text>
      <TextInput
      style={styles.input1}
        placeholder="Numero1"
        keyboardType="numeric"
        value={numerador}
        onChangeText={setNumerador}
      />
      <TextInput
        style={styles.input1}
        placeholder="Numero2"
        keyboardType="numeric"
        value={denominador}
        onChangeText={setDenominador}
      />
           {/* <ImputComponent placeholder='Campo número1'/>
            <ImputComponent placeholder='Campo número2'/>
            </View>*/}
        <View style={styles.imputdv}>
      <Button title ="Dividir" onPress={dividir} />
      <Text  style={styles.resultado}>{resultado}</Text>
      </View>
    </View>
  );
}

 
