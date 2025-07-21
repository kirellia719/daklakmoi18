import { useEffect, useRef } from 'react';
import './style.scss';

const TiltImage = ({ src, alt = 'Tilt Image' }) => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    const handleMouseMove = (e) => {
        const container = containerRef.current;
        const image = imageRef.current;
        const rect = container.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        image.style.transform = `scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        const image = imageRef.current;
        image.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
    };

    useEffect(() => {
        const image = imageRef.current;

        // Căn container theo đúng kích thước ảnh sau khi load
        const onLoad = () => {
            // container.style.width = `${image.naturalWidth}px`;
            // container.style.height = `${image.naturalHeight}px`;
        };

        if (image.complete) {
            onLoad();
        } else {
            image.addEventListener('load', onLoad);
            return () => image.removeEventListener('load', onLoad);
        }
    }, []);

    return (
        <div
            className="tilt-container"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <img ref={imageRef} src={src} alt={alt} className="tilt-img" />
        </div>
    );
};

export default TiltImage;