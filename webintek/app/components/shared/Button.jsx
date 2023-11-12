"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import LoadingSpinnerLight from "../LoadingSpinner";

export default function Button({
  title,
  icon,
  onClick,
  isPending,
  disabled,
  variant,
  className,
  type,
  width,
  borderColor,
}) {
  if (!variant) variant = "primary";

  const [isWaitingPending, setIsWaitingPending] = useState(false);

  const handleOnClick = async () => {
    if (!onClick) return;
    if (isPending) {
      setIsWaitingPending(true);
      await onClick();
      setIsWaitingPending(false);
      return;
    }
    onClick();
  };
  const borderClass = borderColor
    ? `border-${borderColor}`
    : "border-primary-color";

  return (
    <button
      className={`bg-transparent border ${borderClass} hover:border-primary-color hover:bg-primary-color py-2 px-6 text-secondary-color`}
      type={type}
      onClick={handleOnClick}
      style={{ width: width ?? "" }}
      disabled={disabled}
    >
      {!isWaitingPending && (
        <div className={"flex justify-center items-center gap-x-2"}>
          <div>{title}</div>
          {icon && (
            <div>
              <FontAwesomeIcon icon={icon ?? faQuestionCircle} />
            </div>
          )}
        </div>
      )}
      {isWaitingPending && (
        <div className={"w-full h-full flex justify-center items-center"}>
          <LoadingSpinnerLight size={34} />
        </div>
      )}
    </button>
  );
}
