"use client";

import useFavorite from "@/app/hooks/useFavorite";
import { SafeUserI } from "@/app/types";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

type Props = {
  currentUser?: SafeUserI | null;
  listingId: string;
};

function HeartButton({ currentUser, listingId }: Props) {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  return (
    <div
      className="relative hover:opacity-80 transition cursor-pointer"
      onClick={toggleFavorite}
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={`${hasFavorited ? "fill-mainGreen" : "fill-neutral-500/70"}`}
      />
    </div>
  );
}

export default HeartButton;
