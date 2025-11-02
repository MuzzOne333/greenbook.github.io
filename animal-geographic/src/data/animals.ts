export type Animal = {
  id: number
  title: string
  description: string
  image: string
  category: string
}

export const animals: Animal[] = [
  {
    id: 1,
    title: "The Pantanal's jaguar",
    description: "The Pantanal wetland is Brazil's jaguar country",
    image: "/images/inpics_brazil_OM10511-Enhanced-SR-copy_ukHR_4x3.avif",
    category: "Mammals"
  },
  {
    id: 2,
    title: "The Hippo",
    description: "The Brazilian Hippo is a fascinating creature.",
    image: "/images/22-8955001_uploadsmember479708yourshot-479708-8955001jpg_yp6byshipqf2ntxys2ntam5en3p3eflutfvvbpyjwjhzlmh4iziq_4617x3073.avif",
    category: "Mammals"
  },
  {
    id: 3,
    title: "Desert Fox",
    description: "A tiny fox running through the endless dunes.",
    image: "/images/MM9392_200927_069070.avif",
    category: "Mammals"
  },
  // Добавь ещё, если хочешь!
]