import cx from "classnames";
import { twMerge } from "tailwind-merge";

const Card = ({ children, className, ...otherProps }) => {
  const classes = twMerge(
    cx(
      className,
      "max-w-sm w-full overflow-hidden bg-white rounded-lg shadow-lg"
    ),
    otherProps
  );

  return <div className={classes}>{children}</div>;
};

const CardHeader = ({ children, className, ...otherProps }) => {
  const classes = twMerge(
    cx(className, "px-4 py-5 bg-white border-b border-gray-200 sm:px-6"),
    otherProps
  );

  return <div className={classes}>{children}</div>;
};

const CardHeaderTitle = ({ children, as = "h3", className, ...otherProps }) => {
  const Tag = as;

  const classes = twMerge(
    cx(className, "text-lg font-medium leading-6 text-gray-900"),
    otherProps
  );

  return <Tag className={classes}>{children}</Tag>;
};


const CardImage = ({ src, alt, className, ...otherProps }) => {
  const classes = twMerge(
    cx(className, "object-cover object-center w-full h-48"),
    otherProps
  );

  return <img src={src} alt={alt} className={classes} />;
};

const CardBody = ({ children, className, ...otherProps }) => {
  const classes = twMerge(cx(className, "px-4 py-5 sm:p-6"), otherProps);

  return <div className={classes}>{children}</div>;
};

const CardFooter = ({ children, className, ...otherProps }) => {
  const classes = twMerge(
    cx(className, "bg-white border-t border-gray-200 sm:p-6"),
    otherProps
  );

  return <div className={classes}>{children}</div>;
};

Card.Header = CardHeader;
Card.Header.Title = CardHeaderTitle;
Card.Image = CardImage;
Card.Body = CardBody;
Card.Footer = CardFooter;


export default Card;