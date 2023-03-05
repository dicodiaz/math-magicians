import { act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// eslint-disable-next-line import/prefer-default-export
export const click = async (element) => {
  await act(async () => {
    await userEvent.click(element);
  });
};
