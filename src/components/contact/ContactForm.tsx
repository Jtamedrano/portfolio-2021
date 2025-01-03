"use client";

import React from "react";
import { logEvent } from "../../utilities/logEvent";

interface FormGroupProps {
  name: string;
  label: string;
  required?: boolean;
}

interface FormFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: string;
  name: string;
  label: string;
  placeholder: string;
  type: string;
  required?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const INITIAL_STATE = {
  name: "",
  email: "",
  phoneNumber: "",
  companyName: "",
  website: "",
  message: "",
};

const FormGroup: React.FC<React.PropsWithChildren<FormGroupProps>> = ({
  name,
  label,
  required,
  children,
}) => {
  return (
    <div>
      <div className="text-sm/6 font-semibold text-gray-300">
        <label htmlFor={name}>{label}</label> {required && <span>*</span>}
      </div>
      <div className="mt-2.5">{children}</div>
    </div>
  );
};

const FormField: React.FC<FormFieldProps> = ({
  value,
  name,
  label,
  placeholder,
  type,
  required,
  handleChange,
  ...rest
}) => {
  return (
    <FormGroup name={name} label={label} required={required}>
      <input
        {...rest}
        value={value}
        name={name}
        placeholder={placeholder}
        type={type}
        required={required}
        onChange={handleChange}
        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-secondary-400"
      />
    </FormGroup>
  );
};

const BASIN_API = "https://usebasin.com/f/";

export const ContactForm = () => {
  const [formState, setFormState] = React.useState(() => INITIAL_STATE);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    logEvent("submit", "form", "contact_form", formState.email);
    const formId = process.env.NEXT_PUBLIC_BASIN_FORM_ID;

    setLoading(() => true);
    await fetch(`${BASIN_API}${formId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then(() => {
        alert("Form submitted successfully!");
        setFormState(INITIAL_STATE);
      })
      .catch((e) => {
        setError(e.message);
        alert("There was an error submitting the form. Please try again.");
      });

    setLoading(() => false);
  };

  React.useEffect(() => {
    if (window.location.search) {
      const service = new URLSearchParams(window.location.search).get(
        "service"
      );
      if (service) {
        const parsedService = decodeURIComponent(service as string);
        setFormState((prev) => ({
          ...prev,
          message: `I'm interested in the "${parsedService}" service. Can you provide more information?`,
        }));
      }
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="relative px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
    >
      <div className="mx-auto max-w-xl lg:mx-0 lg:mx-w-lg">
        {error && (
          <div className="bg-red-100 text-red-900 p-4 rounded-lg mb-4">
            {error}
          </div>
        )}
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <FormField
              value={formState.name}
              name="name"
              label="Name"
              placeholder="John Doe"
              type="text"
              required
              autoComplete="name"
              handleChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <FormField
              value={formState.email}
              name="email"
              label="Email"
              placeholder="Email"
              type="email"
              required
              autoComplete="email"
              handleChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <FormField
              value={formState.phoneNumber}
              name="phoneNumber"
              label="Phone Number"
              placeholder="Phone Number"
              type="tel"
              required
              autoComplete="tel"
              handleChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <FormField
              value={formState.companyName}
              name="companyName"
              label="Company Name"
              placeholder="Company Name"
              type="text"
              autoComplete="organization"
              handleChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <FormField
              value={formState.website}
              name="website"
              label="Website"
              placeholder="Website"
              type="url"
              autoComplete="url"
              handleChange={handleChange}
              disabled={loading}
            />
          </div>
          <div className="sm:col-span-2">
            <FormGroup name="message" label="Message">
              <textarea
                value={formState.message}
                name="message"
                placeholder="Message"
                required
                onChange={handleChange}
                rows={6}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-secondary-400"
                disabled={loading}
              />
            </FormGroup>
          </div>
          <div>
            <button
              type="submit"
              className="bg-secondary-400 text-secondary-900 text-lg lg:text-base py-2 px-4 inline-block rounded-full font-semibold hover:bg-secondary-500 transition-colors duration-300 disabled:bg-gray-300 disabled:text-gray-900 disabled:cursor-not-allowed"
              disabled={loading}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
