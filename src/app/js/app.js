import React from 'react';
import ReactDom from 'react-dom';
import ShuffleMenu from './ShuffleMenu';



document.querySelectorAll('.shuffle-menu').forEach((component)=> {
    ReactDom.render(<ShuffleMenu />, component);
});



