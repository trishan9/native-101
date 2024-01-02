import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import styles from "./styles/App.style";
import { BlogItem, ImageModal, Loader } from "./components";
import BLOGS from "./constants/blogs";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imageForModal, setImageForModal] = useState(null);

  const handleBlogsVisibility = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowBlog((prevState) => !prevState);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <SafeAreaView>
      <StatusBar style="dark" backgroundColor="#1cff" />

      <ImageModal
        isModalVisible={isModalVisible}
        imageForModal={imageForModal}
        setIsModalVisible={setIsModalVisible}
      />

      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.heading}>BlogMandu</Text>
          </View>

          <View
            style={{
              marginVertical: 16,
              display: "flex",
              flexDirection: "row",
              gap: 16,
            }}
          >
            <Button
              title={showBlog ? "Hide Blogs" : "Show Blogs"}
              color="#1Cff"
              disabled={isLoading}
              onPress={handleBlogsVisibility}
            />

            <Button
              title="Alert"
              color="#1Cff"
              onPress={() =>
                Alert.alert("Invalid Data", "Your DOB is invalid!", [
                  {
                    text: "Report",
                    onPress: () => console.log("Report"),
                  },
                  {
                    text: "Go Back",
                    style: "cancel",
                    onPress: () => console.log("Go Back"),
                  },
                  {
                    text: "Ok",
                    onPress: () => console.log("Ok"),
                  },
                ])
              }
            />
          </View>

          <Loader isLoading={isLoading} />

          {showBlog &&
            !isLoading &&
            BLOGS.map((blog) => (
              <BlogItem
                key={blog.id}
                blog={blog}
                setIsModalVisible={setIsModalVisible}
                setImageForModal={setImageForModal}
              />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
