import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const productList =
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
    <div className='product-item row'>
      <span>{props.name}</span>
      <span>{props.price}</span>
    </div>
  );
}

function ProductCategoryRow(props) {
  return (
    <div className='category-heading'>{props.category}</div>
  );
}

function SearchBar(props) {
  return (
    <div>
      <input type='text' name='filter' /><br />
      <input type="checkbox" name="inStock" />In Stock
        </div>
  );
}

function ProductTable(props) {

  const byCategory = {};
  props.products.map(p => {
    byCategory[p.category] = byCategory[p.category] || [];
    byCategory[p.category].push(p);
  });

  return (
    <div>
      {
        Object.keys(byCategory).map(category =>
          (
            <div>
              <div className='row'>
                <span>Name</span>
                <span>Price</span>
              </div>
              <ProductCategoryRow category={category} />
              {
                byCategory[category].map(product =>
                  <ProductRow name={product.name} price={product.price} />
                )
              }
            </div>
          )
        )
      }
    </div>
  );
}

function FilterableProductTable(props) {
  return (
    <div className='filterable-table'>
      <SearchBar />
      <ProductTable products={props.products} />
    </div>
  );
}

ReactDOM.render(
  <FilterableProductTable products={productList} />,
  document.getElementById('root')
);
