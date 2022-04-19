import { StyleSheet, Text, View } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerText:{
    fontSize: 18, fontFamily: "RobotoMedium"
  },
  userImage:{
    width: 35, height: 35
  },
  searchInput:{
    flexDirection: "row",
    borderColor: "#C6C6C6",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  suggestView:{
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
export default styles;
