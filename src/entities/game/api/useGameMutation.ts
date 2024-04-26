import { useMutation } from '@tanstack/react-query';
import { restApiMethods } from '../../../shared/api';

import * as constants from './constants';
import { GameResultData, GameResultResponse } from './types';

const sendGameResult = (data: GameResultData): Promise<GameResultResponse> =>
  restApiMethods.post(constants.urls.sendGameResult, { ...data });

export const useGameMutation = () => {
  const { mutate } = useMutation(sendGameResult, {
    onSuccess: (response: GameResultResponse) => {
      return response;
    },
  });

  return {
    useSendGameResult: mutate,
  };
};
