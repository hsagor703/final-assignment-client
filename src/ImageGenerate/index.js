import axios from "axios";
export const imageUpload = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);
  const imageData = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_URL}`,
    formData
  );
  return imageData.data.data.display_url;
};
