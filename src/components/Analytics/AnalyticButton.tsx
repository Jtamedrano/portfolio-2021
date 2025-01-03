import { logEvent } from "../../utilities/logEvent";

interface AnalyticButtonProps {
  label: string;
  className?: string;
  eventValue: string;
  eventCategory?: string;
  onClick?: () => void;
}

export const AnalyticButton: React.FC<AnalyticButtonProps> = ({
  label,
  className,
  eventValue,
  eventCategory,
  onClick,
}) => {
  const handleClick = () => {
    logEvent(
      "click",
      "button",
      (eventCategory ?? label).toLowerCase().replaceAll(" ", "_"),
      eventValue
    );
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={className}
      onClick={handleClick}
      onMouseDown={handleClick}
    >
      {label}
    </button>
  );
};
