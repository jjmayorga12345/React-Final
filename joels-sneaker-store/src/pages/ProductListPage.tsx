import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

function ProductListPage() {
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

    const allBrands = Array.from(new Set(products.map((p) => p.brand)));

    const filteredProducts = selectedBrand
        ? products.filter((p) => p.brand === selectedBrand)
        : products;

    return (
        <div style={{ display: 'flex' }}>
            { }
            <aside className="sidebar" style={{
                width: '200px',
                padding: '20px',
                borderRight: '1px solid #444'
            }}>

                <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Brands</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li
                        style={{ cursor: 'pointer', marginBottom: '10px', fontWeight: selectedBrand === null ? 'bold' : 'normal' }}
                        onClick={() => setSelectedBrand(null)}
                    >
                        All
                    </li>
                    {allBrands.map((brand) => (
                        <li
                            key={brand}
                            style={{ cursor: 'pointer', marginBottom: '10px', fontWeight: selectedBrand === brand ? 'bold' : 'normal' }}
                            onClick={() => setSelectedBrand(brand)}
                        >
                            {brand}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Product Grid */}
            <div style={{
                flex: 1,
                padding: '20px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '20px'
            }}>
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductListPage;
