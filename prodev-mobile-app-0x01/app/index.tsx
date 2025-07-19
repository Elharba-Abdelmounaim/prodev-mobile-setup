import { View, Text, StyleSheet } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <Text>entry Screen - Awesome</Text>

            <View>
                <Text style={styles.largeText}>
                    Typescript is great if you practice more
                </Text>

                <Text style={styles.mediumText}>
                    React Native provides you single code base
                    for cross platforms
                </Text>

                <Text style={styles.smallText}>ALX is Awesome</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#90caf9",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding:20,
    },

    largeText: {
        fontSize: 30,
        color: "#f44336",
        marginBottom: 5,
        fontWeight: "700",
        fontVariant: ["stylistic-eighteen"]
    },

    mediumText: {
        fontSize: 19,
        color: "#9c27b0",
        fontWeight: "600",
        marginBottom: 10,
        marginLeft : 50,
        textAlign: "right"
    },

    smallText:{
        fontSize: 15,
        textAlign: "center",
        color: "#2196f3",
        fontWeight: "400",
    },


})