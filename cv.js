const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver
    (function(
        entries, 
        appearOnScroll
    )   {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }   else{
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('circle1');
        }
        });
        
});

observer1.observe(document.querySelector('.java'));

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('circle2');
        }
        });
        
});

observer2.observe(document.querySelector('.python'));

const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('circle3');
        }
        });
        
});

observer3.observe(document.querySelector('.javascript'));
