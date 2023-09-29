        const frontEnd = document.querySelector('.front-end')
const animal = document.querySelector('.animal')
const food = document.querySelector('.food')
const category = document.querySelector('.category')
const ol = document.querySelector('.bb')
const cat = category.querySelectorAll('ul') 
const img = document.querySelector('.ddddd')
const button1 = document.querySelector('.one')
const button2 = document.querySelector('.two')
const value = document.querySelector('#value')
let b = cat[0].querySelectorAll('li')
let c = cat[1].querySelectorAll('li')
let d = cat[2].querySelectorAll('li')
const coutter = document.querySelector('.counter')
console.log(cat[0].classList.value + ' ' + b.length +',',cat[1].classList.value + ' ' + c.length +',',cat[2].classList.value + ' ' + d.length +',')



const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи'
]
   let bb
for (let index = 0; index < ingredients.length; index++) {
    bb = document.createElement('li')
    bb.textContent = ingredients[index]
    ol.append(bb)
    
}
const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

   let r = images[0]
   let t = images[1]
   let g = images[2]

       
    let cr = document.createElement('li')
    let im = document.createElement('img')
    let ima = document.createElement('img')
    let imag = document.createElement('img')
    im.src = r.url
    ima.src = t.url
    imag.src = g.url
    cr.classList.add('dd')
    im.style.width= 300+'px'
    ima.style.width= 300+'px'
    imag.style.width= 300+'px'
    cr.append(im,ima,imag)
    img.append(cr)
let  zero = 0
   button1.addEventListener('click',event =>{
zero--
value.textContent = zero
   })
   button2.addEventListener('click',event =>{
    zero++
    value.textContent = zero
       })