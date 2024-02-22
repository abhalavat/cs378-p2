import React, { useState } from 'react';
import './MenuItem.css';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ data }) => {

    const [count, setCount] = useState(0);

    return (
        <div class="row item">
            <div class="col-4 img-container">
                <img alt="Image of burrito" src={'https://abhalavat.github.io/cs378-p2/images/' + data.imageName}/>
            </div>
            <div class="col-8">
                <div class="row"><b>{data.title}</b></div>
                <div class="row"><p class="description-text">{data.description}</p></div>
                <div class="row">
                    <div class="col-6"><p>${data.price}</p></div>
                    <div class="col-2 button" onClick={() => {
                        if(count != 0) {
                            setCount(count - 1)
                        }
                    }}>-</div>
                    <div class="col-2" id="quantity">{count}</div>
                    <div class="col-2 button" onClick={() => {
                        setCount(count + 1)
                    }}>+</div>
                </div>
            </div>
      </div>
    );
};

export default MenuItem;
