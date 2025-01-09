import ServiceCard from "../../components/ServiceCard"
import { services } from "../../constants"

const Services = () => {
  return (
    <section className="px-8 sm:px-16 py-10" id="services">
      <div className="flex flex-col lg:flex-row justify-center gap-10 mx-auto max-w-screen-wide">
        {services.map((service, index)=>(
          <ServiceCard {...service} key={index} />
        ))}
      </div>
    </section>
  )
}

export default Services
