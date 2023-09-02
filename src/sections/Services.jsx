import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
  return (
    <section className="max-container flex  flex-wrap justify-center gap-10">
      {services.map((service)=>{
        return <ServiceCard key={service.subtext} {...service} />
      })}
    </section>
  )
}

export default Services
