import {configure} from '@storybook/react'
import debug from 'debug'
const dbg = debug('story:config')

function loadStories() {
  dbg('load...')
  require('../stories/index.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)
