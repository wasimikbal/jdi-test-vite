import * as THREE from 'three'
import { loadModel } from './modelLoader'
import { items } from './getItems'
import { nextBtn, backBtn, scrollContainer } from './views'


const itemWidth = 300
const padding = 20

backBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft -= itemWidth + padding
})

nextBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += itemWidth + padding
})

items.forEach((item)=>{
    loadModel(item.conatinerID, item.path)
})
