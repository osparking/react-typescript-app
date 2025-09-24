import { JSX } from "react"

interface GreetProp {
  person: string;
}

const Greeter = ({person} : GreetProp): JSX.Element => {
  return (
    <h1>안녕하세요 - {person}</h1>
  )
}

export default Greeter