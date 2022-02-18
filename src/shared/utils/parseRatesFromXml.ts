import type { Rate, Rates } from '@/shared/api';

export const parseRatesFromXml = (xmlStr: string): Rates => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlStr, 'text/xml');
  const date: string = doc.querySelector('ValCurs')?.attributes[0].value!;
  const rates: Rate[] = [];
  //    Add RUB
  rates.push({
    id: 'R00000',
    numCode: 0,
    charCode: 'RUB',
    name: 'Российский рубль',
    value: 1,
  });
  //
  doc.querySelectorAll('Valute').forEach((node) => {
    const id = node.attributes[0].value;
    const numCode = Number(node.childNodes[0].textContent);
    const charCode = node.childNodes[1].textContent!;
    const nominal = Number(node.childNodes[2].textContent);
    const name = node.childNodes[3].textContent!;
    const value = Number.parseFloat(
      node.childNodes[4].textContent!.replace(',', '.')
    );
    const rate: Rate = {
      id,
      numCode,
      charCode,
      name,
      value: nominal === 1 ? value : value / nominal,
    };
    rates.push(rate);
  });

  return { date, rates };
};
