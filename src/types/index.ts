export type model = {
  id: number,
  title: string,
  description: string,
  category: string,
  banner: number,
  icon: string
}

export type category = {
  title: string,
  subitle?: string,
  priority: number
}

export type link = {
  title:string,
  icon: string,
  priority: number,
  category: category,
  slug: string
}