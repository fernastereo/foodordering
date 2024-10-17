import Image from 'next/image';
export default function MenuItem({ name, description, price, imageSrc }) {
  return (
    <div className='bg-gray-300 p-4 rounded-lg text-center hover:bg-gray-200 hover:shadow-2xl hover:shadow-black/50 transition-all'>
      <div className='text-center'>
        <div className='max-h-44 block mx-auto relative h-44 w-full'>
          <Image
            src={imageSrc}
            fill={true}
            alt={''}
          />
        </div>
      </div>
      <h4 className='font-semibold text-xl my-3'>{name}</h4>
      <p className='text-gray-500 text-sm'>{description}</p>
      <button className='mt-4 bg-primary text-white rounded-full px-6 py-2'>
        Add to cart €{price}
      </button>
    </div>
  );
}
