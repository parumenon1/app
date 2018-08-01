/**
 @license
 Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
/*
import { LitElement, html } from '@polymer/lit-element';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import { menuIcon, backIcon, accountIcon } from './book-icons.js';
import './snack-bar.js';
import './book-input-decorator.js';
import './speech-mic.js';
import './book-home.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { navigate, updateLocationURL, updateOffline, updateLayout, showSnackbar, updateDrawerState } from '../actions/app.js';
import { signIn, signOut, fetchUser } from '../actions/auth.js';*/
import {LitElement, html} from '@polymer/lit-element';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import '@polymer/iron-icons/image-icons.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import {connect} from 'pwa-helpers/connect-mixin.js';
import {installRouter} from 'pwa-helpers/router.js';
import {store} from '../store.js';
import {
    navigate,
    updateLocationURL,
    updateOffline,
    updateLayout,
    showSnackbar,
    updateDrawerState
} from '../actions/app.js';

class BookApp extends connect(store)(LitElement) {
    _render({_query, _page}) {

        /*// Anything that's related to rendering should be done in here.

        // True to hide the menu button and show the back button.
        const hideMenuBtn = _page === 'detail' || _page === 'viewer';
        // True to hide the input.
        const hideInput = !_page || _page === 'favorites' || _page === 'about' || _page === '404';
        // True to make the search input aligns at the top inside the header instead of inside the main content.
        const inputAtTop = ('ontouchstart' in window || !_wideLayout) || (_page === 'explore' && _query) || _page === 'detail' || _page === 'viewer';
        // back button href
        const backHref = _page === 'detail' ?
            (_lastVisitedListPage === 'favorites' ? '/favorites' : `/explore?q=${_query}`) : `/detail/${_bookId}`;
        // query
        const query = _page === 'home' ? '' : _query;*/
        const inputAtTop = (_page === 'CreatePatient' && _query)
        return html`
    <style>
      :host {
          --app-primary-color: #ED820E;
          --app-secondary-color: black;
          --app-drawer-width: 200px;
          display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }
       app-drawer {
     
      --app-drawer-content-container: {
        background-color: #f9ce9f;
      }
    }

        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
          height: 50px;
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
          margin: 0 10px;
        }
        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }
        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }
    </style>
    
 <app-drawer-layout fullbleed="" narrow="{{narrow}}">
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <app-toolbar><img src="./../images/librehealth.png" height="50" width="180"></app-toolbar>
          <a selected?="${_page === 'createPatient'}" href="../../createPatient">Create Patient</a>
            <!--<a name="createPatient" href="[[rootPath]]createPatient">Create Patient</a>
            <a name="searchPatient" href="[[rootPath]]searchPatient">Search Patient</a>
            <a name="activeVisits" href="[[rootPath]]activeVisits">Active Visits</a>
            <a name="scheduleAppointment" href="[[rootPath]]scheduleAppointment">Schedule Appointment</a>
            <a name="manageUsers" href="[[rootPath]]manageUsers">Manage Users</a>
            <a name="manageLocations" href="[[rootPath]]manageLocations">Manage Locations</a>
            <a name="report" href="[[rootPath]]report">Report</a>
            <a name="settings" href="[[rootPath]]settings">Settings</a>-->
           
        </app-drawer>
        <main role="main" class="main-content">
      <create-patient class="_page" active?="${_page === 'createPatient'}"></create-patient>
        </main>
        <app-header-layout has-scrolling-region="">
          <app-header slot="header" condenses="" reveals="" effects="waterfall">
            <app-toolbar>
             
              <paper-icon-button src="./../images/logo.png" drawer-toggle=""></paper-icon-button>
              <paper-icon-button icon="menu" drawer-toggle=""></paper-icon-button>
              <div main-title>
              </ul>
              </div>
              <paper-icon-button icon="home" on-click=${() => this.goHome()}></paper-icon-button>
              <paper-icon-button icon="social:person" on-click=${() => this.goProfile()}></paper-icon-button>
              <paper-icon-button icon="arrow-back" on-click=${() => this.goBack()}></paper-icon-button>
            </app-toolbar>
          </app-header>
           <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <create-patient name="createPatient"></create-patient>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
    `;
    }

    static get properties() {
        return {
            _page: String,
            _query: String
        }
    }

    _didRender(props, changed) {
        if ('_page' in changed) {
            window.scrollTo(0, 0);
        }
    }

    _stateChanged(state) {
        this._page = state.app.page;
        this._lazyResourcesLoaded = state.app.lazyResourcesLoaded;
        this._subTitle = state.app.subTitle;
        this._lastVisitedListPage = state.app.lastVisitedListPage;
        this._offline = state.app.offline;
        this._wideLayout = state.app.wideLayout;
        this._drawerOpened = state.app.drawerOpened;
        this._snackbarOpened = state.app.snackbarOpened;
        this._authInitialized = state.auth.initialized;
        this._user = state.auth.user;
        this._query = state.books && state.books.query || '';
        this._bookId = state.book && state.book.id;
    }


}

window.customElements.define('book-app', BookApp);
