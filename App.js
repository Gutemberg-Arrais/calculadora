/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, ImageBackground, TouchableOpacity} from 'react-native';
import Display from './components/Display';
import Buttons from './components/Buttons';

let states = {
  valueScreen: '',
  result: 0,
  operation: false,
  point: false
};

export default function App() {
    
  const [value, setValue] = useState(states.valueScreen);
  const [vRes, setVres] = useState(states.result);

  const AddNum = (n) => {
    if ( (n === '+' || n === '-' || n === '*' || n === '/') ) {
      states.point = false;
    }
    if (n === '.' && !states.point ) {
      states.point = true;
      states.operation = false;
    } 
    if(n === '.' && states.point ) {
      return;
    }

    if ( (n === '+' || n === '-' || n === '*' || n === '/') && states.operation ) {
      states.valueScreen = states.result;
      states.result = 0;
    }
    states.valueScreen = states.valueScreen + n;
    setValue(states.valueScreen);
    setVres(states.result);
    states.operation = false;
  }

  const clearScreen = () => {
    states = {
      valueScreen: '',
      result: 0,
      operation: false,
      point: false
    };
    setValue(states.valueScreen);
    setVres(states.result);
  }

  const operation = (d) => {
    if ( d === 'AC' ) {
      clearScreen();
      return;
    }
    if ( d === 'BS' ) {
      states.valueScreen = value.substring(0, (value.length - 1));
      setValue(states.valueScreen);
      return;
    }

    try {
      states.result = eval(states.valueScreen);
      states.operation = true;
      setVres(states.result);
    } catch {
      states.result = 'Erro';
      states.operation = true;
      setVres(states.result);
    }

  }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={{textAlign: 'center', fontSize: 20, paddingTop: 10 }} > Calculadora</Text>

        <Display value={value} result={vRes} />   

        <View style={styles.btns} >
          <Buttons buttons={"AC"} onChange={()=>operation('AC')} />
          <Buttons buttons={"("} onChange={()=>AddNum('(')} />
          <Buttons buttons={")"} onChange={()=>AddNum(')')} />
          <Buttons buttons={"/"} onChange={()=>AddNum('/')} />
          <Buttons buttons={"7"} onChange={()=>AddNum('7')} />
          <Buttons buttons={"8"} onChange={()=>AddNum('8')} />
          <Buttons buttons={"9"} onChange={()=>AddNum('9')} />
          <Buttons buttons={"*"} onChange={()=>AddNum('*')} />
          <Buttons buttons={"4"} onChange={()=>AddNum('4')} />
          <Buttons buttons={"5"} onChange={()=>AddNum('5')} />
          <Buttons buttons={"6"} onChange={()=>AddNum('6')} />
          <Buttons buttons={"-"} onChange={()=>AddNum('-')} />
          <Buttons buttons={"1"} onChange={()=>AddNum('1')} />
          <Buttons buttons={"2"} onChange={()=>AddNum('2')} />
          <Buttons buttons={"3"} onChange={()=>AddNum('3')} />
          <Buttons buttons={"+"} onChange={()=>AddNum('+')} />
          <Buttons buttons={"0"} onChange={()=>AddNum('0')} />
          <Buttons buttons={"."} onChange={()=>AddNum('.')} />
          <Buttons buttons={"⌫"} onChange={()=>{operation('BS')}} />
          <Buttons buttons={"="} onChange={()=>{operation('=')}} />
        </View>       

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btns: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
