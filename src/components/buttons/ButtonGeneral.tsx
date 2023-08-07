interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  // ... your custom props here
}

const ButtonGeneral: React.FunctionComponent<ButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      className={`flex w-fit font-extrabold text-gri font-[800 ] text-3xl border-[3px]  border-[#D35400] px-8 py-4 uppercase ${className} `}
    >
      {children}
    </button>
  );
};

export default ButtonGeneral;
