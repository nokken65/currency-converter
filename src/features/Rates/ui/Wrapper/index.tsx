import { variant } from '@effector/reflect';
import { combine } from 'effector';

import { rateModel } from '@/entities/Rate';

import { RatesList } from '../List';
import styles from './styles.module.scss';

export const Rates = () => {
  return (
    <ul className={styles.rates}>
      <RatesContent />
    </ul>
  );
};

const RatesContent = variant({
  source: combine(
    {
      isLoading: rateModel.$ratesIsLoading,
      isEmpty: rateModel.$ratesIsEmpty,
    },
    ({ isLoading, isEmpty }) => {
      if (isLoading) return 'loading';
      if (isEmpty) return 'empty';
      return 'ready';
    }
  ),
  cases: {
    loading: () => <span>Loading...</span>,
    empty: () => <span>Empty :(</span>,
    ready: RatesList,
  },
  hooks: {
    mounted: rateModel.$ratesIsEmpty && rateModel.getRatesFx.prepend(() => {}),
  },
});
