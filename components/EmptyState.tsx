"use client";

import { useRouter } from "next/navigation";
import Heading from "./Heading";
import Button from "./Button";

type Props = {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
};

function EmptyState({
  title = "No matches",
  subtitle = "Try changing or removing some filters",
  showReset,
}: Props) {
  const router = useRouter();

  return (
    <div className="h-[60vh] flex justify-center flex-col gap-2 items-center">
      <Heading title={title} subtitle={subtitle} center />
      <div className="mt-4 w-48">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
}

export default EmptyState;
