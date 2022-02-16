const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})


/*SCROLL HOME*/
sr.reveal('.covid-alert', {})
sr.reveal('.more-btn', { delay: 200 })
sr.reveal('.img-hero', { origin: 'right', delay: 400 })

/*SCROLL ABOUT*/
sr.reveal('.news-covid', { delay: 300 })
sr.reveal('.title-news', { delay: 200 })
sr.reveal('.subtitle-news', { delay: 400 })
sr.reveal('.text-news', { delay: 400, interval: 200 })

/*SCROLL SKILLS*/
sr.reveal('.title-contact', {})
sr.reveal('.form-contact', { delay: 200 })

