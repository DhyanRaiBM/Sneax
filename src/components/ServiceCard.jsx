const ServiceCard = ({icon:Icon,label,subtext}) => {
  return (
    <div className="flex-1 min-w-[306px] max-w-[363px] px-12 py-16 flex flex-col gap-3 rounded-3xl shadow-3xl">
        <figure className="mb-2">
            {<Icon size={28} className="text-coral-red" />}
        </figure>
        <h2 className="text-3xl font-palanquin font-bold text-wrap">{label}</h2>
        <h3 className="info-text">{subtext}</h3>

    </div>
  )
}
export default ServiceCard
