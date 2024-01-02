import { Button, Image, Modal, View } from "react-native";
import styles from "./ImageModal.style";
import { TImageModalProps } from "../../types";

const ImageModal = ({
  imageForModal,
  isModalVisible,
  setIsModalVisible,
}: TImageModalProps) => {
  return (
    <Modal
      visible={isModalVisible}
      onRequestClose={() => setIsModalVisible(false)}
      presentationStyle="pageSheet"
      animationType="slide"
    >
      <View style={styles.modalBody}>
        <Image style={styles.modalImage} source={{ uri: imageForModal }} />

        <Button title="Close Modal" onPress={() => setIsModalVisible(false)} />
      </View>
    </Modal>
  );
};

export default ImageModal;
