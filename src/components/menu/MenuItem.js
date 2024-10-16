export default function MenuItem() {
  return (
    <div className='bg-gray-300 p-4 rounded-lg text-center hover:bg-gray-200 hover:shadow-2xl hover:shadow-black/50 transition-all'>
      <div className='text-center'>
        <img
          className='max-h-36 block mx-auto'
          src='/pizza.png'
          alt='Pizza'
        />
      </div>
      <h4 className='font-semibold text-xl my-3'>Pepperoni Pizza</h4>
      <p className='text-gray-500 text-sm'>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet.</p>
      <button className='mt-4 bg-primary text-white rounded-full px-6 py-2'>Add to cart €14</button>
    </div>
  );
}
