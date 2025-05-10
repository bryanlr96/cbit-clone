import type { model } from "../types"
import CardItem from "./CardItem"




const models : model[] = [
  {
    id: 1,
    title: 'Merlin Generator',
    description: 'Generates unlimited data in just seconds with good quality.',
    category: 'The Extender',
    banner: 'fondo1.png',
    icon: 'icon'
  },
  {
    id: 2,
    title: 'Gold Generator',
    description: 'Generates 200 entries in a very short time and with great quality',
    category: 'The Extender',
    banner: 'fondo2.png',
    icon: 'icon'
  },
  {
    id: 3,
    title: 'Elixir Generator',
    description: 'Generates 50 entries of perfect quality and with a great relationship between variables',
    category: 'The Extender',
    banner: 'fondo3.png',
    icon: 'icon'
  },
  {
    id: 4,
    title: 'Oracle Generator',
    description: 'Generates 25 entries on recent and real information in just seconds',
    category: 'The Extender',
    banner: 'fondo4.png',
    icon: 'icon'
  },
  {
    id: 5,
    title: 'The Extender',
    description: 'Extends files, documents and entries, simply provide the documents you want to extend...',
    category: 'The Extender',
    banner: 'fondo5.png',
    icon: 'icon'
  },
  {
    id: 6,
    title: 'The Predictor',
    description: 'Predicts data and information from files and previous documentation, choose what you...',
    category: 'The Predictor',
    banner: 'fondo6.png',
    icon: 'icon'
  },
]

export default function Display() {
  return (
    <section className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-4 md:mt-8 mt-4">
      {models.map(model => (
        <CardItem key={model.id} model={model}/>
      ))}
    </section>
  )
}
