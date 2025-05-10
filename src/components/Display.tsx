import CardItem from "./CardItem"

const list = [1,2,3,4,5,6]

export default function Display() {
  return (
    <section className="w-full grid grid-cols-4 gap-3">
      {list.map(item => (
        <CardItem key={item}/>
      ))}
    </section>
  )
}
