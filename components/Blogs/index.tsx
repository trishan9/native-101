import { Fragment, useState } from "react";
import { Alert, Button, View } from "react-native";
import { useGetBlogs } from "../../hooks";
import { BlogItem, Loader } from "../../components";
import { TBlogProps } from "../../types";

const Blogs = ({ setIsModalVisible, setImageForModal }: TBlogProps) => {
  const [showBlog, setShowBlog] = useState(false);
  const { blogs, getBlogs, isLoading } = useGetBlogs();

  const handleBlogsVisibility = () => {
    if (blogs.length === 0) {
      getBlogs();
    }
    setShowBlog((prevState) => !prevState);
  };

  return (
    <Fragment>
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
        blogs.length > 0 &&
        blogs.map((blog) => (
          <BlogItem
            key={blog.id}
            blog={blog}
            setIsModalVisible={setIsModalVisible}
            setImageForModal={setImageForModal}
          />
        ))}
    </Fragment>
  );
};

export default Blogs;
