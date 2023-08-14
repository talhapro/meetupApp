import { useContext } from "react";
import FavouriteContext from "../store/favourite-context";
import MeetupList from "../components/meetups/MeetupList";

const Favourites = () => {
  const favouriteCtx = useContext(FavouriteContext);

  let content;

  if (favouriteCtx.totalFavourites === 0) {
    content = <p>You do not have any favourites. Start adding some</p>;
  } else {
    content = <MeetupList meetups={favouriteCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
};

export default Favourites;
