const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    ' <img src="images/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg" alt="">'
  title.innerHTML = 'programing'
  excerpt.innerHTML =
    'frondend developer'
  profile_img.innerHTML =
    ' <img src="images/IMG_20220423_161052_225.webp" alt="abdelrhman">'
  name.innerHTML = 'Abdelrhman Ahmed'
  date.innerHTML = 'apr 01, 2020'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}