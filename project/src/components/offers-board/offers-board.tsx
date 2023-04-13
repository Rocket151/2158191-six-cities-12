import { useMemo } from 'react';
import { useAppSelector } from '../../hooks';
import { Offer } from '../../types/offer';
import { sortOffers } from '../../utils';
import AdCardList from '../ad-card-list/ad-card-list';
import SortingTypeForm from '../sorting-type-form/sorting-type-form';

type offersBoardProps = {
    offers: Offer[];
}


export default function OffersBoard({offers}: offersBoardProps) {
  const currentCity = useAppSelector((state)=>state.cityName);
  const sortType = useAppSelector((state) => state.sortType);
  const sortedOffers = useMemo(() => sortOffers(offers, sortType), [offers, sortType]);

  return(
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {currentCity}</b>
      <SortingTypeForm />

      <div className="cities__places-list places__list tabs__content">
        <AdCardList offers={sortedOffers} isMainScreen />

      </div>
    </section>
  );
}
