const repositories = document.querySelector(".content-main");

function getImgGithub(){
    fetch('https://api.github.com/users/Gabriel1000000').then(async res =>{
        if(!res.ok){
            throw new Error(res.status);
        }
        let date = await res.json();
        console.log(date)
    })
}
getImgGithub();