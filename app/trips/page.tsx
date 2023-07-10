import EmptyState from "@/components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import TripsClient from "./TripsClient";

type Props = {};

async function TripsPage({}: Props) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="No user!" subtitle="Please login" />;
  }

  const reservations = await getReservations({
    userId: currentUser?.id,
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No reservation!"
        subtitle="Looks like you havent reserved any trips"
      />
    );
  }

  return (
    <TripsClient
      reservations={reservations}
      currentUser={currentUser}
    ></TripsClient>
  );
}

export default TripsPage;
