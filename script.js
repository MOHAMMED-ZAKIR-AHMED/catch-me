const button = document.querySelector('button')
const text = document.querySelector('textarea')
button.addEventListener('mousemove',()=>{
    const height = Math.floor( Math.random()* 534)
    const width = Math.floor( Math.random()* 524)
    button.style.top = `${height}px`
    button.style.left = `${width}px`
    setTimeout(()=>{
        text.innerText = `Try Try Don't Give Up !!!`
    },5000)
    text.innerText = ''
})