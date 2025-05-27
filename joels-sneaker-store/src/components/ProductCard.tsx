import { Product } from '../data/products';
import { Link } from 'react-router-dom';

function ProductCard({ product }: { product: Product }) {
    return (
        <div className="card" style={{
            width: '280px',
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'left',
            transition: 'transform 0.2s, box-shadow 0.2s'
        }}>
            <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '6px' }} />
                <h3 style={{ fontSize: '18px', margin: '10px 0 5px 0' }}>{product.name}</h3>
                <p style={{ fontSize: '14px', margin: 0 }}>{product.brand}</p>
                <p style={{ fontWeight: 'bold', marginTop: '10px' }}>${product.price}</p>
            </Link>
        </div>
    );
}

export default ProductCard;
