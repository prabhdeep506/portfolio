window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

//   AOS.init();
const sliders = {};

function showGallery(id) {
  document.querySelector('.gallery-container.active').classList.remove('active');
  document.getElementById(id).classList.add('active');

  document.querySelector('.tab.active')?.classList.remove('active');
  event.target.classList.add('active');
  // jaha click krara hai?
}
function moveSlide(id, direction) {
  const slider = document.getElementById(`slider-${id}`);
  const slides = slider.children;
  const total = slides.length;

  // Index update ya reset
  sliders[id] = (sliders[id] || 0) + direction;

  // Wrap around
  if (sliders[id] < 0) sliders[id] = total - 1;
  if (sliders[id] >= total) sliders[id] = 0;

  // Scroll to that slide
  slider.scrollTo({
    left: slides[0].offsetWidth * sliders[id],
    behavior: 'smooth'
  });
   AOS.init();
}








        // <!-- <div class="why-container">
        //     <div class="why-image">
        //         <img src="your-image.png" alt="Gym Trainers" />
        //     </div>
        //     <div class="why-text">
        //         <h2>Why Choose Us?</h2>
        //         <div class="features">
        //             <div class="feature">
        //                 <h3>Progression</h3>
        //                 <p>It is a long established fact that the client will be satisfied with results.</p>
        //             </div>
        //             <div class="feature">
        //                 <h3>Workout</h3>
        //                 <p>Train with the best and see results in a structured and supported way.</p>
        //             </div>
        //             <div class="feature">
        //                 <h3>Nutrition</h3>
        //                 <p>Guided nutrition plans tailored to your goals and body type.</p>
        //             </div>
        //             <div class="feature">
        //                 <h3>Self Defence</h3>
        //                 <p>Boost your confidence and strength with our expert training programs.</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // <div class="containerr">
        //     <div class="image-box">
        //         <img src="cg.png" alt="Fitness Woman">
        //     </div>
        //     <div class="service-box">
        //         <h2>Our Service</h2>
        //         <ul class="service-list">
        //             <li>Over 140+ Expert Coaches</li>
        //             <li>Train Smarter and faster than before</li>
        //             <li>Good & Smart quality</li>
        //             <li>Available Partners</li>
        //         </ul>
        //         <button class="btnnn">Explore more</button>
        //     </div>
        // </div>
 -->