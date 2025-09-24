import { JSX } from "react"

const Greeter = (props: { person: string }): JSX.Element => {
  return (
    <h1>안녕하세요? {props.person}</h1>
  )
}

export default Greeter