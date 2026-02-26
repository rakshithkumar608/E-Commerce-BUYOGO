import { useEffect, useState } from "react";
import { getProducts } from "../../../api/product";

const MenCollection = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const fetchProducts = async () => {
    const data = await getProducts({
      category: "men",
      sort: "low",
      page,
      limit: 8,
    });

    setProducts(data.products);
    setTotalPages(data.totalPages);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Men Collection</h2>

      <div className="grid grid-cols-4 gap-6">
        {products.map((item) => (
          <div key={item._id} className="bg-white p-4 shadow rounded">
            <img src={item.image} alt={item.name} />
            <h3 className="font-semibold mt-2">{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>

        <span>Page {page} of {totalPages}</span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MenCollection;