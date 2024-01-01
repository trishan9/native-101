import { Fragment } from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "../styles/App.style";
import { TBlogItemProps } from "../types";

const BlogItem = ({
  blog,
  setIsModalVisible,
  setImageForModal,
}: TBlogItemProps) => {
  return (
    <Fragment>
      <Pressable
        onPress={() => {
          setIsModalVisible(true);
          setImageForModal(blog.imageUri);
        }}
        onLongPress={() => console.log("Long Pressed Image")}
      >
        <Image style={styles.bannerImage} source={{ uri: blog.imageUri }} />
      </Pressable>

      <View style={styles.titleContainer}>
        <Text style={styles.tag}>Tips & Articles</Text>

        <Text style={styles.title}>{blog.title}</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.content}>{blog.content}</Text>
      </View>
    </Fragment>
  );
};

export default BlogItem;
