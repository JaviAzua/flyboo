"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {};

function Logo({}: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <Image
        onClick={handleClick}
        alt="Hobook Logo"
        className="hidden md:block cursor-pointer"
        width={100}
        height={100}
        src={"/images/logo.svg"}
      />
    </>
  );
}

export default Logo;
