import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { withNavigation } from 'react-navigation';

class MyBackButton extends Component {
    render() {
            return <Button title="Back" onPress={() => { this.props.navigation.goBack() }} />;
    }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(MyBackButton);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
//Ref: https://reactnavigation.org/docs/2.x/connecting-navigation-prop/
