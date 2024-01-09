import React, { useEffect, useState, useMemo } from 'react';
import Carousel from 'better-react-carousel';

const Subjects = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const images = useMemo(() => [
        "/images/Administration/fiqh-images.jpeg",
        "/images/Administration/aqeedah-images.png",
        "/images/Administration/qasas-img.jpeg",
        "/images/Administration/seerah-img.jpeg",
        "/images/Administration/tawheed-images.jpeg",
        "/images/Administration/fiqh-images.jpeg",
    ], []);

    useEffect(() => {
        const preloadImages = async () => {
            const imagePromises = images.map((src) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });

            try {
                await Promise.all(imagePromises);
                setImagesLoaded(true);
            } catch (error) {
                console.error('Error preloading images:', error);
            }
        };

        preloadImages();
    }, [images]);

    if (!imagesLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <Carousel cols={3} row={1} gap={10} loop style={{ width: '100%', maxWidth: '200px', height: '200px' }}>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <div style={{ marginTop: '10px' }}>
                        <img
                            className='subject-img'
                            src={image}
                            alt={`Image ${index + 1}`}
                            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Subjects;

