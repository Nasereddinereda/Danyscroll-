const controller = new ScrollMagic.Controller();

let tl1 = new TimelineMax();
let tl2 = new TimelineMax();
let tl3 = new TimelineMax();
let tl4 = new TimelineMax();

let h_full = window.innerHeight;
let w_full = window.innerWidth;


tl1.to("#circle-b", 0.1, { y: -(h_full / 6), x:- (w_full/16) })
tl2.to("#circle-c", 0.1, { y: -(h_full / 6), x: (w_full/16) })
tl3.to("#block-2", 0.1,  { y: -(h_full / 20), x: (w_full/26) })
tl4.to("#block-3", 0.1,  { y: -(h_full / 20), x: -(w_full/26) })

const scene = new ScrollMagic.Scene({
    triggerElement: "#section-1",
    triggerHook: "onLeave",
    duration: "30%"
})
    .addIndicators()
    // .setPin("#sticky")
    .setTween(tl1)
    .on("end", function () {
        document.getElementById("mytext").className ="anim-1" ;
        document.getElementById("body").className ="anim-2" ;

    })
    .on("progress", function () {
        document.getElementById("body").className = "d-none";
        document.getElementById("mytext").className = "";
    })
    .addTo(controller);


const scene1 = new ScrollMagic.Scene({
    triggerElement: "#section-1",
    triggerHook: "onLeave",
    duration: "30%"
})
    .addIndicators()
    .setTween(tl3)
    .addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: "#section-1",
    triggerHook: "onLeave",
    duration: "30%"
})
    .addIndicators()
    .setTween(tl4)
    .addTo(controller);

const scene3 = new ScrollMagic.Scene({
    triggerElement: "#section-1",
    triggerHook: "onLeave",
    duration: "30%"
})
    .addIndicators()
    .setTween(tl2)
    .addTo(controller);









// Smooth Scrolling 

var html = document.documentElement;
var body = document.body;

var scroller = {
    target: document.querySelector("#section-1"),
    ease: 0.04, // <= scroll speed
    endY: 0,
    y: 0,
    resizeRequest: 0.01,
    scrollRequest: 0,
};

var requestId = null;

TweenLite.set(scroller.target, {
    rotation: 0.01,
    force3D: true
});

window.addEventListener("load", onLoad);

function onLoad() {
    updateScroller();
    window.focus();
    window.addEventListener("resize", onResize);
    document.addEventListener("scroll", onScroll);
}

function updateScroller() {

    var resized = scroller.resizeRequest > 0;

    if (resized) {
        var height = scroller.target.clientHeight;
        body.style.height = height + "px";
        scroller.resizeRequest = 0;
    }

    var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

    scroller.endY = scrollY;
    scroller.y += (scrollY - scroller.y) * scroller.ease;

    if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
        scroller.y = scrollY;
        scroller.scrollRequest = 0;
    }

    TweenLite.set(scroller.target, {
        y: -scroller.y
    });

    requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

function onScroll() {
    scroller.scrollRequest++;
    if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
    }
}

function onResize() {
    scroller.resizeRequest++;
    if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
    }
}