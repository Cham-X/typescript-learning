import { ReactNode } from "react";

type SectionProps = {
    title?: string,
    children:ReactNode
}

export default function Section({children,title = "My sub-Header"}:SectionProps) {
  return (
      <section>
          <h2>{title}</h2>
          <p>{ children}</p>
    </section>
  )
}
