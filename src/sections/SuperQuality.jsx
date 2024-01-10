import { shoe8 } from "../assets/images"
import { Button } from "../components"

const SuperQuality = () => {
  return (
    <section 
        className="flex flex-col lg:flex-row items-center justify-center gap-10 max-container"
        id="about-us"
        >
      <div className=" flex flex-col gap-3 lg:w-[50%] w-full">
        <h1 className="font-palanquin text-4xl font-bold text-wrap">We Provide You
          <span className="text-coral-red"> Super Quality</span> Shoes
        </h1>
        <p className="info-text">
        Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text mb-5">
        Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div>
        <Button label="View Details" />
        </div>
        </div>
        <div>
          <img src={shoe8} alt="SuperQuality-Shoe" />
        </div>
    </section>
  )
}
export default SuperQuality