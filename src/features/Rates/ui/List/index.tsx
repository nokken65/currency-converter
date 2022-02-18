import { list } from '@effector/reflect';

import { RateCard, rateModel } from '@/entities/Rate';

import styles from './styles.module.scss';

type RatesListProps = {
  rate: import('@/shared/api').Rate;
};

const RatesListView = ({ rate }: RatesListProps) => {
  return (
    <li className={styles.rateItem}>
      <RateCard label={rate.charCode} value={+rate.value.toFixed(4)} />
    </li>
  );
};

export const RatesList = list({
  view: RatesListView,
  source: rateModel.$rates,
  mapItem: {
    rate: (rate) => rate,
  },
  getKey: (rate) => rate.id,
});
