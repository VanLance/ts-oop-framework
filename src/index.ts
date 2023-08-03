import { Canvas, Component, LeftLeaningContainer, RightLeaningContainer, CircleContainer } from './widgets/index'
import { loginForm } from "./forms/login_form"


console.log("Matrix Webpack")

const canvas = new Canvas(document.body)
const component = new Component(canvas)
const leftLeaningContainer = new LeftLeaningContainer()
const rightLeaningContainer = new RightLeaningContainer()
const circleContainer = new CircleContainer()


console.log(canvas, leftLeaningContainer, rightLeaningContainer, circleContainer, component)




const userForm = loginForm()
console.log(userForm)
