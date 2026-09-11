import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'

// Palette estimated from the event flyer (cream background, rust/terracotta
// accent) - close but not a pixel-perfect eyedrop, easy to nudge here.
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          background: '#F1ECDF',
          surface: '#F1ECDF',
          primary: '#BC4A28',
          'on-background': '#1C1917',
          'on-surface': '#1C1917',
        },
      },
    },
  },
})
