const res = document.querySelector(".text");
const btn = document.querySelector(".btnF");
const input = document.querySelector(".search input")
const themeBtn = document.querySelector('.theme-toggle')
const html = document.documentElement;



btn.addEventListener('click', function(){

    const cels = parseFloat(input.value);
    const formula = cels * 9/5 + 32;
    res.innerHTML = formula

})

function updateTheme(theme){
 themeBtn.textContent = theme === 'dark' ? 'light' : 'dark'



}

const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateTheme(savedTheme);
themeBtn.addEventListener('click', ()=> {
    const current = html.getAttribute('data-theme');
    const next = current == 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next)
    updateTheme(next);

})




    




