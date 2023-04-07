import { Offer } from './offer';
import { Review } from './review';

export type initialStateType = {
    cityName: string | null;
    offers: Offer[];
    filteredOffers: Offer[];
    isOffersDataLoading: boolean;
    authorizationStatus: string;
    userEmail: string;
    error: string | null;
    currentOffer: {
      offerInfo: Offer | null;
      comments: Review[];
      nearbyOffers: Offer[];
      isCommentDataSending: boolean,
    };
    isCurrentOfferDataLoading: boolean;
  }
