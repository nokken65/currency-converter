import styles from './styles.module.scss';

type RateCardProps = {
  label: string;
  value: number;
};

const RateCard = ({ label, value }: RateCardProps) => {
  return (
    <dl className={styles.rateCard}>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </dl>
  );
};

export { RateCard };
