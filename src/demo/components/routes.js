import { basename } from 'path'
const routes = []

const importAll = requireContext => requireContext.keys().forEach(key => {
	const name = basename(key, '.vue')
	const path = name === 'SpActionButton' ? '/' : '/' + name

	routes.push({
		name,
		path,
		component: requireContext(key).default
	})
});

importAll(require.context('../', false, /.vue$/))

export default routes