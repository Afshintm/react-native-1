import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button, 
    ScrollView,
    Image
} from "react-native";
function BrowseScreen({navigation}) {
  const images = [
    {src:'../assets/splash.png'},
    {src:'../assets/splash.png'},
    {src:'../assets/splash.png'},
    ];
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Browse Screen</Text>
        <Button
        title="Take Photo"
        onPress={() => navigation.navigate('TakePhoto')}/>
        <ScrollView style={styles.container}>
          {
            images.forEach((i)=>{
              console.log(i.src);
            })

          }
          
        </ScrollView>
        <Image src="../assets/splash.png"></Image>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxSmall: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  boxLarge: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
});

export default BrowseScreen;