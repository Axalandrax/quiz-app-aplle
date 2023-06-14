import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import { SafeAreaView } from 'react-native-web';

const largura = Dimensions.get('window').width;

export default function App() {

    function botão2(){
        alert('c é burro?!')
    }

    function botão1(){
      alert('é muito qi!')
  }
    
  return (
    <SafeAreaView style={styles.container}>

  <View style={{marginTop:'50px'}}>
      <View>
        <Image style={{width :largura/1.5, height:largura/1.5}} source={{uri:'https://www.macworld.com/wp-content/uploads/2023/03/apple_march_2022_event_confirmed.jpg?resize=1200%2C675&quality=50&strip=all'}}/>
      </View>
      <View style={{background:'black',borderRadius:'5px',width : largura/1.5}}>
        <Text style={{textAlign: 'center',fontSize: 50,width :largura/1.5,color:'white'}}>iOS{'\n'}</Text>
        <Text style={{color:'white',textAlign: 'center'}}>
          Apple foi fundada em 1976?</Text>
        
    <View>
       <Text style={styles.texto}>
            verdadeiro
       </Text>
        <Button style={{color:'black'}} title='verdadeiro' color='#212A3E' accessibilitylabel='botão OK' onPress={botão1}></Button>
          <Text>{'\n'}[]
          
          </Text>
    </View>

    <View>
      <Text style={styles.texto}>
        falso
      </Text>
        <Button title='falso' color='#212A3E' accessibilitylabel='botão OK' onPress={botão2}></Button>
        <Text>{'\n'}</Text>
    </View>
    </View>
  </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    width:largura/2,
    margin: '5%',
    color:'white',
    fontSize: '200%'
  }
});
