import { createContext } from "react"


export const defaultConectionData = {
    url: "https://pokeapi.co/api/v2/pokemon/"
}

const ConnectionContext = createContext(defaultConectionData)

export default ConnectionContext;