import ScrollReveal from 'scrollreveal'

export default function initScrollReveal(defaultProps = null) {
    // Default properties for all animations
    const defaultOptions = {
        duration: 1000,
        distance: '50px',
        opacity: 0,
        easing: 'ease-in-out',
        reset: false
    };

    const targetElements = [
        {
            element: ".banner-text",
            options: {
                delay: 300,
                origin: window.innerWidth > 768 ? "left" : "bottom",
                distance: window.innerWidth > 768 ? "100px" : "50px",
            },
        },
        {
            element: ".banner-cta", 
            options: {
                delay: 600,
                origin: window.innerWidth > 768 ? "left" : "bottom",
                distance: window.innerWidth > 768 ? "100px" : "50px",
            },
        },
        {
            element: ".section-title",
            options: {
                delay: 200,
                distance: "30px",
                origin: "bottom",
            },
        },
        {
            element: ".section-content",
            options: {
                delay: 400,
                distance: "30px", 
                origin: "bottom",
            },
        },
    ];
    
    // Initialize ScrollReveal with default options
    const sr = ScrollReveal(defaultOptions);
    
    // Apply reveal to each element
    targetElements.forEach(({ element, options }) => {
        sr.reveal(element, Object.assign({}, defaultOptions, options));
    });
}
