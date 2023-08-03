import { Canvas, Component, LeftLeaningContainer, RightLeaningContainer, CircleContainer } from './widgets/index'
import { loginForm } from "./forms/login_form"

console.log("Matrix Webpack")

const canvas = new Canvas(document.body)

const component = new Component(canvas)
const circleContainer = new CircleContainer()
component.container = circleContainer
component.content.innerHTML = `<img style="object-fit: cover" width="80%" height= "auto"src="./static/images/matrix.jpg" alt="matrix-log">`
canvas.addWidget(component)

const leftLeaningContainer = new LeftLeaningContainer()
const rightLeaningContainer = new RightLeaningContainer()


const formComponent = new Component(canvas)
formComponent.container = rightLeaningContainer
formComponent.locationTop = 5
formComponent.height = 4
formComponent.width = 3

canvas.addWidget(formComponent)

console.log(canvas, leftLeaningContainer, rightLeaningContainer, circleContainer, component)




const userForm = loginForm()
console.log(userForm)
