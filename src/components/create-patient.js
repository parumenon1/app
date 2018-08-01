/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element'
import { updateMetadata } from 'pwa-helpers/metadata.js';
import { PageViewElement } from './page-view-element.js';
import '@lh-toolkit/fhir-birth-date/fhir-birth-date.js'

class CreatePatient extends PageViewElement {
  _render() {
    return html`
      <style>
        :host {
          padding: 16px;
          line-height: 1.5;
        }
        .note{
        background-color: #e7f3fe;
        border-left: 6px solid #2196F3;
        padding: 16px;
        }
       
      </style>
      <div class="note">
      <input class="input"  id="name" disabled placeholder="Name">
       <input class = "input" class="id" id="name" disabled placeholder="Identifier"><br>
       <input type ="datetime-local" id="name" disabled>
      </div>
    `;
  }
}

window.customElements.define('create-patient', CreatePatient);
