import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { removeFromCart } from '../redux/cartSlice';
import { useState } from 'react';
import CheckoutModal from '../components/CheckoutModal';

function CheckoutPage() {
    const dispatch = useDispatch<AppDispatch>();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
    const [showModal, setShowModal] = useState(false);

    const handleRemove = (id: number) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', padding: '40px', gap: '40px' }}>
            { }
            <div style={{ flex: '1 1 600px' }}>
                <h2 style={{ marginBottom: '20px' }}>Your Bag</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.id} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px',
                            borderBottom: '1px solid #ddd',
                            padding: '20px 0'
                        }}>
                            <img src={item.image} alt={item.name} style={{ width: '100px', borderRadius: '6px' }} />
                            <div style={{ flex: 1 }}>
                                <h4 style={{ margin: '0 0 5px 0' }}>{item.name}</h4>
                                <p style={{ margin: 0 }}>Qty: {item.quantity}</p>
                            </div>
                            <p style={{ fontWeight: 'bold' }}>${(item.price * item.quantity).toFixed(2)}</p>
                            <button
                                onClick={() => handleRemove(item.id)}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    fontSize: '18px',
                                    cursor: 'pointer'
                                }}
                            >
                                🗑️
                            </button>
                        </div>
                    ))
                )}
            </div>

            { }
            <div style={{
                flex: '1 1 300px',
                border: '1px solid #ddd',
                padding: '30px',
                borderRadius: '8px',
                height: 'fit-content'
            }}>
                <h3>Summary</h3>
                <p style={{ marginBottom: '10px' }}>Subtotal: <strong>${total}</strong></p>
                <p style={{ marginBottom: '10px' }}>Shipping: <strong>Free</strong></p>
                <p style={{ marginBottom: '20px' }}>Estimated Tax: <strong>—</strong></p>
                <h3>Total: ${total}</h3>

                {cartItems.length > 0 && (
                    <button
                        onClick={() => setShowModal(true)}
                        style={{
                            width: '100%',
                            marginTop: '20px',
                            padding: '12px',
                            backgroundColor: '#111',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '16px',
                            cursor: 'pointer'
                        }}
                    >
                        Checkout
                    </button>
                )}
            </div>

            { }
            {showModal && (
                <CheckoutModal
                    total={total}
                    onClose={() => setShowModal(false)}
                    onConfirm={() => { }}
                />
            )}
        </div>
    );
}

export default CheckoutPage;
