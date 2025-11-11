export default function ValueCard({ value, text, className = "" }) {
  return (
    <div
      className={`flex flex-col justify-between bg-white/25 p-1 sm:p-3 rounded-lg ${className} hover:bg-[linear-gradient(146deg,#FF5E0B_4.61%,#FF9206_70.46%,var(--jaune-insun)_98.48%)] hover:shadow-[1px_1px_25px_2px_var(--orange-insun)] transition-transform duration-300 ease-in-out
      hover:scale-103`}
    >
      <img src={`./icons/${value}.svg`} alt={`icon-${value}`} className="w-5" />
      <div className="flex flex-col gap-2">
        <div className="font-title font-bold text-white text-base md:text-lg lg:text-xl xl:text-2l 2xl:text-4xl">
          {value}
        </div>
        <div className="font-text text-white text-sm sm:text-base lg:text-lg xl:text-xl">
          {text}
        </div>
      </div>
    </div>
  );
}
