export type TBlog = {
  id: number;
  imageUri: string;
  title: string;
  content: string;
};

type TBlogProps = {
  setIsModalVisible: (value: boolean) => void;
  setImageForModal: (value: string) => void;
};

export type TBlogItemProps = {
  blog: TBlog;
  setIsModalVisible: (value: boolean) => void;
  setImageForModal: (value: string) => void;
};

export type TImageModalProps = {
  imageForModal: string;
  isModalVisible: boolean;
  setIsModalVisible: (value: boolean) => void;
};

export type TLoaderProps = {
  isLoading: boolean;
};
