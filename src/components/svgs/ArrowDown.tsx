const ArrowDown = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.42407 14.3984L8.87999 18.9936C9.16526 19.2882 9.58581 19.2882 9.87109 18.9936L18.4829 10.1139C19.02 9.55806 18.6945 8.5 17.9874 8.5H10.3224L4.42407 14.3984Z"
        fill="#E4E2D6"
      />
      <path
        opacity="0.5"
        d="M8.4281 8.5H0.763173C0.0560122 8.5 -0.269443 9.55806 0.267624 10.1139L3.49003 13.4367L8.4281 8.5Z"
        fill="#E4E2D6"
      />
    </svg>
  );
};
export default ArrowDown;
