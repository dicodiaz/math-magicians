import { act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const click = async (element) => {
  await act(async () => {
    await userEvent.click(element);
  });
};

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
