import { ErrorMessage } from "./ErrorField";
import React, { useState } from "react";

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  labelText?: string;
}

export const InputField = ({
  label,
  type,
  name,
  placeholder,
  required,
  value: initialValue,
  labelText,
}: InputFieldProps) => {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };
  const handleBlur = () => {
    setTouched(true);
  };

  const renderInput = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={handleChange}
            // onBlur={handleBlur}
            className="w-72 h-20 pl-2 border border-gray-500 rounded-md focus:outline-green-500 cursor-pointer"
          />
        );
      case "radio": {
        const options = ["General Enquiry", "Support Request"];
        return (
          <div className="w-72 flex flex-col gap-2">
            {options.map((option, index) => (
              <div key={index} className="relative">
                <input
                  id={`${name}-${index}`}
                  type="radio"
                  name={name}
                  value={option}
                  required={required}
                  // onChange={handleBlur}
                  className="peer hidden"
                />
                <label
                  htmlFor={`${name}-${index}`}
                  className="flex pl-2 items-center gap-2 w-72 h-10 rounded-md border border-gray-500
                 peer-checked:bg-green-200 peer-checked:border-green-500 transition-colors cursor-pointer"
                >
                  <div
                    className="w-3 h-3 border-2 border-gray-500 rounded-full "
                  >
                    <div className="w-2 h-2 rounded-full bg-transparent peer-checked:bg-green-600 transition-colors"></div>
                  </div>
                  <span className="pl-1">{option}</span>
                </label>
              </div>
            ))}
          </div>
        );
      }
      case "checkbox":
        return (
          <div className="w-72 flex gap-2">
            <input
              id={name}
              type="checkbox"
              name={name}
              required={required}
              // onChange={handleBlur}
              className="accent-green-600 cursor-pointer"
            />
            {labelText && (
              <label>
                {labelText}
                {required && <span className="text-red-500">*</span>}
              </label>
            )}
          </div>
        );
      default:
        return (
          <>
            <input
              id={name}
              type={type}
              name={name}
              placeholder={placeholder}
              required={required}
              value={value}
              // onChange={handleBlur}
              className="w-72 h-10 pl-2 border border-gray-500 rounded-md focus:outline-green-500 cursor-pointer"
            />
          </>
        );
    }
  };
  return (
    <fieldset>
      {type !== "checkbox" && (
        <label htmlFor="name" className="text-xs pl-2 mb-1">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div>{renderInput()}</div>
      {value && <ErrorMessage name={name} value={value} required={required} />}
    </fieldset>
  );
};
