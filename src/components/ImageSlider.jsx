import { useState } from "react"

const ImageSlider = ({ slides }) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const sliderWrapperStyle = {
        height: "100%",
        position: "relative"
    }

    const imageStyle = {
        backgroundImage: `url(${slides[currentSlide].source})`
    }

    function previousSlide() {
        let isFirstSlide = currentSlide === 0;
        setCurrentSlide(isFirstSlide ? (slides.length - 1) : currentSlide - 1);
    }

    function nextSlide() {
        let isLastSlide = currentSlide === (slides.length - 1);
        setCurrentSlide(isLastSlide ? 0 : currentSlide + 1);
    }

    return (
        <div style={sliderWrapperStyle}>
            <div className="arrow left" onClick={() => previousSlide()}>{`<`}</div>
            <div className="arrow right" onClick={() => nextSlide()}>{`>`}</div>
            <div className="img" style={imageStyle}></div>
            <div className="dots">
                {slides.map((slide, index) => (
                    <div key={index} className={`dot + ${(currentSlide === index) ? 'active' : ''}`} onClick={() => setCurrentSlide(index)}></div>
                ))}
            </div>
        </div>
    )
}
export default ImageSlider