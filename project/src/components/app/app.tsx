import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen'
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen'

type AppScreenProps = {
  adCount: number;
}

export default function App({adCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element = {<MainScreen adCount={adCount} />}
        />
        <Route
          path={AppRoute.Favorites}
          element = {<FavoritesScreen />}
        />
        <Route
          path={AppRoute.Login}
          element = {<LoginScreen />}
        />
        <Route
          path={AppRoute.Offer}
          element = {<OfferScreen />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>    
  );
}
