import EmptyState from "@/components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";
import PropeClient from "./PropeClient";

type Props = {};

async function PropertiesPage({}: Props) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="No user!" subtitle="Please login" />;
  }

  const listings = await getListings({
    userId: currentUser.id,
  });

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No Properties found!"
        subtitle="Looks like you have no properties"
      />
    );
  }

  return <PropeClient listings={listings} currentUser={currentUser} />;
}

export default PropertiesPage;
