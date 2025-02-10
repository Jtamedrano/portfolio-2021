"use client";

import React from "react";
import { FormInputField } from "../contact/FormInputField";
import { FormGroup } from "../contact/FormGroup";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { logEvent } from "../../utilities/logEvent";

const services = [
  { id: 1, name: "Web Design" },
  { id: 2, name: "Web Development" },
  { id: 3, name: "Lead Generation Strategy" },
];

const BASIN_API = "https://usebasin.com/f/";

const INITIAL_STATE = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
};

export const HomePageForm: React.FC = () => {
  const [formPageOne, setFormPageOne] = React.useState<{
    fullName: string;
    email: string;
    phone: string;
    service: string | null;
  }>(INITIAL_STATE);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormPageOne((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    logEvent("submit", "form", "contact_form", formPageOne.email);
    const formId = process.env.NEXT_PUBLIC_BASIN_FORM_ID;

    await fetch(`${BASIN_API}${formId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formPageOne),
    })
      .then(() => {
        alert("Form submitted successfully!");
        setFormPageOne(INITIAL_STATE);
      })
      .catch((e) => {
        alert("There was an error submitting the form. Please try again.");
      });
  };

  return (
    <div className="w-3/4 rounded-lg p-8 bg-slate-800 text-slate-200 flex flex-col gap-4 border border-slate-700 shadow-lg shadow-black/75">
      <h2 className="text-4xl font-semibold text-secondary-400 text-center capitalize">
        See how our auto capture lead form works
      </h2>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
        autoComplete="on"
      >
        <FormInputField
          autoComplete="name"
          type="text"
          name="name"
          label="Name"
          placeholder="Your Name"
          disabled
          handleChange={handleChange}
          value={formPageOne.fullName}
          containerClassName="text-xl"
          required
        />
        <FormInputField
          autoComplete="email"
          type="email"
          name="email"
          label="Email"
          placeholder="Your Email"
          handleChange={handleChange}
          value={formPageOne.email}
          containerClassName="text-xl"
          required
        />
        <FormInputField
          autoComplete="tel"
          type="tel"
          name="phone"
          label="Phone"
          placeholder="Your Phone"
          handleChange={handleChange}
          value={formPageOne.phone}
          containerClassName="text-xl"
          required
        />
        <FormGroup label="Service" name="service" className="text-xl">
          <Listbox
            value={formPageOne.service}
            onChange={(v) =>
              setFormPageOne((prev) => ({ ...prev, service: v }))
            }
          >
            <ListboxButton
              className="text-slate-700 w-full p-2 rounded-lg border border-slate-300 bg-slate-100 text-left"
              aria-label="Select a service"
            >
              {formPageOne.service || "Select a service"}
            </ListboxButton>
            <ListboxOptions
              className="border border-slate-300 bg-slate-200 rounded-lg shadow-md empty:invisible divide-y-2 divide-slate-300"
              anchor="bottom start"
            >
              {services.map((service) => (
                <ListboxOption
                  key={service.id}
                  value={service.name}
                  className="text-slate-700 hover:bg-slate-300 hover:text-slate-900 data-[focus]:bg-slate-300 data-[focus]:text-slate-900 transition-colors duration-300 px-3 py-2 cursor-pointer"
                >
                  {service.name}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>
        </FormGroup>
        <p className="">
          Once submitted you will receive an email shortly with a demo of our
          auto capture lead form in action.
        </p>
        <button
          className="bg-yellow-500 text-slate-900 text-xl font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
          type="submit"
        >
          Send Me The Demo
        </button>
      </form>
    </div>
  );
};
