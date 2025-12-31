import Text from './components/text';
import Icon from './components/icon';

import CheckIcon from './assets/icons/check.svg?react'
import PlusIcon from './assets/icons/plus.svg?react'
import SpinnerIcon from './assets/icons/spinner.svg?react'
import PencilIcon from './assets/icons/pencil.svg?react'
import XIcon from './assets/icons/x.svg?react'
import TrashIcon from './assets/icons/trash.svg?react';

export default function App() {

  return (
    <div className='grid gap-3'>
      <div className='flex flex-col gap-2'>
        <Text variant='body-sm-bold' className='text-pink-base'>
          Olá mundo!
        </Text>
        <Text className='text-green-base'>Olá mundo!</Text>
        <Text variant='body-md-bold'>Olá mundo!</Text>
        <Text>Levar o dog pra passear</Text>
      </div>

      <div className='flex gap-1'>
        <Icon svg={CheckIcon} className='fill-pink-base' />
        <Icon svg={PlusIcon} />
        <Icon svg={SpinnerIcon} animate/>
        <Icon svg={PencilIcon} />
        <Icon svg={XIcon} />
        <Icon svg={TrashIcon} />
      </div>
    </div>
  );
}
