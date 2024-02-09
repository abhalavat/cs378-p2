import React from 'react';
import './Header.css';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const Header = () => {
    return (
        <div>
            <div id="logo" class="row">
                <img alt="Restaurant logo image" src="https://cdn.document360.io/logo/c0801247-912d-4a67-9c71-168236769bb1/34a495b4dfe141428b5ccb24f3e5de82-logo-Small.png"/>
            </div>
            <div id="slogan" class="row">
                <div class="row" id="cursive"><p>Fancy food ready on campus!</p></div>
                <div class="row" id="big-slogan"><p>Check out our UT menu!</p></div>
            </div>
        </div>
    );
};

export default Header;
