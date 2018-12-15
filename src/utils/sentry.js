import Vue from 'vue'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

const options = {
  release: process.env.VERSION,
  ignoreUrls: [
    // Chrome extensions
    /extensions\//i,
    /^chrome:\/\//i,
    // Firefox extensions
    /^resource:\/\//i,
    // Ignore Google flakiness
    /\/(gtm|ga|analytics)\.js/i
  ]
}

Raven
  .config('https://a17281268f214dc48923017cd9d5a130@sentry.io/1354326', options)
  .addPlugin(RavenVue, Vue)
  .install()

Raven.setUserContext({
  version: process.env.VERSION,
  location: window.location
})
