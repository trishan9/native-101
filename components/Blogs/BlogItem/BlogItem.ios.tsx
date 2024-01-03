import { Fragment } from "react";
import {
  Image,
  Pressable,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import styles from "./BlogItem.style";
import { TBlogItemProps } from "../../../types";

const BlogItem = ({
  blog,
  setIsModalVisible,
  setImageForModal,
}: TBlogItemProps) => {
  const windowWidth = useWindowDimensions().width;

  return (
    <Fragment>
      <Pressable
        onPress={() => {
          setIsModalVisible(true);
          setImageForModal(blog.imageUri);
        }}
        onLongPress={() => console.log("IOS: Long Pressed Image")}
      >
        <Image
          style={
            windowWidth > 400 ? styles.bannerImageLarger : styles.bannerImage
          }
          source={{ uri: blog.imageUri }}
        />
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
