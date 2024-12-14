import React from "react"
import ReactDom from "react-dom/client"

const RootDiv = document.getElementById("root")

ReactDom.createRoot(RootDiv).render(
  <div>
    <h1>Welcome to React Js</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem error rem debitis corporis modi ex odit culpa, quia commodi perspiciatis non delectus eius accusantium aliquid saepe velit consequatur voluptatibus laboriosam ut distinctio qui ipsam. Minus obcaecati quos doloribus ipsa alias quam illum aliquam cupiditate, nam mollitia amet, ratione quod? Voluptatem!</p>
    <img width={150} src="/public/vite.svg" alt="" />
  </div>
)