import cx from "classnames";
interface FormGroupProps {
  name: string;
  label: string;
  required?: boolean;
  className?: string;
}

export const FormGroup: React.FC<React.PropsWithChildren<FormGroupProps>> = ({
  name,
  label,
  required,
  children,
  className,
}) => {
  return (
    <div>
      <div
        className={cx(
          "text-sm/6 font-semibold text-gray-600 dark:text-gray-300",
          className
        )}
      >
        <label htmlFor={name}>{label}</label>{" "}
        {required && <span className="text-red-700">*</span>}
      </div>
      <div className="mt-2.5">{children}</div>
    </div>
  );
};
