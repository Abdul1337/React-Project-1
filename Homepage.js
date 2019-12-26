import React, { Component } from "react";

import {
  Layout,
  Menu,
  Upload,
  Content,
  Countdown,
  Breadcrumb,
  Button
} from "antd";
import {
  Typography,
  Slider,
  message,
  Alert,
  Switch,
  Popconfirm,
  Icon
} from "antd";

const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

import "./Homepage.less";

export default class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Dragger>
      </div>
    );
  }
}
