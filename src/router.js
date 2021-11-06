import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Product from "./pages/Product";
Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			component: Home,
			name: "Home",
		},
		{
			path: "/services",
			component: Services,
			name: "Serviços",
		},
		{
			path: "/contact",
			component: Contact,
			name: "Contato",
		},
		{
			path: "/products",
			component: Products,
			name: "Produtos",
		},
		{
			path: "/products/:product",
			component: Product,
		},
	],
});
