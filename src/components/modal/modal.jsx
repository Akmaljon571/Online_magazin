import "./modal.scss";
import { Button, Form, Input, message, notification } from "antd";

import React, { useEffect, useRef, useState } from "react";
import useStart from "../../hooks/useStart";
import { useNavigate } from "react-router-dom";
import { SmileOutlined } from '@ant-design/icons';


function Modal() {
  const key = "updatable";
  const navigate = useNavigate()
  const { setTokenJosn, tokenJson, setTokenModal } = useStart();
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 8,
    },
  };
  const formTailLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 8,
      offset: 4,
    },
  };
  const [form] = Form.useForm();
  const [checkNick, setCheckNick] = useState(false);
  const ism = useRef();
  const password = useRef();
  useEffect(() => {
    form.validateFields(["nickname"]);
  }, [checkNick, form]);

  const onCheck = async () => {
    try {
      const values = await form.validateFields();

      if (values.username === "akmal571@gmail.com" && values.nickname === "12345678") {
        fetch("https://reqres.in/api/login", {
          method: "POST",
          body: JSON.stringify({
            email: "eve.holt@reqres.in",
            password: "cityslicka",
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => setTokenJosn(json));

          message.loading({
            content: 'Loading...',
            key,
          });
          setTimeout(() => {
            message.success({
              content: 'Loaded!',
              key,
              duration: 2,
            });
            setTokenModal(false);
            navigate('/')
          }, 1500);

 
      } else {
            notification.open({
              message: 'Malumotlaer xato',
              description:
                'Admin paneliga kirish uchun kiritgan malumotlaringiz togri kelmadi',
              icon: (
                <SmileOutlined
                  style={{
                    color: '#108ee9',
                  }}
                />
              ),
            });
            ism.current.input.value = ''
            password.current.input.value = ''
      }
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  
  return (
    <div className="modal">
      <div className="modal_ota">
        <Form form={form} name="dynamic_rule">
          <Form.Item
            {...formItemLayout}
            name="username"
            rules={[
              {
                required: true,
                message: "Faqat admin ismi",
              },
            ]}
          >
            <Input ref={ism} placeholder="Faqat Admin Uchun" />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            name="nickname"
            rules={[
              {
                required: checkNick,
                message: "Faqat Admin Uchun",
              },
            ]}
          >
            <Input ref={password} placeholder="Faqat Admin Uchun" />
          </Form.Item>
          <Form.Item {...formTailLayout}>
            <Button
              type="primary"
              style={{ backgroundColor: "#002329", borderRadius: 15 }}
              onClick={onCheck}
            
            >
              Admin
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Modal;
