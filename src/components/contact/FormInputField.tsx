import { FormGroup } from "./FormGroup";

interface FormInputFieldProps
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
  containerClassName?: string;
}

export const FormInputField: React.FC<FormInputFieldProps> = ({
  value,
  name,
  label,
  placeholder,
  type,
  required,
  handleChange,
  containerClassName,
  ...rest
}) => {
  return (
    <FormGroup
      name={name}
      label={label}
      required={required}
      className={containerClassName}
    >
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
