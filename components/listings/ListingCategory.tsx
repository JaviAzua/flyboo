"use client";

import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  label: string;
  description: string;
};

function ListingCategory({ description, icon: Icon, label }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <Icon size={40} className="text-neutral-600" />
        <p className="flex flex-col">
          <span className="text-lg font-semibold">{label}</span>
          <span className="text-neutral-500 font-light">{description}</span>
        </p>
      </div>
    </div>
  );
}

export default ListingCategory;
