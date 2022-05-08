let visible = false;
// let handelScroll;
// let navbarVisible = false;

const visibility = () => {
    visible = !visible
    const divNav = document.getElementsByClassName('nav-links')[0]
    if(visible){
        divNav.id = "nav-links1"
    }else{
        divNav.id = ""
    }
}

// const scrolling = () => {
//     const scroll = window.scrollY
//     if (scroll > 200) {
//         handelScroll = true
//     } else {
//         handelScroll = false
//     }
// }
// window.onload = () => {
//     window.addEventListener("scroll", scrolling)
// }

// const scrollUp = () => {
//     window.scrollTo({ top: 0 })
//     navbarVisible = true
//     if (visible) {
//         navbarVisible = false
//     }
//     setTimeout(() => {
//         navbarVisible = false
//     }, 100);
// }