import { JSX } from "react"

interface GreetProp {
  person: string;
}

const Greeter = (props: GreetProp): JSX.Element => {
  return (
    <h1>안녕하세요? {props.person}</h1>
  )
}

export default Greeter