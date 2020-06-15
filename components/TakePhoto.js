import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class TakePhoto extends Component {
    render() {
        const nav = this.props.navigation;
        return (
            <View style={styles.container}>
                <Button onPress={() => nav.push('EditPhotoDetail')} title="Photo Details"></Button>
                <View style={styles.container}>
                    <Text>Inner View</Text>
                </View>
            </View>
            
        );
    }
}
export default TakePhoto;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});