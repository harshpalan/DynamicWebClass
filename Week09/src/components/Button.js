// @flow
import * as React from "react";
import cx from "classnames";
import { twMerge } from "tailwind-merge";

export type ButtonProps = {
  /** Text and/or option Icon to display within the Button */
  children: React.Node,
  /** Primary Button style */
  primary?: boolean,
  /** Secondary Button style */
  secondary?: boolean,
  /** Success Button style */
  success?: boolean,
  /** Warning Button style */
  warning?: boolean,
  /** Danger Button style */
  danger?: boolean,
  /** Outline Button style */
  outline?: boolean,
  /** Rounded Button style */
  rounded?: boolean,
  /** Custom class name to apply to the Button */
  className?: string,
  /** Function to call when the Button is clicked */
  onClick?: (event: SyntheticEvent<>) => mixed,
};

export default function Button(props: ButtonProps): React.MixedElement {
  const {
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    className,
    onClick,
  } = props;
  const classes = twMerge(
    cx(className, "flex items-center px-8 py-3 border", {
      "border-blue-500 bg-blue-600 text-white": primary,
      "border-gray-900 bg-gray-800 text-white": secondary,
      "border-green-500 bg-green-600 text-white": success,
      "bg-orange-400 bg-orange-500 text-white": warning,
      "border-red-600 bg-red-700 text-white": danger,
      // rounded
      "rounded-full": rounded,
      "bg-white": outline,
      // outline variation
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-orange-400": outline && warning,
      "text-red-600": outline && danger,
    })
  );

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
