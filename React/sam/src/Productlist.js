const products = [
    {
        id: 1,
        name: 'GTA V',
        price: 60
    },
    {   
        id: 2,
        name: 'GTA IV',
        price: 40
    },
    {
        id: 3,
        name: 'GTA III',
        price: 20
    }
]

export default function ProductList() {
    const listItems = products.map((product) => (
      <li key={product.id} style={{ color: "red" }}>
        Name: {product.name}
        <br />
        Price: {product.price}
        <br />
      </li>
    ));
    return (
      <>
        <>
          <marquee behavior="alternate" direction="right">
            <h1>Product List</h1>
          </marquee>
        </>
        <ul>{listItems}</ul>
      </>
    );
  }

