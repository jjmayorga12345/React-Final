import { useState, useEffect } from 'react';

const images = [
    'https://cdn.flightclub.com/TEMPLATE/467216/1.jpg?w=1080',
    'https://cdn.flightclub.com/TEMPLATE/463428/1.jpg?w=1080',
    'https://cdn.flightclub.com/TEMPLATE/406513/1.jpg?w=1080',
];

function HomePage() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((i) => (i + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '40px'
        }}>
            <div style={{
                width: '60%',
                height: '300px',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            }}>
                <img
                    src={images[index]}
                    alt={`Slide ${index + 1}`}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '12px',
                        transition: 'opacity 0.5s ease-in-out'
                    }}
                />
            </div>
        </div>
    );
}

export default HomePage;
