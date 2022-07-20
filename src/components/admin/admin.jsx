import { useEffect } from "react";
import useStart from "../../hooks/useStart";
import Container from "../container/container";
import "./admin.scss";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import React, { useState } from "react";

function Admin() {
  const { tokenJson } = useStart();

  useEffect(() => {
    if (tokenJson) {
      localStorage.setItem("token", JSON.stringify(tokenJson));
      console.log(tokenJson);
    }
  }, [tokenJson]);

  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  console.log(fileList);

  const onPreview = async (file) => {
    let src = file.url;

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result);
      });
    }

    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
    console.log(image);
  };

  return (
    <Container>
      <div className="admin">
        <select>
          <option></option>
        </select>
        <ImgCrop rotate>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 5 && "+ Upload"}
          </Upload>
        </ImgCrop>
      </div>
    </Container>
  );
}

export default Admin;
