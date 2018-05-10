(d => {

    let btn = d.getElementById('scrollTop')
    let nav = d.getElementById('nav')

    btn.addEventListener('click', e => {
        e.preventDefault()
        nav.scrollIntoView({behavior:'smooth'})
    })

})(document)