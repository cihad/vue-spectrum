<template>
  <sp-provider>
    <div class="flexContainer">
      <div class="sideBar">
        <div class="spectrumSidebar">
          <div class="header">
            <router-link to="/" class="headerLink">
              <div class="logoContainer">
                <div class="title">
                  <img src="@/assets/adobe_logo_spectrum_site.svg" class="logo" />
                  <div>
                    <sp-heading :level="2" size="M" class="title-Text">Vue Spectrum</sp-heading>
                  </div>
                </div>
              </div>
            </router-link>

            <div class="searchContainer">
              <sp-search-field placeholder="Search" />
            </div>
          </div>
          <div class="navigation">
            <nav class="spectrum-SideNav">
              <sp-side-nav style="width: 208px; margin-bottom: 80px;">
                <template v-for="route in $router.options.routes">
                  <sp-side-nav-item :key="route.path" :selected="$route.path == route.path">
                    <router-link :to="route.path">{{ route.name }}</router-link>
                  </sp-side-nav-item>
                </template>
              </sp-side-nav>
            </nav>
          </div>
        </div>
      </div>

      <div class="mainContainer">
        <router-view></router-view>
      </div>
    </div>
  </sp-provider>
</template>

<script>
import VueRouter from 'vue-router'
import routes from './routes'

export default {
  router: new VueRouter({
    routes
  }),
  mounted() {
    // debugger // eslint-disable-line
  }
}
</script>

<style>
@import "~normalize.css/normalize.css";

.flexContainer {
  padding-left: 248px;
}

.sideBar {
  z-index: 12;
  position: fixed;
  left: 0px;
  top: 0px;
  bottom: 0px;
  width: 256px;
  transition: none;
}

.spectrumSidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: var(--spectrum-global-color-gray-75);
}

.spectrum--light .flexContainer {
  background: #fff;
}

.flexContainer .mainContainer {
  padding: 40px 52px 0px 52px;
  max-width: 1080px;
}
@media only screen and (min-width: 1280px) {
  .mainContainer {
    padding-right: 32px;
    padding-left: 32px;
  }
}

.mainContainer {
  margin-right: auto;
  margin-left: auto;
  min-width: 304px;
  padding-right: 16px;
  padding-left: 16px;
  padding-bottom: 100px !important;
}

.header {
  padding: 30px 24px 24px 24px;
  width: 256px;
}

.headerLink {
  text-decoration-line: none !important;
  display: block;
}

.logoContainer {
  outline: none;
  padding: 1px 2px 2px 2px;
  border-radius: 4px;
  margin-top: -2px;
}

.title {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.spectrum--light .title-Text {
  color: rgb(44, 44, 44);
}

.title-Text {
  margin: 0;
  /* font-size: 20px; */
}

.logo {
  width: 36px;
  height: 32px;
  display: block;
  margin-right: 16px;
  padding-top: 1px;
}

.searchContainer {
  margin-top: 24px;
}

.spectrumSearch {
  display: inline-block;
  position: relative;
}

.navigation {
  padding: 0px 24px;
  flex: 1;
  flex-grow: 1;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;
}

.spectrum--medium .react-spectrum-SideNav {
  width: 240px;
}
</style>