import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
function App() {
	return (
		<div className="app">
			<Header />
			<div className="container">
				<Sidebar />
			</div>
		</div>
	);
}

export default App;
