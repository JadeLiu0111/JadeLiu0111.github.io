// 滑鼠移動效果mousemove effect
document.addEventListener("mousemove", function parallax(e){
    document.querySelectorAll('.moveobj').forEach(function(move){

        let moving_value = move.getAttribute("data-speed");
        let x = (e.clientX * moving_value)/250;
        let y = (e.clientY * moving_value)/250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)"
    });
});

// 錨點轉跳
function scrollSection(section, block){
    document.querySelector(section).scrollIntoView({
        behavior: "smooth",
        block: block
    });
}
function scrollSectionSetY(section){
    const target = document.querySelector(section);
    const yOffset = -100;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({top: y, behavior: "smooth"});
}
const scroll_intro = () => {
    scrollSection('#intro', "center");
}
const scroll_skills = () => {
    scrollSection('#skills', "center");
}
const scroll_services = () => {
    scrollSection('#services', "center");
}
const scroll_qualification = () => {
    scrollSectionSetY('#qualification');
}
const scroll_portfolio = () => {
    scrollSectionSetY('#portfolio');
}
const scroll_contact = () => {
    scrollSection('#footer', "end");
}

// Services燈箱
let services_web = document.querySelector('#service-web');
let services_ux = document.querySelector('#service-ux');
let services_designer = document.querySelector('#service-designer');
let services_edu = document.querySelector('#service-edu');
// 開啟
function pop_web(){
    services_web.classList.remove('disable');
}
function pop_ux(){
    services_ux.classList.remove('disable');
}
function pop_designer(){
    services_designer.classList.remove('disable');
}
function pop_edu(){
    services_edu.classList.remove('disable');
}
// 關閉
function close_pop(bt){
    bt.parentNode.parentNode.classList.add('disable');
}
function close_pop2(bt){
    bt.parentNode.classList.add('disable');
}

// ----gsap進場---- //
// intro進場
let intro_title = document.querySelector('.intro_title').children;
gsap.from(intro_title, {
    x: 20,
    duration: 2,
    opacity: 0,
    delay: 0.5,
    stagger: 0.3
});
let intro_offer = document.querySelector('.intro_offer').children;
gsap.from(intro_offer, {
    x: 20,
    opacity: 0,
    duration: 2,
    delay: 1,
    stagger: 0.3
});
// Skill進場
gsap.registerPlugin(ScrollTrigger);
let skill = document.querySelector('#skills').children;
gsap.from(skill, {
    scrollTrigger: {
        trigger: skill
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.5
})
// Service進場
let service_t = document.querySelector('#services>.title'),
service_s = document.querySelector('#services>.subtitle'),
service_c = document.querySelector('#services>.content');
gsap.from([service_t, service_s, service_c], {
    scrollTrigger: {
        trigger: [service_t, service_s, service_c],
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
})
// qualification進場
let qualification = document.querySelector('#qualification>.container').children;
gsap.from(qualification, {
    scrollTrigger: {
        trigger: qualification,
        start: "top 80%",
        // markers: true
    },
    y: 50,
    opacity: 0,
    duration: 1
})
// qualification_timeline進場
function tlEnter(){
    function scrollSet(element01, X){
        gsap.set(element01, {
            x: X,
            opacity: 0
        })
    };
    scrollSet(".qualification_majoritem--left", -100);
    scrollSet(".qualification_majoritem--right", 100);
    scrollSet(".qualification_minoritem--left", -100);
    scrollSet(".qualification_minoritem--right", 100);
    function scrollAnimate(element02, Xdir){
        ScrollTrigger.batch(element02, {
            onEnter: batch => gsap.to(batch, {
                x: Xdir,
                duration: 2,
                opacity: 1,
            }),
        })
    };
    scrollAnimate(".qualification_majoritem--left", 100);
    scrollAnimate(".qualification_majoritem--right", -100);
    scrollAnimate(".qualification_minoritem--left", 100);
    scrollAnimate(".qualification_minoritem--right", -100);
}
window.onload = tlEnter();

// Qualificationfu timeline切換
let qualification_edu = document.querySelector('#qualification_edu')
let qualification_exp = document.querySelector('#qualification_exp')
let qualification_option_exp = document.querySelector('#qualification_option--exp')
let qualification_option_edu = document.querySelector('#qualification_option--edu')
function turn_edu(){
    qualification_edu.classList.remove('disable');
    qualification_exp.classList.add('disable');
    qualification_option_edu.classList.add('qualification_option--current');
    qualification_option_exp.classList.remove('qualification_option--current');
    tlEnter();
}
function turn_exp(){
    qualification_edu.classList.add('disable');
    qualification_exp.classList.remove('disable');
    qualification_option_exp.classList.add('qualification_option--current');
    qualification_option_edu.classList.remove('qualification_option--current');
    tlEnter();
}


// Portfolio進場
let portfolio = document.querySelector('#portfolio').children;
gsap.from(portfolio, {
    scrollTrigger: {
        trigger: portfolio,
        start: "top 80%",
        // markers: true
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.5
})
let portfolio_content = document.querySelector('.portfolio_works').children;
gsap.from(portfolio_content, {
    scrollTrigger: {
        trigger: portfolio_content,
        start: "top 80%",
        // markers: true
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.4
})

// 背景進場
gsap.to("#bg_element01", {
    scrollTrigger: {
        trigger: "#bg_element01",
        start: "top 200px",
        end: "bottom center",
        scrub: true,
        pin: true,
        // markers: true
    },
    scale: 1.2,
    opacity: 0.5
})
gsap.from(".bg_element02--left", {
    scrollTrigger: {
        trigger: ".bg_element02--left",
        end: "80% center",
        scrub: true,
        ping: true,
        // markers: true
    },
    x: -400,
    opacity: 0
})
gsap.from(".bg_element02--right", {
    scrollTrigger: {
        trigger: ".bg_element02--right",
        end: "80% center",
        scrub: true,
        ping: true,
        // markers: true
    },
    x: 400,
    opacity: 0
})

// portfolio option
// 給每個portfolio_workbox增加ID
const portfolio_works = document.querySelectorAll('.portfolio_workbox');
portfolio_works.forEach(function(element, index){
    element.setAttribute('id', `work_${index + 1}`);
});
// 選項按鈕current樣式轉換
const work_options = document.querySelectorAll('.portfolio_option');
work_options.forEach(function(bt){
    bt.addEventListener('click', function(){
        // 將不是clicked按鈕加入陣列
        const ubtns = Array.from(work_options).filter(function(el){
            return el !== bt;
        });
        // 該陣列所有元素移除current
        ubtns.forEach(function(u){
            u.classList.remove('portfolio_option--current');
        });
        // clicked按鈕新增current
        bt.classList.add('portfolio_option--current');
    });
});
// 每個選項顯示內容
function btnVisibility(hiddenArr, showArr){
    hiddenArr.forEach(function(i){
        document.querySelector(`#work_${i}`).classList.add('disable');
    });
    showArr.forEach(function(j){
        document.querySelector(`#work_${j}`).classList.remove('disable');
    });
};
const trueAll = () => {
    btnVisibility([], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
};
const turn_research = () => {
    btnVisibility([3, 4, 5, 6, 7, 8, 9], [1, 2]);
};
const turn_design = () => {
    btnVisibility([1, 2, 5, 7, 9], [3, 4, 6, 8]);
};
const turn_video = () => {
    btnVisibility([1, 2, 3, 4, 5, 6, 8, 9], [7]);
};
const turn_teach = () => {
    btnVisibility([1, 2, 3, 4, 5, 6, 7], [8, 9]);
};
