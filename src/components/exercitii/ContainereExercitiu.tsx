import { ReactNode } from "react";

interface IProps {
  children: ReactNode | ReactNode[];
  className?: string;
}
interface IPropsValidare {
  className?: string;
  onClick: () => void;
}

export const ContainerExercitiu = ({ children, className }: IProps) => {
  return (
    <div
      className={`flex px-4  gap-8 w-full items-center py-2  border-black ${className} `}
    >
      {children}
    </div>
  );
};
export const ContainerButoane = ({ children, className }: IProps) => {
  return (
    <div className={`flex gap-2 items-center justify-center ${className}`}>
      {children}
    </div>
  );
};

export const ButonValidare = ({ className, onClick }: IPropsValidare) => {
  return (
    <button
      onClick={onClick}
      className={`border border-black rounded-full px-4 py-1 ${className}`}
    >
      Add
    </button>
  );
};
