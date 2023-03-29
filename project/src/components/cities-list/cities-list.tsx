import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { filterOffers, pickCity } from '../../store/action';

export default function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list" onClick={(evt) => {
      const target = evt.target as HTMLElement;
      if (target.tagName !== 'SPAN') {
        return;
      }
      dispatch(pickCity(target.textContent || ''));
      dispatch(filterOffers());
    }}
    >
      <li className="locations__item">
        <Link className="locations__item-link tabs__item" to="#">
          <span>Paris</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className="locations__item-link tabs__item" to="#">
          <span>Cologne</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className="locations__item-link tabs__item" to="##">
          <span>Brussels</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className="locations__item-link tabs__item tabs__item--active" to="#">
          <span>Amsterdam</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className="locations__item-link tabs__item" to="#">
          <span>Hamburg</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className="locations__item-link tabs__item" to="#">
          <span>Dusseldorf</span>
        </Link>
      </li>
    </ul>
  );
}
