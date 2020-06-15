import React from "react";
import { 
    View,
    Text,
    StyleSheet,Button
} from "react-native";
function BrowseScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Browse Screen</Text>
        <Button
        title="Take Photo"
        onPress={() => navigation.navigate('TakePhoto')}
      />
      </View>
    );
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default BrowseScreen;