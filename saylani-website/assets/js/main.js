
// Counter js
function animateCounter(element, end, duration) {
  let start = 0;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const current = Math.min(
      start + (progress / duration) * (end - start),
      end
    );
    element.textContent = Math.floor(current);
    if (current < end) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute("data-target");
        animateCounter(counter, target, 2000);
        observer.unobserve(counter);
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach((counter) => {
  observer.observe(counter);
});
// end
// testimonial
let currentSlide = 0;
const testimonials = document.querySelectorAll(".testimonial-inner");
const totalSlides = testimonials.length;

const showSlide = (index) => {
  testimonials[currentSlide].classList.remove("active");
  currentSlide = (index + totalSlides) % totalSlides;
  testimonials[currentSlide].classList.add("active");
};

document.querySelector(".next").addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

document.querySelector(".prev").addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

// Auto-slide
setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000); 

// end

// text typing
const TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };