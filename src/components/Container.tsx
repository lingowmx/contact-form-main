import { ReactNode } from "react"
interface Containerprops{
  children: ReactNode
}

export const Container = ({children}: Containerprops) => {
  return (
    <section className="bg-white w-80 rounded-xl flex flex-col justify-center items-center">
      {children}
    </section>
  )
}
