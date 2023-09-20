import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function HomePage({ navigation }) {
  const [dataLoading, finishLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2023-08-20&sortBy=publishedAt&apiKey=7e885e4455894ede9284366da3805fd5",
    )
      .then((response) => response.json())
      .then((data) => setNewsData(data.articles))
      .catch((error) => console.log(error))
      .finally(() => finishLoading(true));
  }, []);

  const storyItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("news details", { url: item.url })}
      >
        <View>
          <Text>{item.title}</Text>
          <Image source={{ uri: item.urlToImage }} />
          <Text>{item.description}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <View style={styles}>
      {dataLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={newsData}
          renderItem={storyItem}
          keyExtractor={(item) => item.url}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
