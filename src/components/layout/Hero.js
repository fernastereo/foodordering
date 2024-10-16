import Image from 'next/image';
import Right from '../icons/Right';
import Learn from '../icons/Learn';

export default function Hero() {
  return (
    <section className='hero'>
      <div className='py-12'>
        <h1 className='text-4xl font-semibold leading-normal'>
          Everything
          <br />
          is better
          <br />
          with &nbsp;
          <span className='text-primary'>Food</span>
        </h1>
        <p className='my-6 text-gray-500 text-sm'>
          Food is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className='flex gap-8 text-sm'>
          <button className='bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full'>
            Order Now
            <Right />
          </button>
          <button className='flex gap-2 py-2 text-gray-600 font-semibold'>
            Learn More
            <Learn />
          </button>
        </div>
      </div>
      <div className='relative'>
        <Image
          src={'/burguer1.png'}
          layout={'fill'}
          objectFit={'contain'}
          alt={'Pizza'}
        />
      </div>
    </section>
  );
}
