import { Text, View, StyleSheet } from "react-native"
import { OPENSANS_REGULAR } from "../../utils/consts";


const HomeScreen = () => {
    return (
        <View>
            <Text style={styles.primary}>Home Screen g</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    primary: {
        fontFamily: OPENSANS_REGULAR,
        fontSize: 30
    }
});


export default HomeScreen;