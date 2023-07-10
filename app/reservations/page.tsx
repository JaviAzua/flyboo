import getCurrentUser from "../actions/getCurrentUser";
import EmptyState from "@/components/EmptyState";
import getReservations from "../actions/getReservations";
import ReservationClient from "./ReservationClient";

type Props = {};

async function ReservationsPage({}: Props) {
  const currentUser = await getCurrentUser();

  if (!currentUser)
    return <EmptyState title="Unauthorized" subtitle="Please Login" />;

  const reservations = await getReservations({
    authorId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No Reservations"
        subtitle="Seems like no one have booked your place yet"
      />
    );
  }

  return (
    <>
      <ReservationClient
        currentUser={currentUser}
        reservations={reservations}
      />
    </>
  );
}

export default ReservationsPage;
