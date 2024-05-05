import { useMutation } from '@tanstack/react-query';
import { restApiMethods } from '../../../shared/api';

import * as constants from './constants';
import { FestivalResultData } from './types';

const sendFestivalResult = (data: FestivalResultData): Promise<any> =>
  restApiMethods.post(constants.urls.sendFestivalResult, { ...data });

export const useFestivalMutation = () => {
  const { mutate } = useMutation(sendFestivalResult, {
    onSuccess: (response: any) => {
      return response;
    },
  });

  return {
    useSendFestivalResult: mutate,
  };
};
