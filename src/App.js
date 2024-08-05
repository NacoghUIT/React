import React,{useState} from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import SideBar from './components/SideBar'
// import { products } from './services/mockAPI';
import en from './locales/en.json';
import vi from './locales/vi.json';

function App() {
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <SideBar />
        {/* <ProductList products={products} /> */}
      </main>
      <div>
      <div onClick={toggleLanguage}>
        {isEnglish ? vi.greeting : en.greeting}
      </div>
      <div>{isEnglish ? vi.about : en.about}</div>
      <div>{isEnglish ? vi.contact : en.contact}</div>
    </div>
    </div>
  );
}

export default App;
