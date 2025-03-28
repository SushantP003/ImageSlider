const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        const prev = document.querySelector('.prev');
        const next = document.querySelector('.next');
        const darkModeToggle = document.getElementById('darkModeToggle');
        const indicatorsContainer = document.querySelector('.indicators');
        let index = 0;

        // Create Indicators
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active-dot');
            indicatorsContainer.appendChild(dot);
        });
        const dots = document.querySelectorAll('.dot');

        function showSlide(i) {
            if (i >= slides.length) index = 0;
            if (i < 0) index = slides.length - 1;
            slider.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach(dot => dot.classList.remove('active-dot'));
            dots[index].classList.add('active-dot');
        }

        next.addEventListener('click', () => { index++; showSlide(index); });
        prev.addEventListener('click', () => { index--; showSlide(index); });

        function autoSlide() { index++; showSlide(index); }
        setInterval(autoSlide, 4000);

        darkModeToggle.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode');
        });

        function getRandomColor() {
            const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#F4A261", "#2A9D8F", "#E76F51", "#6A0572", "#3D348B", "#F77F00"];
            return colors[Math.floor(Math.random() * colors.length)];
        }
        const bgColor = getRandomColor();
        document.body.style.background = bgColor;
        document.documentElement.style.setProperty('--frame-color', bgColor);