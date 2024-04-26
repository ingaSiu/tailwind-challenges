type ButtonProps = {
  children?: React.ReactNode;
  onClick?: (event: React.SyntheticEvent) => void;
  isClicked?: boolean;
};

const Button = ({ children, onClick }: ButtonProps) => (
  <button
    className="bg-indigo-50 px-8 py-4 rounded-xl text-emerald-950 font-semibold hover:bg-emerald-400 active:bg-emerald-400 hover:transition-all"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
