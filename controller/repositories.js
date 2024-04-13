const repositories = document.querySelector(".content-main");
// let el = document.getElementById('circle');

function getApiGithub(){

    // fetch('https://api.github.com/users/Gabriel1000000').then(async res =>{
    //     if(!res.ok){
    //         throw new Error(res.status);
    //     }
    //     let api = await res.json();
    //     console.log(api.avatar_url)
        
    //     api.map(item =>{
    //         let img = document.createElement('div');
    //         img.innerHTML=`
    //         <img src="${img.avatar_url}" alt="Avatar"/>

    //         `
    //         repositories.appendChild(project);
            
    //     })
        
    // })


    fetch('https://api.github.com/users/Gabriel1000000/repos').then(async res =>{
        if(!res.ok){
            throw new Error(res.status);
        }
        let data = await res.json();
        data.map(item =>{
            let project  = document.createElement('div');
            project.innerHTML = `
            <div class="project">
                <div>
                    <h4 class="title">${item.name}</h4>
                    <span class="date-create">${Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}</span>
                </div>
                <div>
                    <a href="https://github.com/Gabriel1000000/${item.name}">Clique aqui e veja o projeto</a>
                    <span class="language"><span id="circle" class="circle"></span>${item.language}</span>
                    </div>
            </div>
            `

            repositories.appendChild(project);
        })
        
    })

}

getApiGithub();