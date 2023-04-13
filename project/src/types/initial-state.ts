import { Offer } from './offer';
import { Review } from './review';

export type initialStateType = {
    cityName: string;
    sortType: string;
    offers: Offer[];
    filteredOffers: Offer[];
    isOffersDataLoading: boolean;
    authorizationStatus: string;
    userEmail: string;
    error: string | null;
    currentOffer: {
      currentOfferId: number | null;
      offerInfo: Offer | null;
      comments: Review[];
      nearbyOffers: Offer[];
      isCommentDataSending: boolean,
    };
    isCurrentOfferDataLoading: boolean;
  }
