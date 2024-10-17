import Image from 'next/image';
import MenuItem from '../menu/MenuItem';
import SectionHeaders from './SectionHeaders';

export default function HomeMenu() {
  return (
    <section className=''>
      <div className='text-center mb-6'>
        <SectionHeaders
          mainHeader={'Menu'}
          subHeader={'Check Out'}
        />
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <MenuItem
          name='Bowl'
          description='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet.'
          price='12,5'
          imageSrc='/bowl.png'
        />
        <MenuItem
          name='Super Burguer'
          description='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet.'
          price='16'
          imageSrc='/burguer1.png'
        />
        <MenuItem
          name='Hot Dog Mega'
          description='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet.'
          price='14'
          imageSrc='/hot-dog.png'
        />
        <MenuItem
          name='Vier Käse Pizza'
          description='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet.'
          price='13'
          imageSrc='/pizza.png'
        />
        <MenuItem
          name='Lunch #1'
          description='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet.'
          price='8,5'
          imageSrc='/lunch1.png'
        />
        <MenuItem
          name='Lunch #2'
          description='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet.'
          price='14'
          imageSrc='/lunch2.png'
        />
        <MenuItem
          name='Salad'
          description='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet.'
          price='12'
          imageSrc='/sallad3.png'
        />
        <MenuItem
          name='BBQ Wings'
          description='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet.'
          price='15'
          imageSrc='/wings.png'
        />
        <MenuItem
          name='Tacos (3)'
          description='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet.'
          price='8'
          imageSrc='/tacos.png'
        />
      </div>
    </section>
  );
}
