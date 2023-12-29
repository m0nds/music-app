import SectionHeader from "../SectionHeader"
import EventBox from "./EventBox"

const getEvents = async () => {
    const res = await fetch('http://localhost:4000/events')
    return res.json()
}

const Events = async () => {
    const events = await getEvents()
    console.log(events)
  return (
    <section className="section" id="tours">
        <div className="container mx-auto">
            <SectionHeader pretitle="World Tour" title="Upcoming Events"/>
            {/* Event Box */}
            <EventBox events={events}/>
        </div>
    </section>
  )
}

export default Events