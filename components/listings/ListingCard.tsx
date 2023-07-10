"use client";

import useCountries from "@/app/hooks/useCountries";
import { SafeListing, SafeReservation, SafeUserI } from "@/app/types";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { format } from "date-fns";
import Image from "next/image";
import HeartButton from "./HeartButton";
import Button from "../Button";

type Props = {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUserI | null;
};

function ListingCard({
  data,
  actionId = "",
  actionLabel = "",
  currentUser,
  disabled,
  onAction,
  reservation,
}: Props) {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [actionId, disabled, onAction]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }
    return data.price;
  }, [data.price, reservation]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <div
      className="col-span-1 cursor-pointer group select-none"
      onClick={() => router.push(`/listing/${data.id}`)}
    >
      <div className="w-full flex flex-col gap-2 ">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            alt="Listing image"
            src={data.imageSrc}
            fill
            className="object-cover h-full w-full group-hover:scale-105 transition"
          />
          <div className="absolute top-3 left-4 hover:scale-110 transition">
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>
        <div className="font-semibol text-lg">
          {location?.region}, {location?.label}
        </div>
        <span className="font-light text-neutral-500">
          {reservationDate || data.category}
        </span>
        <div className="flex items-center gap-1">
          <span className="font-semibold">$ {price}</span>
          {!reservation && <span className="font-light">/night</span>}
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        )}
      </div>
    </div>
  );
}

export default ListingCard;
