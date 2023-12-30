import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

const App = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>
            TRAVEL
          </Text>

          <Image style={styles.bannerImage} source={{ uri: "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=" }} />

          <View style={styles.titleContainer}>
            <Text style={styles.tag}>Tips & Articles</Text>

            <Text style={styles.title}>Perfect Provence: an eater's guide</Text>
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.content}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis minus porro libero impedit explicabo enim quod. Maiores ut, ducimus quam id eveniet non quia magni? Adipisci quae dolore accusamus? Et odio architecto accusantium saepe veritatis quis nisi, obcaecati vel beatae temporibus itaque numquam a in laboriosam commodi autem praesentium reprehenderit. Eos sit molestiae deserunt dolore dolores error, animi quo optio id nemo totam ratione iusto tempora ea quibusdam, non eum illum veritatis beatae fugit odio corporis? Officiis vero beatae temporibus ratione tempore at repellendus deleniti, quasi fuga alias provident expedita quo eaque. Rerum est recusandae explicabo minus iure quis cumque?
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 50,
    paddingHorizontal: 30,
  },

  heading: {
    fontWeight: "500",
    fontSize: 18,
    paddingVertical: 15,
  },

  bannerImage: {
    width: 600,
    height: 300
  },

  titleContainer: {
    paddingVertical: 40,
    paddingHorizontal: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2
  },

  tag: {
    fontWeight: "500",
    color: "#00ff00",
  },

  title: {
    fontFamily: "serif",
    fontSize: 28,
    textAlign: 'center',
    fontWeight: "500",
  },

  content: {
    color: "#454545",
    fontWeight: '300',
    fontStyle: 'italic',
    fontFamily: 'serif'
  }
})
