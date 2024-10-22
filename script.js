// function addItem() {
//   const item = prompt("enter item for todo list....");

//   if (item) {
//     const li = document.createElement("li");
    

//     li.innerHTML = `${item} <button id='removeBtn'>remove</button> ` 

//     const list = document.querySelector("#list");

//     li.querySelector('#removeBtn').addEventListener('click', ()=>{
//         list.removeChild(li);
//     })

//     list.appendChild(li);

//     // console.log(li);
//   }
// }



// function removeItem() {
//   const removeItem = prompt("enter item no for delete...");

//   const li = document.querySelectorAll("li");

//   if (removeItem > 0 && removeItem <= li.length) {
//     const list = document.querySelector("#list");

//     list.removeChild(li[removeItem - 1]);
//   }
// }



class TodoList{


    

    addItem() {
          const item = prompt("enter item for todo list....");
        
          if (item) {
            const li = document.createElement("li");
            
        
            li.innerHTML = `${item} <button id='removeBtn'>remove</button> ` 
        
            const list = document.querySelector("#list");
        
            li.querySelector('#removeBtn').addEventListener('click', ()=>{
                list.removeChild(li);
            })
        
            list.appendChild(li);
        
            // console.log(li);
          }
        }

    removeItem() {
          const removeItem = prompt("enter item no for delete...");
        
          const li = document.querySelectorAll("li");
        
          if (removeItem > 0 && removeItem <= li.length) {
            const list = document.querySelector("#list");
        
            list.removeChild(li[removeItem - 1]);
          }
        }

}

let todoObj  = new TodoList()