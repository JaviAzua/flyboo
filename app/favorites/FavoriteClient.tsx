"use client";

import Container from "@/components/Container";
import { SafeListing, SafeUserI } from "../types";
import Heading from "@/components/Heading";
import ListingCard from "@/components/listings/ListingCard";

type Props = {
  currentUser?: SafeUserI | null;
  listings: SafeListing[];
};

function FavoriteClient({ listings, currentUser }: Props) {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you like!" />
      <div className="grid mt-10 gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
}

export default FavoriteClient;
