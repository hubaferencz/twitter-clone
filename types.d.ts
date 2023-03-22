import { IconType } from "react-icons";

type SidebarItemProps = {
  name: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
};

type HeaderProps = {
  label: string;
  showBackArrow?: boolean;
};

type ButtonProps = {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  outline?: boolean;
};

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
};

type InputProps = {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
};

type LoginModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

type RegisterModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}