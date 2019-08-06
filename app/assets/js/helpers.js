'use strict';
function getLocalStorage(key){
    return JSON.parse(window.localStorage.getItem(key) || "{}")
}

function setLocalStoage(key, data){
    localStorage.setItem(key, JSON.stringify(data))
}