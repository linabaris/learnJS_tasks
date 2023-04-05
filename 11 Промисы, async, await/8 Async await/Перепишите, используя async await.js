//1
const loadJson = async (url) => {

    let res = await fetch(url);
    if(res.ok) {
        let data = await res.json();
        return data;
    }

    throw new Error(res.status);
    
}

//2
class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
}
  
  async function loadJson (url) {
    let res = await fetch(url);
        if (res.status == 200) {
            let data = res.json()
            return data;
        } else {
            throw new HttpError(response);
        }
    }
  
  // Запрашивать логин, пока github не вернёт существующего пользователя.
  async function demoGithubUser() {
    let user;
    while(true) {
        let name = prompt("Введите логин?", "iliakan");

        try {
            user = await loadJson(`https://api.github.com/users/${name}`);
            break;
        } catch(err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
            } else {
                throw err;
            }
            
        }
        
    }
    alert(`Полное имя: ${user.name}.`);
        return user;
  
}
  
demoGithubUser();