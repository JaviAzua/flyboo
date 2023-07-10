import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/components/EmptyState";
import ListingClient from "./ListingClient";
import Container from "@/components/Container";
import getReservations from "@/app/actions/getReservations";

type Props = {
  listingId?: string;
};

async function ListingPage({ params }: { params: Props }) {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }

  return (
    <>
      <Container>
        <ListingClient
          listing={listing}
          reservations={reservations}
          currentUser={currentUser}
        />
      </Container>
    </>
  );
}

export default ListingPage;
