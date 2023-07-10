import React from "react";
import Image from "next/image";

type Props = {
  src: string | null | undefined;
};

function Avatar({ src }: Props) {
  return (
    <>
      <Image
        className="rounded-full"
        alt="avatar from flyboo"
        width={30}
        height={30}
        src={src || "/images/placeholder.jpg"}
      />
    </>
  );
}

export default Avatar;
