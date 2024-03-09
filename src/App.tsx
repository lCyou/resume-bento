import { FC } from "react"
import { Grid, GridItem } from "@yamada-ui/react"

const App: FC = () => {
  // const girdLayout = useBreakpointValue({
  //   base: ,
  // })

  return(
    <Grid
  templateAreas={`
    "one one two three"
    "four five two six"
    "four seven seven eight"
  `}
  // templateAreas={girdLayout}
  gap="md"
>
  <GridItem area="one" w="full" minH="4xs" rounded="md" bg="primary" />
  <GridItem area="two" w="full" minH="4xs" rounded="md" bg="secondary" />
  <GridItem area="three" w="full" minH="4xs" rounded="md" bg="warning" />
  <GridItem area="four" w="full" minH="4xs" rounded="md" bg="danger" />
  <GridItem area="five" w="full" minH="4xs" rounded="md" bg="primary" />
  <GridItem area="six" w="full" minH="4xs" rounded="md" bg="secondary" />
  <GridItem area="seven" w="full" minH="4xs" rounded="md" bg="warning" />
  <GridItem area="eight" w="full" minH="4xs" rounded="md" bg="danger" />
</Grid>
  )
}

export default App