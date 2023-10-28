const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')
const imageProfile = document.querySelector('.profileImage')
const sections = document.querySelectorAll('.testimonial-text')



nextBtn?.addEventListener('click', ()=> {

    (imageProfile as HTMLImageElement).src = '/images/image-john.jpg';
    nextBtn?.classList.add('disable')
    prevBtn?.classList.remove('disable')
    sections[0].classList.remove('active')
    sections[1].classList.add('active')
})  

prevBtn?.addEventListener('click', ()=> {

    (imageProfile as HTMLImageElement).src = "/images/image-tanya.jpg";
    prevBtn?.classList.add('disable')
    nextBtn?.classList.remove('disable')
    sections[1].classList.remove('active')
    sections[0].classList.add('active')
})