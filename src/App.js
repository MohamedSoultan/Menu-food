import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { data } from './data';
import Header from './components/Header';
import Categories from './components/Categories';
import Cards from './components/Cards';
import SerachFilters from './components/SerachFilters';
import { useState } from 'react';
const App = () => {
  
  const animated = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        // delay: 0.3,
        stiffness: 150,
      },
    },
  };
  // import data 
  const [meal, setMeal] = useState(data);
  // filter Categories from array 
  const allCategory = ['All Meals',...new Set(data.map((ca) => ca.category))];
  // func all meals btn
  const serachByFilter = (cat) => {
    if (cat === 'All Meals') {
      setMeal(data);
    } else {
      const newArr = data.filter((item) => item.category === cat);
      setMeal(newArr);
    }
  };
  return (
    <div>
      <SerachFilters />
      <Header />
      <Container>
        <Categories serachByFilter={serachByFilter} allCategory={allCategory} animated={animated} />
        <Cards meal={meal} animated={animated} />
      </Container>
    </div>
  );
};

export default App;
