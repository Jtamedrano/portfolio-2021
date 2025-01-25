"use client";

import React from "react";
import { logEvent } from "../../utilities/logEvent";
import { FormInputField } from "./FormInputField";
import { FormGroup } from "./FormGroup";

interface FormState {
  name: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  website: string;
  message: string;
  services: string[];
  budget: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  phoneNumber: "",
  companyName: "",
  website: "",
  message: "",
  services: [],
  budget: "",
};

const services = [
  "Consultation",
  "Web Design",
  "Web Development",
  "E-Commerce",
  "Digital Marketing",
  "SEO",
  "Enterprise Solutions",
  "Automated Workflows",
  "Other",
];

const BASIN_API = "https://usebasin.com/f/";

export const ContactForm = () => {
  const [formState, setFormState] = React.useState(() => INITIAL_STATE);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
        <h2 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl text-secondary-200 mb-4">
          Request a free quote
        </h2>
        {error && (
          <div className="bg-red-100 text-red-900 p-4 rounded-lg mb-4">
            {error}
          </div>
        )}
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <FormInputField
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
            <FormInputField
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
            <FormInputField
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
            <FormInputField
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
            <FormInputField
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
            <FormGroup name="budget" label="Budget">
              <select
                value={formState.budget}
                name="budget"
                required
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-secondary-400"
                disabled={loading}
              >
                <option value="">Select a budget range</option>
                <option value="Less than $1,000">$1,000 or less</option>
                <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                <option value="$20,000+">$20,000+</option>
              </select>
            </FormGroup>
          </div>
          <div className="sm:col-span-2">
            <FormGroup name="services" label="Services">
              <div className="grid grid-cols-2 gap-4">
                {services.map((service) => (
                  <label key={service} className="flex items-center">
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      checked={formState.services.includes(service)}
                      onChange={(e) => {
                        const { checked, value } = e.target;
                        setFormState((prev) => ({
                          ...prev,
                          services: checked
                            ? [...prev.services, value]
                            : prev.services.filter((s) => s !== value),
                        }));
                      }}
                      className="rounded text-secondary-400 focus:ring-2 focus:ring-secondary-400"
                      disabled={loading}
                    />
                    <span className="ml-2">{service}</span>
                  </label>
                ))}
              </div>
            </FormGroup>
          </div>
          <div className="sm:col-span-2">
            <FormGroup name="message" label="Message">
              <textarea
                value={formState.message}
                name="message"
                placeholder="I'm in need of a new website for my business. Can you provide more information?"
                required
                onChange={handleChange}
                rows={6}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-secondary-400"
                disabled={loading}
              />
            </FormGroup>
          </div>
          <div className="sm:col-span-2 flex justify-end items-center">
            <button
              type="submit"
              className="bg-secondary-400 text-secondary-900 text-lg lg:text-base py-2 px-4 inline-block rounded-full font-semibold hover:bg-secondary-300 transition-colors duration-300 disabled:bg-gray-300 disabled:text-gray-900 disabled:cursor-not-allowed w-full"
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
