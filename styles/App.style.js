import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 50,
        paddingHorizontal: 30,
    },

    heading: {
        fontWeight: "500",
        fontSize: 18,
        paddingVertical: 15,
    },

    bannerImage: {
        width: 600,
        height: 300
    },

    titleContainer: {
        paddingVertical: 40,
        paddingHorizontal: 30,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2
    },

    tag: {
        fontWeight: "500",
        color: "#00ff00",
    },

    title: {
        fontFamily: "serif",
        fontSize: 28,
        textAlign: 'center',
        fontWeight: "500",
    },

    contentContainer: {
        marginBottom: 30
    },

    content: {
        color: "#454545",
        fontWeight: '300',
        fontStyle: 'italic',
        fontFamily: 'serif'
    }
})

export default styles