gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText)

ScrollSmoother.create({
    smooth: 1.5,
    effects: true,
})

gsap.from(".container_principal", {
    opacity: 0,
    duration: 1,
})

gsap.from("picture:nth-child(2)", {
    y: 60,
    duration: 1,
})

gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1,
})

gsap.from(".card", {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
    stagger: .3,
    scrollTrigger: {
        trigger: ".card",
        start: "0% 80%",
        end: "100% 70%",
        scrub: true,
    }
})

gsap.from(".feedbacks_footer ul li", {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
    stagger: .1,
    scrollTrigger: {
        trigger: ".feedbacks_footer ul ",
        start: "0% 80%",
        end: "100% 50%",
        scrub: 1,
    }
})

gsap.from("footer", {
    y: -300,
    immediateRender: false,
    scrollTrigger: {
        trigger: "footer",
        scrub: true,
        invalidateOnRefresh: true,
        end: "100% 100%",
        // markers: {startColor: "red", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20},
    }
})