import './App.css';
import MenuItem from './components/MenuItem';

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {
  return (
    <div>
      <div id="logo" class="row">
        <img alt="Restaurant logo image" src="https://cdn.document360.io/logo/c0801247-912d-4a67-9c71-168236769bb1/34a495b4dfe141428b5ccb24f3e5de82-logo-Small.png"/>
      </div>
      <div id="slogan" class="row">
        <div class="row" id="cursive"><p>Fancy food ready on campus!</p></div>
        <div class="row" id="big-slogan"><p>Check out our UT menu!</p></div>
      </div>
      <div id="list" className="row">
        {menuItems.map((menuItem) => (
          <MenuItem data={menuItem} imageName={menuItem.imageName} title={menuItem.title} description={menuItem.description} price={menuItem.price}/>
        ))}
        {/* Display menu items dynamicaly here by iterating over the provided menuItems */}
      </div>
    </div>
  );
}

export default App;
