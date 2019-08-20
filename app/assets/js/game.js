'use strict';
var Game = {
    audioOne: null,
    audioTwo: null,
    playCongratzSound(cb) {
        var el = document.querySelector('.congratz-sounds')
        Game.methods.music(el,function(){
            cb()
        })
    },
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
        music(audio,cb){
            audio.currentTime = 0
            audio.play()
            this.endAudio(audio,cb)
        },
        endAudio(audio,cb){
            return audio.onended = (el) => {
                console.log(`end music`)
                return cb()
            }
        },
        playMusic(card,cb){
            this.toogleOverlay()
            var audio = card.querySelector('audio')
            Game.methods.music(audio,() =>{
                this.toogleOverlay()
                cb()
            })
        },
        bindEvents(){
            var buttonCards = $(`.card`)
            var playMusic = this.playMusic.bind(this)
            var setAudioMusic = this.setAudioMusic.bind(this)

            buttonCards.map((i,el) =>{
                $(el).click((e) =>{
                    setAudioMusic($(e.currentTarget))
                    playMusic(e.currentTarget, () =>{
                        this.equalCard()
                    })
                })
            })
        },
        async setAudioMusic($card){
            if (!Game.audioOne) {
                Game.audioOne  = $card;
                $card.addClass(`active one`)
                return 
            }
            if (!Game.audioTwo) {
                Game.audioTwo = $card;
                $card.addClass(`active two`)
                return 
            }
        },
        resetAudioMusic(){
            Game.audioOne.removeClass(`active one`)
            Game.audioTwo.removeClass(`active two`)
            Game.audioOne = null
            Game.audioTwo = null
        },
        toogleOverlay(){
            $('.modal-wave').toggleClass('active')
        },
        equalCard(){
            return new Promise((resolve, reject) =>{
                var { audioOne, audioTwo } = Game
                if (audioOne && audioTwo) {
                    var srcOne = audioOne.find(`audio`).get(0).src
                    var srcTwo = audioTwo.find(`audio`).get(0).src
                
                    if (srcOne === srcTwo) {
                        Game.playCongratzSound(() =>{
                            audioOne.remove()
                            audioTwo.remove()
                            this.resetAudioMusic()
                            Grid.init()
                            resolve()
                        })
                    } else {
                        this.resetAudioMusic()
                    }
                }
            })
        }
    },
    async init(){
        await this.methods.setCardSounds()
    }
}