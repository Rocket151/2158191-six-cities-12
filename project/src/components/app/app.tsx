import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

import { useAppSelector } from '../../hooks';
import { LoadingScreen } from '../../pages/loading-screen/loading-screen';
import { HistoryRouter } from '../history-route/history-route';
import { browserHistory } from '../../browser-history';

export default function App(): JSX.Element {
  const offers = useAppSelector((state)=>state.filteredOffers);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  const offerComments = useAppSelector((state) => state.currentOffer.comments);
  const nearbyOffers = useAppSelector((state) => state.currentOffer.nearbyOffers);
  const offerInfo = useAppSelector((state) => state.currentOffer.offerInfo);
  const isCurrenOfferDataLoading = useAppSelector((state) => state.isCurrentOfferDataLoading);

  if (isOffersDataLoading || isCurrenOfferDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element = {<MainScreen offers={offers} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesScreen offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element = {<LoginScreen />}
        />
        <Route path={AppRoute.Offer}>
          <Route path = ':id' element = {<OfferScreen offer={offerInfo} reviews={offerComments} nearbyOffers={nearbyOffers}/>} />
        </Route>
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
      </Routes>
    </HistoryRouter>
  );
}
