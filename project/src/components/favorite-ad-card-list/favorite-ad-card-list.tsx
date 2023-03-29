import { Offer } from '../../types/offer';
import FavoriteAdCard from '../favorite-ad-card/favorite-ad-card';

type FavoriteAdCardListProps = {
    offers: Offer[];
}

export default function FavoriteAdCardList({offers}: FavoriteAdCardListProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{offers[0].city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <FavoriteAdCard key={offer.id} offer={offer}/>)}
      </div>
    </li>
  );
}
