import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const products =
    [
        { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
        { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
        { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
        { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
        { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
        { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
    ];

function ProductRow(props) {
    return (
        <div>Product row</div>
    );
}

function ProductCategoryRow(props) {
    return (
        <div>Product category row</div>
    );
}

function SearchBar(props) {
    return (
        <div>Search bar</div>
    );
}

function ProductTable(props) {
    return (
        <div>Product table</div>
    );
}

function FilterableProductTable(props) {
    return (
        <div>Filterable product table</div>
    );
}

ReactDOM.render(
    <div>Hello</div>,
    document.getElementById('root')
);
