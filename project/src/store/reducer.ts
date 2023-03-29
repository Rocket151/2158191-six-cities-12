import {createReducer} from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { filterOffers, pickCity } from './action';

const START_CITY_NAME = 'Paris';

const initialState = {
  cityName: 'Paris',
  offers: offers.filter((offer) => offer.city.name === START_CITY_NAME),
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(pickCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(filterOffers, (state) => {
      state.offers = offers.filter((offer)=> offer.city.name === state.cityName);
    });
});
