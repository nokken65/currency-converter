import { Input, Select } from '@/shared/ui';

const MainPage = () => {
  return (
    <div>
      <h2>MainPage</h2>
      <Input name='inCur' />
      <Select name='inCur' selected='RUB' options={['USA', 'EUR', 'RUB']} />
    </div>
  );
};

export default MainPage;
