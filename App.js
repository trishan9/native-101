import { Fragment } from "react"
import { Image, ScrollView, Text, View } from "react-native"
import styles from "./styles/App.style"
import BLOGS from "./constants/blogs"

const App = () => {
  return (
    <View>
      <ScrollView>
        <View className="flex-1 flex-col items-center justify-center py-[50px] px-[30px]">
          <View>
            <Text className="font-medium text-lg py-[15px]">
              BlogMandu
            </Text>
          </View>

          {BLOGS.map((blog) => (
            <Fragment key={blog.id}>
              <Image className="w-[600px] h-[300px]" source={{ uri: blog.imageUri }} />

              <View className="py-[40px] px-[30px] flex flex-col items-center gap-[2px]">
                <Text className="font-medium text-[#00ff00]">Tips & Articles</Text>

                <Text style={styles.serif} className="text-center font-medium text-3xl">{blog.title}</Text>
              </View>

              <View className="mb-[30px]">
                <Text style={styles.serif} className="text-[#454545] font-light italic">
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