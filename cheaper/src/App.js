import React from 'react';
import './App.css';
import FormClient from "./components/formClient.js";
import NewProviderFormCreate from "./components/newProviderForm.js";
import ProductListHome from "./components/productListHome.js";
import Home from "./components/Home.js";

function App() {


	return (
		<div className="App">
			<NewProviderFormCreate />
			<ProductListHome />
			<Home />
      <FormClient />
		</div>
	);
}

//En esta sesión del código sólo se está renderizando el encabezado del home, falta anexarle todo lo de las rutas.

export default App;
