"use client";

import { Range } from "react-date-range";
import Calendar from "../inputs/Calendar";
import Button from "../Button";

type Props = {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
};

function ListingReservation({
  dateRange,
  disabledDates,
  onChangeDate,
  onSubmit,
  disabled,
  price,
  totalPrice,
}: Props) {
  return (
    <div className="bh-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <p className="text-2xl font-semibold">
          ${price}
          <span className="font-light text-sm text-neutral-600">/night</span>
        </p>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
      </div>
      <div className="flex flex-row justify-between font-semibold text-lg items-center p-4">
        <p>Total:</p>
        <p>${totalPrice}</p>
      </div>
    </div>
  );
}

export default ListingReservation;
