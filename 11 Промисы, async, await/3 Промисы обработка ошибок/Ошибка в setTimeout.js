new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("Whoops!");
    }, 1000);
}).catch(alert);

//Выполнится ли .catch?
//нет, тк setTimeout - асинхронно и выполнится не сразу.