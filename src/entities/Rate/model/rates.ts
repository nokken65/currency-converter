import { createEffect, createEvent, createStore, restore } from 'effector';
import { Done, persist } from 'effector-storage/local';

import type { Rates } from '@/shared/api';
import { cbrApi } from '@/shared/api';
import { parseRatesFromXml } from '@/shared/utils';

// base currency
export const setBaseCurrency = createEvent<string>();

export const $baseCurrency = restore<string>(setBaseCurrency, 'EUR');

// rates
export const getRatesFx = createEffect(() => {
  return cbrApi.getRates();
});

export const $ratesMap = createStore<Rates>({} as Rates).on(
  getRatesFx.doneData,
  (_, payload) => parseRatesFromXml(payload.data)
);

export const $currencyLabels = $ratesMap.map((ratesMap) =>
  ratesMap?.rates ? ratesMap.rates.map((rate) => rate.charCode) : []
);

export const $rates = $ratesMap.map((ratesMap) => {
  if (!ratesMap?.rates) return [];
  const baseRate =
    $ratesMap
      .getState()
      ?.rates.find((rate) => rate.charCode === $baseCurrency.getState())
      ?.value || 1;

  console.log(baseRate);

  const rates = ratesMap.rates.map((rate) => ({
    ...rate,
    value: baseRate / rate.value,
  }));
  console.log(rates);

  return rates;
});

export const $ratesIsLoading = getRatesFx.pending;
export const $ratesIsEmpty = $rates.map((rates) => rates.length === 0);

// update localStorageRates
const updateRatesFx = createEffect((payload: Done<Rates>) => {
  // if (+payload.value.date.split('.')[0] !== new Date().getDate()) {
  //   getRatesFx();
  // }
});

persist({
  store: $ratesMap,
  key: 'rates',
  done: updateRatesFx,
});
