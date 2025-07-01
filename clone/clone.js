   let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }



        function showSlides(n) {
            let slides = document.getElementsByClassName("slide");
            let dots = document.getElementsByClassName("dot");
            let slidesContainer = document.querySelector('.slides');

            // Loop slides
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }

            // Move slides
            slidesContainer.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;

            // Update dots
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            dots[slideIndex - 1].className += " active";
        }



        let slideIndex1 = 1;
        showSlides1(slideIndex1);
        function plusSlides1(n) {
            showSlides1(slideIndex1 += n);
        }
        function currentSlide1(n) {
            showSlides1(slideIndex1 = n);
        }

        showSlides1(slideIndex1);


        function showSlides1(n) {
            let slides1 = document.getElementsByClassName("slide1");
            let dots1 = document.getElementsByClassName("dot1");
            let slidesContainer1 = document.querySelector('.slides1');
            // Loop slides
            if (n > slides1.length) { slideIndex1 = 1 }
            if (n < 1) { slideIndex1 = slides1.length }
            // Move slides
            slidesContainer1.style.transform = `translateX(-${(slideIndex1 - 1) * 100}%)`;
            // Update dots
            for (let i = 0; i < dots1.length; i++) {
                dots1[i].className = dots1[i].className.replace(" active", "");
            }
            dots1[slideIndex1 - 1].className += " active";
        }


        