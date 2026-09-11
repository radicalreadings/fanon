import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'

// Placeholder color — easy to restyle later, doesn't block anything else.
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#7B241C',
        },
      },
    },
  },
})
