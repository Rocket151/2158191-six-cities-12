import { createSlice } from '@reduxjs/toolkit';
import { sendOfferCommentAction } from '../api-actions';
import { SlicesName } from '../../const';
import { UserReview } from '../../types/state';
import {currentOfferData} from '../current-offer-data/current-offer-data'

const initialState: UserReview = {
  isCommentDataSending: false,
};

export const userReview = createSlice({
  name: SlicesName.OffersData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(sendOfferCommentAction.pending, (state) => {
        state.isCommentDataSending = true;
      })
      .addCase(sendOfferCommentAction.fulfilled, (state) => {
        state.isCommentDataSending = false;
      })
      .addCase(sendOfferCommentAction.rejected, (state) => {
        state.isCommentDataSending = false;
      });
  }
});
