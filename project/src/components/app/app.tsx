import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {Review} from '../../types/review';
import { useAppSelector } from '../../hooks';
import { LoadingScreen } from '../../pages/loading-screen/loading-screen';

type AppScreenProps = {
  reviews: Review[];
}

export default function App({reviews}: AppScreenProps): JSX.Element {
  const offers = useAppSelector((state)=>state.filteredOffers);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element = {<MainScreen offers={offers} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesScreen offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element = {<LoginScreen />}
        />
        <Route path={AppRoute.Offer}>
          <Route path = ':id' element = {<OfferScreen offers={offers} reviews={reviews}/>} />
        </Route>
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}
