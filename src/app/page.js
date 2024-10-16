import Hero from '../components/layout/Hero';
import HomeMenu from '../components/layout/HomeMenu';
import SectionHeaders from '../components/layout/SectionHeaders';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className='text-center my-8'>
        <SectionHeaders
          mainHeader={'About Us'}
          subHeader={'Our Story'}
        />
        <div className='text-gray-500 max-w-2xl mx-auto mt-8 flex flex-col gap-4'>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </section>
      <section className='text-center my-8'>
        <SectionHeaders
          mainHeader={'Contact us'}
          subHeader={"Don't hesitate to reach out"}
        />
        <div className='mt-8'>
          <a
            className='text-2xl underline text-gray-500'
            href='tel:+4912345678901'>
            +49 123 456 78901
          </a>
        </div>
      </section>
    </>
  );
}
