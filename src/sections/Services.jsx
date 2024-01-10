import { ServiceCard } from "../components"
import { services } from "../constants"
import { ImAirplane } from "react-icons/im";

services

const Services = () => {
  return (
    <section className="flex max-lg:flex-wrap gap-10 max-container justify-center items-center">
      {
        services.map((service)=>(
          <ServiceCard key={service.label} {...service} icon={ImAirplane } />
        ))
      }
    </section>
  )
}
export default Services