function Button({
  label,
  iconUrl,
  textColor,
  backgroundColor,
  borderColor,
  fullWidth,
}) {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
        fullWidth && "w-full"
      } ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : " text-white bg-coral-red"
      }`}
    >
      {label}
      {iconUrl && (
        <img src={iconUrl} alt="icon" className="ml-2 rounded-full w-5 h-5" />
      )}{" "}
    </button>
  );
}

export default Button;
