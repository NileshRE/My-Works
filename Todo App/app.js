const list = document.querySelector("#lists ol")


list.addEventListener('click', function(e){
    if(e.target.className == "btn"){
        const li = e.target.parentElement;
        list.removeChild(li)
    }
})


const ListAdd = document.forms["add_list"];

ListAdd.addEventListener('submit', function(e){
    e.preventDefault();
    const value = ListAdd.querySelector('input[type="text"]').value
    
    const li = document.createElement("li");
    const list_add = document.createElement("p");
    const dlt = document.createElement("button");

    dlt.textContent = "Delete";
    list_add.textContent = value;

    list_add.classList.add("topic")
    dlt.classList.add("btn")

    li.appendChild(list_add)
    li.appendChild(dlt)
    list.appendChild(li)

    this.reset();
})

const checkbox = document.querySelector("#hide")
checkbox.addEventListener('change', function(e){
    if(checkbox.checked){
        list.style.display = "none"
    }else{
        list.style.display = "block";
    }
    })

    const search = document.forms["search-box"].querySelector("input")
    search.addEventListener('keyup', function(e){
        const term = e.target.value.toLowerCase();
        const tasks = list.getElementsByTagName('li');
        Array.from(tasks).forEach(function(task){
            const title = task.firstElementChild.textContent;
            if(title.toLowerCase().indexOf(term)!= -1){
                task.style.display ="block"
            }else{
                task.style.display ="none";
            }
        })
    })

    const tabs = document.querySelector('.tabs')
    const panels = document.querySelectorAll('.panel')
    tabs.addEventListener('click', function(e){
        if(e.target.tagName=='LI'){
            const targetPanel = document.querySelector(e.target.dataset.target);
            panels.forEach(function(panel){
                if(panel==targetPanel){
                    panel.classList.add('active')
                }else{
                    panel.classList.remove('active')
                }
            })
        }
    })