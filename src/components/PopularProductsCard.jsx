import { star } from "../assets/icons";

const PopularProductsCard = ({imgURL,name,price}) => {
  return (
    <div className="max-sm:mt-11">
      <img src={imgURL} alt={name} className='w-[252px] h-[252px]'/>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 mt-5">
            <img src={star} alt="star"/>
            <h3 className="text-xl font-montserrat text-slate-gray">(4.5)</h3>
        </div>
        <h3 className="text-2xl font-bold font-palanquin ">{name}</h3>
        <h3 className="text-2xl font-bold font-montserrat text-coral-red">{price}</h3>
      </div>
    </div>
  )
}
export default PopularProductsCard