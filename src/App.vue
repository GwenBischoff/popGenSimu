<template>
  <div id="app">
    <div id="main"
         :class="{'sideBarActive ': displaySidebar , 'mainViewSideBarOut': !displaySidebar}"
         class="container-fluid"
    >
      <b-row>
        <b-col>
          <b-row>
            <b-col>
              <div
                id="settingsIcon"
                :class="{'settingsIconRotate': displaySidebar}"
                class="float-right"
                @click="displaySidebar = !displaySidebar">
                <icon
                  id="icon"
                  name="cog"/>
              </div>
            </b-col>
          </b-row>
          <MainViewComponent
            :displaySidebar="displaySidebar"/>
        </b-col>
      </b-row>
    </div>

    <nav id="sidebar"
         :class="{'active': displaySidebar, 'displayNone': !displaySidebar}"
         class="container-fluid"
    >
      <div class="sidebarClose">
        <b-row>
          <b-col>
            <div
              class="closeButton"
              @click="displaySidebar = !displaySidebar">
              <icon
                class="times"
                name="times"
              />
            </div>
          </b-col>
        </b-row>
      </div>
      <b-row>
        <b-col
          class="transformSidebar"
          data-toggle="collapse">
          <SettingsComponent/>
        </b-col>
      </b-row>
    </nav>
  </div>
</template>

<script>
import SettingsComponent from './components/SettingsComponent';
import MainViewComponent from './components/MainViewComponent';

import {store} from './store/store';
import FaIcon from 'vue-awesome/components/Icon';

export default {
  name: 'App',
  components: {
    FaIcon,
    SettingsComponent,
    MainViewComponent
  },
  data () {
    return {
      displaySidebar: false
    };
  },
  store: store
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #3a9284;
    display: flex;
    align-items: stretch;
  }

  #sidebar {
    width: 0;
    opacity: 0;
    overflow: hidden;
    padding: 0px;
    position: relative;
    transition: all 700ms;
  }
  #main{
    transition: all 700ms;
  }

  #main.sideBarActive {
    width: 55%;
    transition: all 700ms;
  }
  #sidebar.active {
    opacity: 1;
    width: 45%;
    transition: all 700ms;
  }
  @media (max-width: 1200px) {
    #main.sideBarActive {
      width: 50%;
      transition: all 700ms;
    }
    #sidebar.active {
      opacity: 1;
      width: 50%;
      transition: all 700ms;
    }
  }
  icon.times{
    height: 40px;
  }
  .sidebarClose{
    display: none;
    text-align: right;
  }

  @media (max-width: 768px) {
    .sidebarClose{
      display: block;
    }
    #sidebar.active {
      width: 100%;
    }
    #main.sideBarActive{
      width: 0;
      opacity: 0;
      overflow: hidden;
      padding: 0px;
      position: relative;
    }
  }
  #icon {
    padding-top: 5px;
    width: auto;
    height: 2.3em;
    max-width: 100%;
    max-height: 100%;
    color: #3a9284;
    border-color: white;
  }

  .settingsIconRotate {
    transform: rotate(-180deg);
  }

  #settingsIcon {
    overflow: hidden;
    transition-duration: 1500ms;
    transition-property: transform;
  }

</style>
