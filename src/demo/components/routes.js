import SpActionButton from '../SpActionButton'
import SpActionGroup from '../SpActionGroup'
import SpButton from '../SpButton'
import SpButtonGroup from '../SpButtonGroup'
import SpLink from '../SpLink'
import SpQuickActions from '../SpQuickActions'
import SpSideNav from '../SpSideNav'
import SpTextField from '../SpTextField'
import SpSearchField from '../SpSearchField'

export default [
	{
		name: "SpActionButton",
		path: '/',
		component: SpActionButton,
	},
	{
		name: "SpActionGroup",
		path: '/sp-action-group',
		component: SpActionGroup,
	},
	{
		name: "SpButton",
		path: '/sp-button',
		component: SpButton,
	},
	{
		name: "SpButtonGroup",
		path: '/sp-button-group',
		component: SpButtonGroup,
	},
	{
		name: "SpLink",
		path: '/sp-link',
		component: SpLink,
	},
	{
		name: "SpQuickActions",
		path: '/sp-quick-actions',
		component: SpQuickActions,
	},
	{
		name: "SpSideNav",
		path: '/sp-side-nav',
		component: SpSideNav,
	},
	{
		name: "SpTextField",
		path: '/sp-text-field',
		component: SpTextField,
	},
	{
		name: "SpSearchField",
		path: '/sp-search-field',
		component: SpSearchField,
	},
]