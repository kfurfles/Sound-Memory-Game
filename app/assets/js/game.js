'use strict';
var Game = {
    audioOne: null,
    audioTwo: null,
    methods:{
        container: $(`.cards`),
        async setCardSounds(){
            var soundList = getLocalStorage('sounds')
            var promisseList = soundList.map( async sound =>{
                return await this.addCard(sound)
            })
            let result = await Promise.all(promisseList)
            this.bindEvents()
            return result
        },
        addCard(sound){
            const { play }  = Interface
            Interface.createElement(play, sound)
            .then((elementoCard) =>{
                    this.container.append(elementoCard)
            })
        },
        playMusic(button){
            console.log(button)   
            this.toogleOverlay()
            var audio = button.querySelector('audio')
            audio.currentTime = 0
            audio.play()
            this.endAudio(audio)
        },
        endAudio(audio){
            audio.onended = (el) => {
                this.toogleOverlay()
                console.log(`audio : ${audio} terminou`)
            }
        },
        bindEvents(){
            var buttonCards = $(`.card-button`)
            var playMusic = this.playMusic.bind(this) 
            buttonCards.map((i,el) =>{
                $(el).click(function(e){
                    playMusic(this)
                })
            })
        },
        toogleOverlay(){
            $('.modal-wave').toggleClass('active')
        }
    },
    async init(){
        await this.methods.setCardSounds()
    }
}