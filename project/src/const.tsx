export enum AppRoute {
    Favorites = '/favorites',
    Root = '/',
    Login = '/login',
    Offer = '/offer'
}
export enum CitiesName {
    AMSTERDAM = 'Amsterdam',
    COLOGNE = 'Cologne',
    PARIS = 'Paris',
    DUSSELDORF = 'Dusseldorf',
    BRUSSELS = 'Brussels',
    HAMBURG = 'Hamburg',
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export const RATING_STARS_STYLE_KOEF = 20;

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
