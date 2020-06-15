import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class EditPhotoDetail extends Component {
    render() {
        const nav = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Title</Text>
                <Text>Description</Text>
                <Button title="Submit"onPress={()=> nav.navigate('Browse')}></Button>

            </View>
        );
    }
}
export default EditPhotoDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});