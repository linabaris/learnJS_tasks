let logins = ['iliakan', 'remy', 'no.such'];
async function getUsers(names) {
    let users = [];
  
    for(let login of names) {
      let user = fetch(`https://api.github.com/users/${login}`).then(
        response => {
          if (response.status != 200) {
            return null;
          } else {
            return response.json();
          }
        },
        failResponse => {
          return null;
        }
      );
      users.push(user);
    }
  
    let results = await Promise.all(users);
    console.log(results);
    return results;
}
console.log(getUsers(logins));