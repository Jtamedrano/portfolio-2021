"use client";

import React, { useCallback } from "react";
import { BUNDLES_MAP } from "../../models/service";
import { Modal } from "../Modal/Modal";
import { FormInputField } from "../contact/FormInputField";
import { FormGroup } from "../contact/FormGroup";
import axios from "axios";
import { HiCheckCircle } from "react-icons/hi2";
import { useDebounce } from "react-use";

interface ServiceBundleContactFormProps {
  serviceBundleId: string;
}

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
};

export const ServiceBundleContactButton: React.FC<
  ServiceBundleContactFormProps
> = ({ serviceBundleId }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalView, setModalView] = React.useState<"form" | "success">("form");
  const [formData, setFormData] = React.useState(INITIAL_FORM_DATA);

  const bundleTitle = BUNDLES_MAP[serviceBundleId].title;
  const onBundleClick = () => {
    setModalOpen(true);
  };

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const renderModalTitle = useCallback(() => {
    switch (modalView) {
      case "form":
        return "Requesting " + bundleTitle;
      case "success":
        return undefined;
    }
  }, [modalView]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, phoneNumber, message } = formData;
    const response = await axios.post("/api/contact", {
      name,
      email,
      phoneNumber,
      message,
      bundleTitle,
    });

    if (response.status === 200) {
      setModalView("success");

      setTimeout(() => {
        setModalOpen(false);
      }, 3000);
    }
  };

  useDebounce(
    () => {
      if (!modalOpen) {
        setFormData(INITIAL_FORM_DATA);
        setModalView("form");
      }
    },
    500,
    [modalOpen]
  );

  return (
    <>
      <button
        onClick={onBundleClick}
        className="mt-10 rounded-md bg-secondary-600 px-3 py-2 text-center text-sm/6 font-semibold text-white shadow-sm hover:bg-secondary-500 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary-400 focus-visible:outline-offset-2"
      >
        Request {bundleTitle}
      </button>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={renderModalTitle()}
      >
        {modalView === "success" ? (
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-2xl font-semibold text-secondary-600">
              Request Submitted
            </h3>
            <HiCheckCircle className="text-secondary-600 size-16" />
            <p className="text-gray-700">Thank you for reaching out!</p>
            <p className="text-gray-700">
              We will get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            data-testid="contact-form"
          >
            <FormInputField
              handleChange={handleFieldChange}
              value={formData.name}
              type="text"
              name="name"
              label="Name"
              required
              placeholder="Your name"
              autoComplete="name"
              containerClassName="text-gray-700"
            />
            <FormInputField
              handleChange={handleFieldChange}
              value={formData.email}
              type="email"
              name="email"
              label="Email"
              required
              placeholder="Your email"
              autoComplete="email"
              containerClassName="text-gray-700"
            />
            <FormInputField
              handleChange={handleFieldChange}
              value={formData.phoneNumber}
              name="phoneNumber"
              label="Phone Number"
              placeholder="Your phone number"
              type="tel"
              autoComplete="tel"
              containerClassName="text-gray-700"
            />
            <FormGroup
              name="message"
              label="Message"
              required
              className="text-gray-700"
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFieldChange}
                className="w-full h-32 border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-secondary-600 focus:border-transparent"
                placeholder="How can we help you?"
                required
              ></textarea>
            </FormGroup>
            <button
              type="submit"
              className="bg-secondary-600 text-white font-semibold text-sm/6 px-4 py-2 rounded-md shadow-sm hover:bg-secondary-500 transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        )}
      </Modal>
    </>
  );
};
