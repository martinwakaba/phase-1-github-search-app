// // fucntion for getting user
// function getUsers(){
//     const form = document.getElementById('github-form');
//     const userData = document.getElementById('search');
//     const userList = document.getElementById('user-list');

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const username = userData.value;

//         if(username === ''){
//             alert('No input!!! PLEASE ENTER A USER NAME')
//             return;
//         }else{
//           let usernameSearch =   fetch(`https://api.github.com/search/users?q=`)
//             .then((res) => res.json)
//             .then((obj) => console.log(obj))
            
//             let repoSearch = fetch(`https://api.github.com/users/octocat/repos`)
//             .then((res) => res.json)
//             .then((obj) => console.log(obj))

//             if(repoSearch === ''){
//                 alert('No repo Found!!!')
//                 return
//             }
//         }

//         userList.innerHTML = ''

//         const userListDetails = document.createElement('li');

//         userListDetails.innerHTML = `<img src = ${userData.avatar_url} alt = ${userData.login}/>
//         <h3> ${userData.login}</h3>
//         <a href= ${userData.html_url} target =' _blank'  >View Profile</a>`;

//         userList.appendChild(userListDetails);

//         const repoList = document.getElementById('repo-List');
//         repoList.innerHTML = '';

//         repoSearch.forEach((repo => {
//             const repoInfo = document.createElement('li');
//             repoInfo.innerHTML = `
//             <h3>${repo.name}</h3>
//              <p><strong>Description: </strong>${repo.description}</p>
//              <a href = '${repo.html_url}' target = '_blank'>View Repo</a>
//             `;
//             repoList.appendChild(repoInfo);
//         }
//         ))



        
//     })
// }

// document.addEventListener('DOMContentLoaded',getUsers);


document.addEventListener('DOMContentLoaded',(e)=>{
    const searchbx = document.querySelector('#search');
    const searchbtn = document.querySelector('#submit');
    const userApi = 'https://api.github.com/search/users?q=';
    const repoApi = 'https://api.github.com/users/octocat/repos';
  


    async function checkUser(user){
    const response1= await fetch(userApi + user)
    const data = await response1.json()
    const userlist=document.querySelector(`#user-list`)
    userlist.innerHTML=``
    user.forEach((item) => {
        const userName = document.createElement(`li`)
        userName.textContent= item.login
        userlist.appendChild(userName)
        
    });
}

    async function checkRepo(){
        const response2 = await fetch(repoApi)
        const data = await response2.json()
        const repolist = document.querySelector(`#repos-list`)
        repolist.innerHTML=``
        data.forEach((item)=>{
            const repoName = document.createElement(`li`)
            repoName.textContent=item.name;
            repolist.appendChild(repoName)
        })
}
searchbtn.addEventListener(`click`,(e)=>{
    e.preventDefault()
    let userInsert = searchbx.value
    checkRepo(userInsert)
    checkUser(userInsert)
})
})