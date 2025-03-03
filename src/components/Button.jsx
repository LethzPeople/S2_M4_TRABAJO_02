const Button = ({ variant, onClick, children, className = "" }) => {
  const baseStyle = "px-4 py-2 text-black font-bold rounded-none transition-shadow";
  
  const variantStyle =
    variant === "primary"
      ? "bg-green-500 shadow-[0_0_10px_#00ff00] hover:shadow-[0_0_20px_#00ff00]"
      : variant === "secondary"
      ? "bg-gray-500 hover:bg-gray-700"
      : "";

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;


