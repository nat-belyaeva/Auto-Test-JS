/*
Написать методы с использованием callbacks, promises, async/await
- Только callback
- Только promises (resolve + reject flow)
- Только async/await
- Комбинация callback + promise
- Комбинация promise + async/await
*/

import fetch from "node-fetch";

// Только callback
console.log('========== Только callback ==========');
function cbOnly(name, callback) {
    console.log(`My name is ${name}`);
    callback(name);
}
function question(n) {
    console.log(`${n}, how are you?`);
}
cbOnly("Ann", question);

//Только promises (resolve + reject flow)
console.log('========== promises (resolve + reject flow) ==========');

const promise = new Promise((reserve, reject) => {
   if(true){
       reserve('promise completed');
   } else {
       reject ()
   }
});

promise
    .then(data => console.log(data))
    .catch(() => console.log('error'));

console.log('========== Только callback ==========');

// ========================async/await =======================
console.log('========== async/await ==========');

async function getAndPrintUsersWithFetch(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data)
    } catch {

        console.log('error');
    }
}

getAndPrintUsersWithFetch('https://reqres.in/api/users?delay=3');


//============== Комбинация callback + promise ====================
console.log('========== callback + promise  ==========');

function call_prom(a, b) {
    console.log('a ===', a)
    console.log(b(a))
}

function prom(a) {
    return new Promise((resolve, reject) => {
        resolve(a);
    })
}

call_prom('Nat', prom);

//============== Комбинация promise + async/await ====================
console.log('========== promise + async/await  ==========');


async function await_promise(url_await, url_promise) {
    try {

        let response_await = await fetch(url_await);
        let data_await = await response_await.json();
        let id_user_Tobias = data_await.data.find(el => el.first_name === "Tobias").id // id where first_name === 'Tobias';

        fetch(`${url_promise}/${id_user_Tobias}`).then(response => response.json()).then(data => console.log(data));
    } catch {
             console.log('error');
    }
}

await await_promise('https://reqres.in/api/users?page=2', 'https://reqres.in/api/users');

