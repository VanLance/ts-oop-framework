import { Canvas, Component, RightLeaningContainer, CircleContainer } from './widgets/index'
import { loginForm } from "./forms/login_form"
import { User } from './forms/login_form'

console.log("Matrix Webpack")

const canvas = new Canvas(document.body)

const component = new Component(canvas)
const circleContainer = new CircleContainer()
circleContainer.backgroundColor = 'white'
component.container = circleContainer
component.content.innerHTML = `<img style="object-fit: cover" width="80%" height= "auto"src="./static/images/matrix.jpg" alt="matrix-log">`
canvas.addWidget(component)

// const leftLeaningContainer = new LeftLeaningContainer()
const rightLeaningContainer = new RightLeaningContainer()


const formComponent = new Component(canvas)
formComponent.container = rightLeaningContainer
formComponent.locationTop = 5
formComponent.height = 4
formComponent.width = 4
const userForm = loginForm(addPostWidget)
formComponent.content = userForm

canvas.addWidget(formComponent)

async function addPostWidget(user: Partial<User>):Promise<void>{
  const postComponent = new Component(canvas)
  postComponent.locationTop = 6
  postComponent.locationLeft = 6
  // const p = document.createElement('p')
  await getPost(user)
}

async function getPost({username, token}: Partial<User>): Promise<string>{
  const res = await fetch(`https://matrix-fakebook-123.onrender.com/api/user-posts/${username}`, {
    method : "POST",
    headers : {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  })
  if (res.ok){
    const data = await res.json()
    console.log(data,'success')
    return ''
  }
  console.log('fail')
  return 'Try Again'
}




console.log(userForm)
