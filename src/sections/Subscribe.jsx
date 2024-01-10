import { Button } from "../components"

const Subscribe = () => {
  return (
    <div className="flex gap-10 max-container py-5 max-md:flex-col">
      <div className="flex-1">
        <h1 className="font-palanquin text-4xl font-bold text-wrap leading-[67px]">Sign Up for
            <span className="text-coral-red"> Updates </span> & Newsletters
        </h1>
      </div>
      <div className="lg:w-[40%]">
        <div className="flex-1 flex max-md:gap-2 md:border-2 justify-between rounded-full py-3 px-3 md:bg-white max-sm:flex-col">
          <input type="text" placeholder="example@email.com" className="input "/>
          <div>
          <Button label="Sign Up" fullWidth />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Subscribe