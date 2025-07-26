export const Button = ({
  children,
  className = "",
  size = "md",
  variant = "default",
  ...props
}) => {
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const variantStyles = {
    default: "bg-red-600 text-grey hover:bg-red-700 hover:text-white",
    secondary:
      "bg-white text-blue-700 border border-blue-600 hover:bg-blue-100",
  };

  return (
    <button
      className={`rounded-full font-medium transition duration-200 ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
