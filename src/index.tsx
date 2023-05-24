// preambel
import 'core-js/es/reflect';
import 'core-js/stable/reflect';
import 'core-js/features/reflect';
import 'zone.js';
// preambel for angular 16
import 'core-js/proposals/reflect-metadata';
import '@angular/compiler';
// others
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createInstance, Piral } from 'piral-core';
import { layout, errors } from './layout';
import { getPlugins } from './plugins';

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/sample';

const instance = createInstance({
  state: {
    components: layout,
    errorComponents: errors,
  },
  plugins: getPlugins('de'),
  requestPilets() {
    return fetch(feedUrl)
      .then((res) => res.json())
      .then((res) => res.items);
  },
});

const root = createRoot(document.querySelector('#app'));

root.render(<Piral instance={instance} />);
