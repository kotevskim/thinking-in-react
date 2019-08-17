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

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleIsStockOnlyChange = this.handleIsStockOnlyChange.bind(this);
  }

  handleFilterTextChange(event) {
    this.props.onFilterTextChange(event);
  }

  handleIsStockOnlyChange(event) {
    this.props.onIsStockOnlyChange(event);
  }

  render() {
    return (
      <div>
        <input type='text' name='filter'
          value={this.props.filterText}
          onChange={this.handleFilterTextChange} /><br />
        <input type="checkbox" name="inStock"
          value={this.props.isStockOnly}
          onChange={this.handleIsStockOnlyChange} />In Stock
      </div>
    )
  }
}

function ProductTable(props) {

  const byCategory = {};
  props.products
    .filter(p => {
      const filter1 = props.filterText !== '' ? p.name.toLowerCase().includes(props.filterText) : true;
      const filter2 = props.isStockOnly === true ? p.stocked === true : true;
      return filter1 && filter2
    })
    .map(p => {
      byCategory[p.category] = byCategory[p.category] || [];
      byCategory[p.category].push(p);
    });

  return (
    <div>
      <div className='row'>
        <span>Name</span>
        <span>Price</span>
      </div>
      {
        Object.keys(byCategory)
          .map(category =>
            <div>
              <ProductCategoryRow category={category} />
              {
                byCategory[category]
                  .map(product => <ProductRow name={product.name} price={product.price} />)
              }
            </div>
          )
      }
    </div>
  );
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterText: '', isStockOnly: false }

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleIsStockOnlyChange = this.handleIsStockOnlyChange.bind(this);
  }

  handleFilterTextChange(event) {
    this.setState({ filterText: event.target.value });
  }

  handleIsStockOnlyChange(event) {
    this.setState({ isStockOnly: event.target.checked });
  }

  render() {
    return (
      <div className='filterable-table'>
        <SearchBar
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onIsStockOnlyChange={this.handleIsStockOnlyChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText.toLowerCase()}
          isStockOnly={this.state.isStockOnly} />
      </div>
    );
  }
}

ReactDOM.render(
  <FilterableProductTable products={productList} />,
  document.getElementById('root')
);
