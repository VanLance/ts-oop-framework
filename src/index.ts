import { Canvas } from './widgets/index'
import { loginForm } from "./forms/login_form"

console.log("Matrix Webpack")

const canvas = new Canvas(document.body)

console.log(canvas)




const userForm = loginForm()
console.log(userForm)
