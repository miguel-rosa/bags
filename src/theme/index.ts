import { extendTheme, theme as charkaTheme } from '@chakra-ui/react'
export default extendTheme({
  colors: {

    border: {
      color: '#1a1a1a'
    },
    description: {
      color: 'rgb(142, 142, 142)'
    },
    title: {
      color: 'white'
    },
    button: {
      background: 'rgb(30, 30, 30)'
    },
    tooltip: {
      color: '#1a1a1a',
      background: '#f5f5f5'
    },
    card: {
      background: 'linear-gradient(180deg, #020202, #000000)'
    }

  },
  fonts: {
    ...charkaTheme.fonts,
    heading: 'Poppins, -apple-system, BlinkMacSystemFont, sans-serif',
    body: 'Poppins, -apple-system, BlinkMacSystemFont, sans-serif'
  },
  styles: {
    global: {
      'html, body': {
        padding: 0,
        margin: 0,
        bgGradient: 'linear-gradient(180deg, #020202, #000000)'

      }
    }
  }
})
