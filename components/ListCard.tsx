import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { MapPinIcon } from "react-native-heroicons/outline";
import StarRating from "react-native-star-rating-widget";

const ListCard = ({ item }: { item: any }) => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.innerContainer}>
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/479629960/photo/poori-street-food-vendor-chennai-india.jpg?s=612x612&w=0&k=20&c=80rvMRSgsrczybOdjD6NErCEync49kW405QL6_HMEEU=",
          }}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.outletName} numberOfLines={2}>
            {item.outlet_name}
          </Text>
          <View style={styles.locationWrapper}>
            <MapPinIcon />
            <Text style={styles.outletLocation}>{item.location}</Text>
          </View>
          <View style={styles.outletRatingWrapper}>
            <Text style={styles.outletRating}>Ratings:</Text>
            <StarRating
              starSize={16}
              rating={item.rating}
              onChange={() => {}}
            />
          </View>
          <Text style={styles.outletBestSeller}>
            Bestsellers: {item.bestseller_food.join(", ")}
          </Text>
          {/* add a section showing last 3 reviews-> communicates to user that they can add review without less hussle */}
          {item.last_3_reviews.length ? (
            <Text style={styles.noReviewsYet}>loop down review</Text>
          ) : (
            <Text style={styles.noReviewsYet}>
              Oh! No reviews for the outlet yet, be the first one to review...
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};
// https://www.npmjs.com/package/react-native-star-rating-widget
const styles = StyleSheet.create({
  parentContainer: {
    maxWidth: Dimensions.get("window").width,
    borderColor: "black",
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  innerContainer: {
    maxWidth: Dimensions.get("window").width,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: "row",
  },
  image: {
    width: 150,
    height: 290,
    borderRadius: 8,
  },
  detailsContainer: {
    marginLeft: 10,
    flexDirection: "column",
    flex: 1,
  },
  outletName: {
    fontSize: 25,
    maxWidth: Dimensions.get("window").width,
    fontWeight: "semibold",
    color: "black",
    marginBottom: 8,
  },
  outletLocation: {
    fontSize: 18,
    flexWrap: "wrap",
    color: "black",
    marginLeft: 4,
    alignItems: "center",
    display: "flex",
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  outletRatingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  outletRating: {
    fontSize: 16,
    color: "black",
    paddingRight: 4,
    alignItems: "center",
    display: "flex",
  },
  outletBestSeller: {
    fontSize: 16,
    color: "black",
    alignItems: "center",
    display: "flex",
    marginBottom: 8,
  },
  noReviewsYet: {
    color: "#9ca3af",
    fontSize: 16,
  },
});

export default ListCard;
