import * as React from 'react'
import '../box-styles.css'

const Box = ({size, style, children}) => (
  <div className={`box box--${size}`} style={{fontStyle: 'italic', ...style}}>
    {children}
  </div>
)

/*
  This is what I originally had, but then Kent pointed out that in a real reusable component, we wouldn't want to replace style entirely

  Where <Box /> also had style={{backgroundColor}}. It would have completely replaced customisation

  He refers to this as "The style is an implementation detail"
*/
// const smallBox = (
//   <Box backgroundColor={'lightblue'} size={'small'}>
//     small lightblue box
//   </Box>
// )
const smallBox = (
  <Box style={{backgroundColor: 'lightblue'}} size={'small'}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box style={{backgroundColor: 'pink'}} size={'medium'}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box style={{backgroundColor: 'orange'}} size={'large'}>
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
