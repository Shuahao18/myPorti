const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-8 py-4 border font-montserrat font-semibold text-base leading-none rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor} hover:shadow-lg`
          : "bg-coralY text-black border-coralY hover:bg-opacity-90 shadow-lg hover:shadow-xl hover:shadow-coralY/20"
      } ${fullWidth && "w-full"} relative overflow-hidden group`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {label}
        {iconURL && (
          <img
            src={iconURL}
            alt='icon'
            className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1'
          />
        )}
      </span>
      
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></div>
    </button>
  );
};

export default Button;
