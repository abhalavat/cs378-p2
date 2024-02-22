import React from 'react';
import './Footer.css';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const Header = ({ update, subtotal, quantities, data }) => {

    return (
        <div id="container">
            <div class="row">
                <div class="col-8">Subtotal: {subtotal}</div>
                <div class="col-2"><button class="button" onClick={() => {
                    let count = 0
                    for (let i = 0; i < quantities.length; i++) {
                        count += quantities[i]
                    }
                    if (count == 0) {
                        alert("No items in cart")
                    } else {
                        let message = "Order placed!\n"
                        for (let i = 0; i < quantities.length; i++) {
                            if (quantities[i] > 0) {
                                message += quantities[i] + " " + data[i].title + " "
                            }
                        }
                        alert(message)
                    }
                }}>Order</button></div>
                <div class="col-2"><button class="button" onClick={update}>Clear</button></div>
            </div>
        </div>
    );
};

export default Header;
