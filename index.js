let currentIndex = 0;

function showSlide(index) {
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    const transformValue = `translateX(${-index * 100}%)`;
    
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.opacity = '1';
        } else {
            slide.style.opacity = '0';
        }
    });

    slider.style.transform = transformValue;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % 3; // Assuming there are 3 slides
    showSlide(currentIndex);
    updateCategoryHighlight();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + 3) % 3; // Assuming there are 3 slides
    showSlide(currentIndex);
    updateCategoryHighlight();
}

function changeCategory(index) {
    currentIndex = index;
    showSlide(currentIndex);
    updateCategoryHighlight();
}

function updateCategoryHighlight() {
    const categories = document.querySelectorAll('.category');
    categories.forEach((category, i) => {
        if (i === currentIndex) {
            category.classList.add('highlighted');
        } else {
            category.classList.remove('highlighted');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.category');

    categories.forEach((category, i) => {
        category.addEventListener('mousedown', function () {
            category.style.transform = 'translateY(3px)';
        });

        category.addEventListener('mouseup', function () {
            category.style.transform = 'translateY(0)';
        });

        category.addEventListener('mouseleave', function () {
            category.style.transform = 'translateY(0)';
        });
    });
});
