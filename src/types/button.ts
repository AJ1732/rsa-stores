interface ButtonProps {
  label: string | React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}