import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
    iconfont: 'md',
    theme: {
        primary: '#003246', // LT dark blue
        secondary: '#9bd64f', // LT green
        accent: '#009DE2', // LT strong blue
        error: '#e85c46', // LT red
        info: '#ecc132', // LT yellow
        success: '#73e6e6', // LT light blue
        warning: '#ec7f7f', // LT light red
    },
})
