import { collection, addDoc , getDocs , Timestamp , query, orderBy ,doc, deleteDoc , updateDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js"; 
import { db } from "./firebaseconfig.js";

const form = document.querySelector("#form")
const input = document.querySelector("#todo")
const description = document.querySelector("#textarea")
const div = document.querySelector(".div")




const allTodo = []
async function getData(){
  const q = query(collection(db, "todos"), orderBy("Date", "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
  allTodo.push({...doc.data() , id:doc.id})
});
  console.log(allTodo);
  renderData(allTodo) 
  
}

getData()


function renderData(){
  div.innerHTML = ""
  allTodo.map((item)=>{
    div.innerHTML += `<div class="container">
            <h1>Title: ${item.title}</h1>
            <p>Description: ${item.description}</p>
            <button class= "deleteBtn"><i class="fa-solid fa-trash"></i></button>
            <button class= "edit"><i class="fa-solid fa-pen-to-square"></i></button>
        </div>`
  })
  const deleteBtn = document.querySelectorAll('.deleteBtn')
  const editBtn = document.querySelectorAll(".edit")


deleteBtn.forEach((item , index) => {
  item.addEventListener('click', async (event) => {
    console.log("btn clicked");
    // console.log(allTodo[index]);
    await deleteDoc(doc(db, "todos", allTodo[index].id));
    console.log('todo deleted...');
    allTodo.splice(index, 1)
    renderData(allTodo)
  })
})

editBtn.forEach((item, index) => {
  item.addEventListener('click', async (event) => {
    console.log("edit clicked");
    console.log(allTodo[index]);
    const updatedTitle = prompt("Enter updated title")
    const updatedDescription = prompt("Enter updated Description")
    const todoRef = doc(db, "todos", allTodo[index].id);
    await updateDoc(todoRef, {
      title: updatedTitle,
      description: updatedDescription
    });
    console.log('todo updated successfully');
    allTodo[index].title = updatedTitle
    allTodo[index].description = updatedDescription
    renderData(allTodo)
  })
})
}






form.addEventListener("submit" ,async (event) =>{ 
    event.preventDefault()
    console.log(input.value); 
    console.log(description.value);
    renderData()

    try {
        const docRef = await addDoc(collection(db, "todos"), {
          title: input.value,
          description: description.value,
          Date: Timestamp.fromDate(new Date()), 
        });
        console.log("Document written with ID: ", docRef.id);
         allTodo.unshift({
          title: input.value,
          description: description.value,
          Date: Timestamp.fromDate(new Date()),
          id: docRef.id,
        })
        console.log(allTodo);
        renderData(allTodo)
        } catch (e) {
        console.error("Error adding document: ", e);
      }
      input.value = ""
      description.value = ""
});