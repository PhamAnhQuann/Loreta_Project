import React from 'react'
import './slider.css'
function slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        'Slide 1 Content',
        'Slide 2 Content',
        'Slide 3 Content',
        // Thêm các nội dung của các slide khác nếu cần
    ];

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        setCurrentIndex(newIndex);
    };
    return (
        <div >
            <div className="slider-container">
                <div className="slider">
                    <button onClick={prevSlide} className="slider-button">
                        Previous
                    </button>
                    <div className="slide-content" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
                        {console.log(slides + '  slides')}
                        {slides.map((slide, index) => (
                            <div key={index} className="slide">
                                {console.log(slide + '  slide')}
                                {slide}
                            </div>
                        ))}
                    </div>
                    <button onClick={nextSlide} className="slider-button">
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default slider