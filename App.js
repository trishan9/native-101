import { Fragment } from "react"
import { Image, ScrollView, Text, View } from "react-native"
import styles from "./styles/App.style"
import BLOGS from "./constants/blogs"

const App = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.heading}>
              BlogMandu
            </Text>
          </View>

          {BLOGS.map((blog) => (
            <Fragment key={blog.id}>
              <Image style={styles.bannerImage} source={{ uri: blog.imageUri }} />

              <View style={styles.titleContainer}>
                <Text style={styles.tag}>Tips & Articles</Text>

                <Text style={styles.title}>{blog.title}</Text>
              </View>

              <View style={styles.contentContainer}>
                <Text style={styles.content}>
                  {blog.content}
                </Text>
              </View>
            </Fragment>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default App