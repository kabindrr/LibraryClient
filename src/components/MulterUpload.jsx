import { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
{
  /* todo: 
    1. Input field to upload images
    2. form-data
    3. add images to form-add(append)
    4. axios call to backend => send form-data as data */
}

const MulterUpload = () => {
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "my_images") {
      const img = Array.from(files);
      setImages({ ...images, [name]: img });
      return;
    }

    setImages({ ...images, [name]: value });
    // const { files } = e.target;
    // const img = Array.from(files);
    // setImages(img);
  };

  const handleImageSubmit = async (e) => {
    e.preventDefault();
    console.log(images);
    // 1. form-data
    // const myFormData = new FormData();

    // // 2. add (append) all the state value (form) to formData
    // [...images].forEach((item) => myFormData.append("images", item));

    // // 3. axios and send to server
    // try {
    //   const url = "http://localhost:8010/api/v1/image-upload";
    //   const { message, imageURL } = await axios(url, {
    //     method: "post",
    //     data: myFormData,
    //   });

    //   console.log(imageURL);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div
      className=" w-100 d-flex flex-column gap-8 justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <h1>MulterUpload</h1>

      <Form className="d-flex flex-column gap-4" onSubmit={handleImageSubmit}>
        <input
          type="file"
          name="my_images"
          multiple
          required
          accept="image/png, image/jpeg"
          onChange={handleChange}
        />
        <button type="submit">Submit Image</button>
      </Form>
    </div>
  );
};

export default MulterUpload;
