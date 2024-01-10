import {PopularProductsCard} from "../components"
import { products } from "../constants"



const PopularProducts = () => {
  return (
    <section className="max-container flex flex-col">
      <h1 className="font-palanquin text-4xl font-bold text-wrap">
      Our <span className="text-coral-red">Popular</span> Products
      </h1>
      <p className="font-montserrat font-lg text-slate-gray lg:max-w-lg mt-5">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      <div className="flex mt-10 flex-wrap flex-1 gap-5 max-xl:items-center max-xl:justify-center">
          {
            products.map((product,index)=>(
              <PopularProductsCard
              key={index} 
              {...product}
              />
            ))
          }
      </div>
    </section>
    
  )
}
export default PopularProducts

