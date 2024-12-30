import React, { useEffect, useState } from "react";

const INITIAL_STATE = {
  email: "",
  name: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  //   console.log(process.env.GATSBY_FORM_API);
  // const [state, handleSubmit] = useForm(
  //   process.env.GATSBY_FORM_API ? process.env.GATSBY_FORM_API : "123"
  // );
  // const [form] = Form.useForm();
  const [form, setForm] = useState(INITIAL_STATE);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (showSuccess === true) {
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

      return;
    }
  }, [showSuccess]);

  const formReset = () => {
    setForm(() => ({ ...INITIAL_STATE }));
  };

  const submit = async () => {
    // await handleSubmit(e).then((res) => {
    //   console.log(res);
    //   if (res.response.status === 200) {
    //     setShowSuccess(true);
    //     formReset();
    //   }
    // });
  };

  if (showSuccess)
    return (
      // <Result status="success" title="Your Message Was Sent Successfully" />
      <></>
    );
  else
    return (
      // <Form
      //   onFinish={submit}
      //   name="contact-form"
      //   form={form}
      //   layout="vertical"
      //   labelCol={{ span: 8 }}
      // >
      //   <Form.Item
      //     label="Email"
      //     name="email"
      //     rules={[{ required: true, message: "Valid email is required" }]}
      //   >
      //     <Input
      //       className="contact__form_input"
      //       type="email"
      //       placeholder="Email"
      //     />
      //   </Form.Item>
      //   <Form.Item
      //     label="Name"
      //     name="name"
      //     rules={[{ required: true, message: "A name is required" }]}
      //   >
      //     <Input className="contact__form_input" placeholder="Name" />
      //   </Form.Item>
      //   <Form.Item
      //     label="Subject"
      //     name="subject"
      //     rules={[{ required: true, message: "A subject is required" }]}
      //   >
      //     <Input className="contact__form_input" placeholder="Subject" />
      //   </Form.Item>
      //   <Form.Item
      //     label="Message"
      //     name="message"
      //     extra={
      //       <small>
      //         Clicking <EnterOutlined /> in Message Box wont submit the email,
      //         but it will add carriage returns!
      //       </small>
      //     }
      //     rules={[{ required: true, message: "A message is required" }]}
      //   >
      //     <Input.TextArea
      //       className="contact__form_input"
      //       placeholder="A message to the creator..."
      //       autoSize
      //     />
      //   </Form.Item>
      //   <Form.Item>
      //     <ButtonGroup>
      //       <Button
      //         type="primary"
      //         icon={<SendOutlined />}
      //         size="large"
      //         htmlType="submit"
      //         disabled={state.submitting}
      //       >
      //         Send
      //       </Button>
      //       <Button
      //         htmlType="reset"
      //         size="large"
      //         disabled={state.submitting}
      //         onClick={formReset}
      //       >
      //         Reset
      //       </Button>
      //     </ButtonGroup>
      //   </Form.Item>
      // </Form>
      <></>
    );
};

export default ContactForm;
