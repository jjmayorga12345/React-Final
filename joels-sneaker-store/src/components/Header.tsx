import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useTheme } from '../context/ThemeContext';

function Header() {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const { theme, toggleTheme } = useTheme();

    return (
        <header style={{
            padding: '15px',
            background: theme === 'dark' ? '#111' : '#eee',
            color: theme === 'dark' ? '#fff' : '#000',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                <h2>Joel's Sneaker Store</h2>
            </Link>

            <nav style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                { }
                <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                    <input
                        type="checkbox"
                        checked={theme === 'dark'}
                        onChange={toggleTheme}
                        style={{ opacity: 0, width: 0, height: 0 }}
                    />
                    <span style={{
                        position: 'absolute',
                        cursor: 'pointer',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: theme === 'dark' ? '#444' : '#ccc',
                        transition: '.4s',
                        borderRadius: '34px'
                    }}>
                        <span style={{
                            position: 'absolute',
                            height: '18px',
                            width: '18px',
                            left: theme === 'dark' ? '26px' : '4px',
                            bottom: '3px',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            transition: '.4s'
                        }} />
                    </span>
                </label>

                <Link to="/products" style={{ color: 'inherit' }}>Products</Link>
                <Link to="/checkout" style={{ color: 'inherit' }}>
                    Cart 🛒 ({totalQuantity})
                </Link>
            </nav>
        </header>
    );
}

export default Header;
