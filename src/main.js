import Vue from 'vue/dist/vue.js'
import App from './demo/components/App.vue'
import VueRouter from 'vue-router'

// import SpProvider from '@/components/SpProvider'
// import SpActionButton from '@/components/SpActionButton'
// import SpActionGroup from '@/components/SpActionGroup'
// import SpButton from '@/components/SpButton'
// import SpButtonGroup from '@/components/SpButtonGroup'
// import SpDivider from '@/components/SpDivider'
// import SpHeading from '@/components/SpHeading'
// import SpIcon from '@/components/SpIcon'
// import SpLink from '@/components/SpLink'
// import SpQuickActions from '@/components/SpQuickActions'
// import SpQuickActionsOverlay from '@/components/SpQuickActionsOverlay'
// import SpSideNav from '@/components/SpSideNav'
// import SpSideNavItem from '@/components/SpSideNavItem'
// import SpSideNavHeading from '@/components/SpSideNavHeading'
// import SpTextField from '@/components/SpTextField'
// import SpSearchField from '@/components/SpSearchField'
// import SpCheckbox from '@/components/SpCheckbox'
// import SpCheckboxGroup from '@/components/SpCheckboxGroup'

// Vue.component(SpProvider.name, SpProvider)
// Vue.component(SpActionButton.name, SpActionButton)
// Vue.component(SpActionGroup.name, SpActionGroup)
// Vue.component(SpButton.name, SpButton)
// Vue.component(SpButtonGroup.name, SpButtonGroup)
// Vue.component(SpHeading.name, SpHeading)
// Vue.component(SpDivider.name, SpDivider)
// Vue.component(SpIcon.name, SpIcon)
// Vue.component(SpLink.name, SpLink)
// Vue.component(SpQuickActions.name, SpQuickActions)
// Vue.component(SpQuickActionsOverlay.name, SpQuickActionsOverlay)
// Vue.component(SpSideNav.name, SpSideNav)
// Vue.component(SpSideNavItem.name, SpSideNavItem)
// Vue.component(SpSideNavHeading.name, SpSideNavHeading)
// Vue.component(SpTextField.name, SpTextField)
// Vue.component(SpSearchField.name, SpSearchField)
// Vue.component(SpCheckbox.name, SpCheckbox)
// Vue.component(SpCheckboxGroup.name, SpCheckboxGroup)

const importAll = requireContext => requireContext.keys().forEach(key => {
  const component = requireContext(key).default
	Vue.component(component.name, component)
});

importAll(require.context('@/components/', false, /.vue$/))


import DemoTitle from '@/demo/components/DemoTitle'
import PageTitle from '@/demo/components/PageTitle'
Vue.component(DemoTitle.name, DemoTitle)
Vue.component(PageTitle.name, PageTitle)

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
