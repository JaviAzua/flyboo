"use client";
import { BounceLoader } from "react-spinners";

type Props = {};

function Loader({}: Props) {
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center">
      <BounceLoader size={100} color="#B0C723" />
    </div>
  );
}

export default Loader;
