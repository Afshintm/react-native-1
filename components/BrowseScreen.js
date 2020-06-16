import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button, 
    ScrollView,
    Image,
    SafeAreaView, 
    FlatList
} from "react-native";
import Constants from 'expo-constants';



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
function BrowseScreen({navigation}) {
  const images = [
    {src:'../assets/splash.png'},
    {src:'../assets/splash.png'},
    {src:'../assets/splash.png'},
    ];
    return (
      <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        numColumns={2}
        
      />
      </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
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
  tinyLogo: {
    width: 100,
    height: 100,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 32,
  },
});

export default BrowseScreen;