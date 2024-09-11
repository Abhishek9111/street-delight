import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import ListCard from "@/components/ListCard";
import {
  UserCircleIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
export default function HomeScreen() {
  const restaurantData = [
    {
      image_url: "https://example.com/images/restaurant1.jpg",
      outlet_name: "Punjabi Dhaba",
      location: "Chandni Chowk",
      rating: 4.5,
      bestseller_food: ["Butter Chicken", "Paneer Tikka", "Lassi"],
      last_3_reviews: [
        {
          user: {
            firstName: "Test",
            surname: "Random",
          },
          rating: "The food was delicious, loved it!!",
        },
        {
          user: {
            firstName: "Not",
            surname: "Good",
          },
          rating: "The food was stale, didn't enjoy it",
        },
      ],
    },
    {
      image_url: "https://example.com/images/restaurant2.jpg",
      outlet_name: "Delhi Chaat House",
      location: "Karol Bagh",
      rating: 4.3,
      bestseller_food: ["Gol Gappe", "Aloo Tikki", "Dahi Bhalla"],
      last_3_reviews: [],
    },
    {
      image_url: "https://example.com/images/restaurant3.jpg",
      outlet_name: "Amritsari Kulcha Corner",
      location: "Connaught Place",
      rating: 4.7,
      bestseller_food: ["Amritsari Kulcha", "Chole Bhature", "Lassi"],
      last_3_reviews: [],
    },
    {
      image_url: "https://example.com/images/restaurant4.jpg",
      outlet_name: "Biryani Junction",
      location: "Lajpat Nagar",
      rating: 4.4,
      bestseller_food: ["Hyderabadi Biryani", "Chicken 65", "Raita"],
      last_3_reviews: [],
    },
    {
      image_url: "https://example.com/images/restaurant5.jpg",
      outlet_name: "Paratha Wali Gali",
      location: "Chandni Chowk",
      rating: 4.6,
      bestseller_food: ["Aloo Paratha", "Gobhi Paratha", "Mooli Paratha"],
      last_3_reviews: [],
    },
    {
      image_url: "https://example.com/images/restaurant6.jpg",
      outlet_name: "Kake Da Hotel",
      location: "Connaught Place",
      rating: 4.5,
      bestseller_food: ["Kadhai Paneer", "Dal Makhani", "Tandoori Roti"],
      last_3_reviews: [],
    },
    {
      image_url: "https://example.com/images/restaurant7.jpg",
      outlet_name: "Chawla's Tandoori Junction",
      location: "Rajouri Garden",
      rating: 4.2,
      bestseller_food: ["Tandoori Chicken", "Malai Tikka", "Seekh Kebab"],
      last_3_reviews: [],
    },
    {
      image_url: "https://example.com/images/restaurant8.jpg",
      outlet_name: "Pind Balluchi",
      location: "South Extension",
      rating: 4.4,
      bestseller_food: ["Sarson Da Saag", "Makki Di Roti", "Amritsari Fish"],
      last_3_reviews: [],
    },
    {
      image_url: "https://example.com/images/restaurant9.jpg",
      outlet_name: "Rajinder Da Dhaba",
      location: "Safdarjung Enclave",
      rating: 4.5,
      bestseller_food: ["Galouti Kebab", "Mutton Curry", "Butter Naan"],
      last_3_reviews: [],
    },
    {
      image_url: "https://example.com/images/restaurant10.jpg",
      outlet_name: "Sitaram Diwan Chand",
      location: "Paharganj",
      rating: 4.6,
      bestseller_food: ["Chole Bhature", "Chole Kulche", "Gulab Jamun"],
      last_3_reviews: [],
    },
  ];

  return (
    <View style={styles.container}>
      <TopTabBar />
      <UserSearchBar />
      {/* <FlatList
        data={restaurantData}
        renderItem={({ item }) => <ListCard item={item} />}
        keyExtractor={(item) => item.outlet_name}
      /> */}
    </View>
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
    color: "black",
    height: 50,
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
    marginBottom: 5,
  },
  searchContainer: {
    flexDirection: "row",
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
