import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { AppDispatch } from '../redux/store';

function ProductDetailPage() {
    const { id } = useParams();
    const productId = parseInt(id || '', 10);
    const product = products.find((p) => p.id === productId);
    const dispatch = useDispatch<AppDispatch>();

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            padding: '40px',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            { }
            <div style={{ flex: '1 1 400px', textAlign: 'center' }}>
                <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', maxWidth: '450px', borderRadius: '12px' }}
                />
            </div>

            { }
            <div style={{ flex: '1 1 400px', maxWidth: '500px' }}>
                <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>{product.name}</h2>
                <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px' }}>{product.description}</p>
                <h3 style={{ fontSize: '22px', marginBottom: '30px' }}>${product.price}</h3>
                <button
                    onClick={handleAddToCart}
                    style={{
                        backgroundColor: '#111',
                        color: '#fff',
                        padding: '12px 24px',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '16px'
                    }}
                >
                    Add to Cart 🛒
                </button>
            </div>
        </div>
    );
}

export default ProductDetailPage;
