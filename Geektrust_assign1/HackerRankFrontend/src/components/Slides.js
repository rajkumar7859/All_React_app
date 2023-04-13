import React, { useState } from 'react';

function Slides({slides}) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
      setCurrentSlide(currentSlide + 1);
    };
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide - 1);
    };
  
    const restartSlides = () => {
      setCurrentSlide(0);
    };

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" onClick={restartSlides} disabled={currentSlide===0} className="small outlined">Restart</button>
                <button data-testid="button-prev" onClick={prevSlide} disabled={currentSlide===0} className="small">Prev</button>
                <button data-testid="button-next" onClick={nextSlide} disabled={currentSlide===slides.length-1} className="small">Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[currentSlide].title}</h1>
                <p data-testid="text">{slides[currentSlide].text}</p>
            </div>
        </div>
    );

}

export default Slides;
