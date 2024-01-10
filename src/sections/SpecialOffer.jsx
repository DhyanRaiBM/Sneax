import { arrowRight } from "../assets/icons"
import {offer} from "../assets/images"
import { Button } from "../components"

const SpecialOffer = () => {
  return (
    <section className="flex max-lg:flex-col-reverse gap-10 max-container ">
      <figure className="flex-1 flex max-lg:justify-center">
        <img src={offer} alt="Offer image" />
      </figure>
      <div className="flex-1 flex flex-col gap-5 justify-center">
        <h1 className="font-palanquin text-4xl font-bold text-wrap">
          <span className="text-coral-red">Special</span> Offer</h1>
        <p className="info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className="info-text">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="mt-4 flex max-sm:flex-col gap-4">
          <Button label="Shop Now " iconURL={arrowRight}/>
          <Button label="Learn More" 
                  textColor="text-slate-gray" 
                  borderColor="text-slate-gray"
                  backgroundColor="transparent"
                  />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer