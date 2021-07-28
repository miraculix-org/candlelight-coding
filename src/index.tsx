/**
 * @license
 *
 * SPDX-FileCopyrightText: Copyright © 2021 snek.at
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://snek.at/license
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {ParallaxProvider} from 'react-scroll-parallax'

import App from './App'
import {store} from './store'

import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder"



const shit = new CKFinder("")

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
)
