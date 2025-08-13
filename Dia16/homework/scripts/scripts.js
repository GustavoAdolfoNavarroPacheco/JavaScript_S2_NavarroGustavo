document.addEventListener('DOMContentLoaded',()=>{
    const datosContenedor = document.querySelector('.opciones');
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');

    async function fecthData(){
        const res = await fetch('https://689a1690fed141b96ba1d16c.mockapi.io/data/tasks',{
            method: 'GET',
            headers :{
                'Content-Type':'application/json'
            }
        });
        let data = await res.json();
        return data;
    }
    // ###########
    // DANGER ZONE
    
    // ###########
    async function addNewTask(){
        const task = taskInput.value;
        console.log(task);
        if (task.trim()==='') return;
        await fetch('https://689a1690fed141b96ba1d16c.mockapi.io/data/tasks',{
            method: 'POST',
            headers :{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                task,status:'On hold'
            })
        });
        taskInput.value='';
        const data = await fecthData();
        displayCapsula(data);
    }

    // console.log(fetchData());
    function displayCapsula(capsula){
        datosContenedor.innerHTML='';
        capsula.forEach(cap =>{
            const capDiv = document.createElement('div')
            if(cap.status === "ready"){
            }else if(cap.status === "On hold"){
            }
            datosContenedor.appendChild(capDiv);
        });
    }
    fecthData().then(data => {
        displayCapsula(data);
    });
    addTaskButton.addEventListener('click',addNewTask);
});