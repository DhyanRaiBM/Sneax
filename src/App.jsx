import { 
   PopularProducts,
   Hero, 
   Footer, 
   Services, 
   Subscribe, 
   SuperQuality, 
   SpecialOffer, 
  } from "./sections"

import {Nav} from "./components"

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b' id="home">
        <Hero />
      </section>
      <section className='padding' id="products">
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue padding'>
      <Subscribe />
      </section>
      <section className=' bg-black padding-x padding-t pb-8' id="contact-us">
        <Footer />
      </section>
    </main>
  );
};

export default App;
