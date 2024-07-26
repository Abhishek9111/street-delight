import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
import {
  UserCircleIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <TopTabBar />
      <UserSearchBar />
    </ScrollView>
  );
}

function TopTabBar() {
  return (
    <View style={styles.headerBar}>
      <Text>Street food</Text>
      <UserCircleIcon />
    </View>
  );
}

function UserSearchBar() {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <MagnifyingGlassIcon style={styles.iconStyle} />
        <TextInput placeholder="Search" style={{ marginLeft: 6 }} />
      </View>
      {/* style={styles.input} */}
      {/* value={searchPhrase} */}
      {/* onChangeText={setSearchPhrase}
      onFocus=
      {() => {
        setClicked(true);
      }} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 4,
    backgroundColor: "white",
    flex: 1,
  },
  headerBar: {
    flexDirection: "row",
    backgroundColor: "#d1d5db",
    flex: 1,
    color: "black",
    minHeight: 50,
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
    marginBottom: 5,
  },
  searchContainer: {
    flexDirection: "row",
    flex: 1,
    marginHorizontal: 16,
    paddingLeft: 16,
    paddingRight: 16,
    borderColor: "black",
    color: "white",
    borderRadius: 8,
    borderWidth: 1,
  },
  iconStyle: {
    width: 20,
    height: 20,
    color: "black",
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
});
