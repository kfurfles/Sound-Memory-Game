'use strict';
function getLocalStorage(key){
    JSON.parse(window.localStorage.getItem(key) || "{}")
}

function setLocalStoage(key, data){
    localStorage.setItem(key, JSON.stringify(data))
}