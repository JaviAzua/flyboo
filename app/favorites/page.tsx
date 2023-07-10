import EmptyState from "@/components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getFavorites from "../actions/getFavorites";
import FavoriteClient from "./FavoriteClient";

type Props = {};

async function Favorites({}: Props) {
  const currentUser = await getCurrentUser();
  const favorites = await getFavorites();

  if (favorites.length === 0) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you have no favorites"
      />
    );
  }

  return (
    <>
      <FavoriteClient listings={favorites} currentUser={currentUser} />
    </>
  );
}

export default Favorites;
