import ReactDOM from 'react-dom';
import { useState } from 'react';

interface CheckoutModalProps {
    total: string;
    onClose: () => void;
    onConfirm: () => void;
}

function CheckoutModal({ total, onClose, onConfirm }: CheckoutModalProps) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!firstName || !lastName || !email) {
            alert('Please fill in all fields.');
            return;
        }

        setSubmitted(true);
        onConfirm();
    };

    return ReactDOM.createPortal(
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.5)', display: 'flex',
            justifyContent: 'center', alignItems: 'center', zIndex: 9999
        }}>
            <div style={{
                background: '#fff', padding: '20px', borderRadius: '8px', width: '300px',
                boxShadow: '0 0 10px rgba(0,0,0,0.3)'
            }}>
                {!submitted ? (
                    <>
                        <h3>Confirm Your Order</h3>
                        <p>Total: ${total}</p>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                style={{ width: '100%', marginBottom: '10px' }}
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                style={{ width: '100%', marginBottom: '10px' }}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ width: '100%', marginBottom: '10px' }}
                            />
                            <button type="submit" style={{ width: '100%' }}>Submit</button>
                        </form>
                        <button onClick={onClose} style={{ marginTop: '10px', width: '100%' }}>Cancel</button>
                    </>
                ) : (
                    <>
                        <h3>Thanks for your purchase, {firstName}!</h3>
                        <button onClick={onClose} style={{ marginTop: '10px', width: '100%' }}>Close</button>
                    </>
                )}
            </div>
        </div>,
        document.body
    );
}

export default CheckoutModal;
