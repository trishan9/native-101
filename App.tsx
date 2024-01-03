import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styles from "./styles/App.style";
import { ImageModal } from "./components";
import Blogs from "./components/Blogs";

const queryClient = new QueryClient();

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imageForModal, setImageForModal] = useState(null);

  return (
    <SafeAreaView>
      <QueryClientProvider client={queryClient}>
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

            <Blogs
              setImageForModal={setImageForModal}
              setIsModalVisible={setIsModalVisible}
            />
          </View>
        </ScrollView>
      </QueryClientProvider>
    </SafeAreaView>
  );
};

export default App;
