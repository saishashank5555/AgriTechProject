import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";
import productsData from "../../api/products.json";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [catFilter, setCatFilter] = useState("All");
  const [searchQ, setSearchQ] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    // use local JSON as source
    setProducts(productsData);
  }, []);

  // filtered & searched products
  const filtered = products
    .filter(p => catFilter === "All" || p.category === catFilter)
    .filter(p => p.name.toLowerCase().includes(searchQ.toLowerCase()) || p.description.toLowerCase().includes(searchQ.toLowerCase()));

  // pagination
  const total = filtered.length;
  const pages = Math.ceil(total / pageSize);
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <section className="ud-products-wrapper">
      <div className="ud-controls">
        <ProductFilters
          categories={["All", ...Array.from(new Set(products.map(p => p.category)))]}
          selected={catFilter}
          onChange={(c) => { setCatFilter(c); setPage(1); }}
          onSearch={(q) => { setSearchQ(q); setPage(1); }}
        />
      </div>

      <div className="product-grid">
        {paged.length === 0 ? (
          <div className="empty">No products found.</div>
        ) : (
          paged.map(p => <ProductCard key={p.id} product={p} />)
        )}
      </div>

      <div className="ud-pagination">
        <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</button>
        <span>Page {page} / {pages || 1}</span>
        <button onClick={() => setPage(p => Math.min(pages || 1, p + 1))} disabled={page === pages || pages === 0}>Next</button>
      </div>
    </section>
  );
};

export default ProductList;
