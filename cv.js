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

const track = document.getElementById("image-track");

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;

}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;

}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX, maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -128.5);

    track.dataset.percentage = nextPercentage;

    track.style.transform = `translate(${nextPercentage}%, 0)`;
}
