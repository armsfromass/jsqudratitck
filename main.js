function quadratick(a, b, c) {
    let  D = null,
    x1 = null,
    x2 = null

    D = (b * b) - (4 * a * c)

    x1 = (-b + Math.sqrt(D)) / (2 * a)
    x2 = (-b - Math.sqrt(D)) / (2 * a)

    return {
        D: D,
        x1: x1,
        x2: x2      
    } 
}

document.querySelector('.push').onclick = function (e) {
    e.preventDefault()
    let a = document.querySelector('.a').value,
    b = document.querySelector('.b').value,
    c = document.querySelector('.c').value

    let result = quadratick(a, b, c)

    document.querySelector('.D').innerText = result.D
    document.querySelector('.x1').innerText = result.x1
    document.querySelector('.x2').innerText = result.x2
}