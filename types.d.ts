import { IconType } from "react-icons";

type SidebarItemProps = {
  name: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
};
