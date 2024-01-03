import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bannerImage: {
    width: 600,
    height: 300,
  },

  bannerImageLarger: {
    width: 900,
    height: 300,
  },

  titleContainer: {
    paddingVertical: 40,
    paddingHorizontal: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  },

  tag: {
    fontWeight: "500",
    color: "#00ff00",
  },

  title: {
    fontFamily: Platform.OS === "android" && "serif",
    ...Platform.select({
      android: { fontSize: 28, textAlign: "center", fontWeight: "500" },
      ios: { fontSize: 28, textAlign: "center", fontWeight: "500" },
    }),
  },

  contentContainer: {
    marginBottom: 30,
  },

  content: {
    color: "#454545",
    fontWeight: "300",
    fontStyle: "italic",
    fontFamily: "serif",
  },
});

export default styles;
