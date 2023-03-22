"use client";
import { useRouter } from "next/navigation";
import { FaFeather } from "react-icons/fa";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useCallback } from "react";
type Props = {};

export default function SidebarTweetButton({}: Props) {
  const router = useRouter();
  const loginModal = useLoginModal();

  const onClinck = useCallback(() => {
    loginModal.onOpen();
  }, []);

  return (
    <div onClick={onClinck}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 transition cursor-pointer">
        <FaFeather size={24} color="white" />
      </div>
      <div
        className="
      mt-6
      hidden
      lg:block
      px-4
      py-2

      rounded-full
      bg-sky-500
      transition
      cursor-pointer
      hover:bg-opacity-90
    "
      >
        <p className="hidden lg:block text-center font-semibold text-white text=[20px]">
          Tweet
        </p>
      </div>
    </div>
  );
}
