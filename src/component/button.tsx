
interface ButtonProps {
  text: string;
  onClick?: () => void;
}
const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <div onClick={onClick} className="w-full text-center mt-6">
      <button 
        className="relative w-full py-3.5 rounded-xl bg-brand-yellow text-white font-semibold transition-colors duration-500 group cursor-pointer"
      >
        <span className=" absolute inset-0 bg-[#F3F4F6] rounded-xl transform -translate-x-full -translate-y-full transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0 "></span>

        <span className="relative z-10 transition-colors text-gray-500 duration-500 group-hover:text-black ">
          {text}
        </span>
      </button>
    </div>
  );
};

export default Button;
