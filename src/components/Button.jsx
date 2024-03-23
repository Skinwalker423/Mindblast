import ButtonSvg from "../../public/assets/svg/ButtonSvg";

const Button = ({
  children,
  href,
  className = "",
  onClick,
  px = "px-7",
  white,
}) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px} ${
    white ? "text-n-8" : "text-n-1"
  } ${className}`;
  const spanClasses = "relative z-10";
  const renderButton = () => (
    <button onClick={onClick} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a className={classes} href={href}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  if (!href) return renderButton();

  return renderLink();
};

export default Button;
