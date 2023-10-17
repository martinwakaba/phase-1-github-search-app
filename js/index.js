// fucntion for getting user
function getUsers(){
    const form = document.getElementById('github-form');
    const userData = document.getElementById('search');
    const userList = document.getElementById('useer-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = userData.value;

        if(username === ''){
            alert('No input!!! PLEASE ENTER A USER NAME')
            return;
        }else{
          let usernameSearch =   fetch(`https://api.github.com/users/${username}`)
            .then((res) => res.json)
            .then((obj) => console.log(obj))
            
            let repoSearch = fetch(`https://api.github.com/repos/${username}`)
            .then((res) => res.json)
            .then((obj) => console.log(obj))

            if(repoSearch === ''){
                alert('No repo Found!!!')
                return
            }
        }

        userList.innerHTML = '<h1>Hi</h1>'

        const userListDetails = document.createElement('li');

        userListDetails.innerHTML = `<img src = ${userData.avatar_url} alt = ${userData.login}/>
        <h3> ${userData.login}</h3>
        <a href= ${userData.html_url} target =' _blank'  >View Profile</a>`;

        userList.appendChild(userListDetails);

        const repoList = document.getElementById('repo-List');
        repoList.innerHTML = '';

        repoSearch.forEach((repo => {
            const repoInfo = document.createElement('li');
            repoInfo.innerHTML = `
            <h3>${repo.name}</h3>
             <p><strong>Description: </strong>${repo.description}</p>
             <a href = '${repo.html_url}' target = '_blank'>View Repo</a>
            `;
            repoList.appendChild(repoInfo);
        }
        ))



        
    })
}

document.addEventListener('DOMContentLoaded',getUsers);