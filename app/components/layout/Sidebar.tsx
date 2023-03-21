import { FaHome, FaBell, FaUserAlt } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import type { SidebarItemProps } from "../../../types.d.ts";
import SidebarTweetButton from "./SidebarTweetButton";

type Props = {};

export default function Sidebar({}: Props) {
  const items: SidebarItemProps[] = [
    {
      name: "Home",
      href: "/",
      icon: FaHome,
    },
    {
      name: "Notifications",
      href: "/notifications",
      icon: FaBell,
    },
    {
      name: "Profile",
      href: "/user/234",
      icon: FaUserAlt,
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem key={item.href} itemProps={item} />
          ))}
          <SidebarItem
            key={"fsddddasssss"}
            itemProps={{
              name: "Logout",
              icon: BiLogOut,
              onClick: () => {},
            }}
          />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
}
