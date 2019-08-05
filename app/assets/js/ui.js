'use strict';

var pause = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-pause-circle fa-w-16 fa-2x"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z" class=""></path></svg>`
var play = `<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="play-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-play-circle fa-w-16 fa-2x"><path fill="currentColor" d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z" class=""></path></svg>`
 
var Grid = {
    magicGrid: null,
    options: {
        container: ".cards",
        static: true,
        animate: true,
        maxColumns: 5,
        useMin: true,
    },
    start(){
        ((cb) => {
            this.magicGrid = new MagicGrid(this.options);
            this.magicGrid.listen();
            this.update = () => this.magicGrid.positionItems()
        })(() =>{
            this.update();
        })
    },
    instance(){
        if (this.magicGrid) {
            return this.magicGrid 
        } else {
            throw Error('MagicGrid not initialized') 
        }  
    },
    update(){
        throw Error('MagicGrid not initialized')
    },
    addItem(item){
        let { container } = this.instance()
        Interface.appendElement(container)
            .then(() =>{
                console.log(this)
            })
    },
    removeItem(){

    },
}

var Interface = {
    createCard(icon){
        var tempEl = document.createElement('div')
        tempEl.innerHTML = `<div class="card rounded border border-success">${icon}</div>` 
        return tempEl.querySelector('.card')
    },
    appendElement(container){
        return new Promise((resolve, reject)=>{
            container.appendChild(this.createCard(play))
            resolve()
        })
    }
}