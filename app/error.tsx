"use client";

import EmptyState from "@/components/EmptyState";
import { useEffect } from "react";

type Props = {
  error: Error;
};

function ErrorState({ error }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyState title="Uh :(" subtitle="Something went wrong" />;
}

export default ErrorState;
