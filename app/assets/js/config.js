'use strict';
var Config = {
    methods:{
        defaultDifficulty: 'EASY',
        difficult: getLocalStorage('difficulty'),
        items: parseInt(location.hash.replace(`#`,``)),
        initilizeConfig(){
            setLocalStoage('sounds', this.shuffleSounds())
        },
        setDifficulty(option){
            option = option || this.defaultDifficulty
            switch(option.toUpperCase()){
                case 'EASY':
                    setLocalStoage('difficulty','EASY')
                case 'MEDIUM':
                    setLocalStoage('difficulty','MEDIUM')
                case 'HARD':
                    setLocalStoage('difficulty','HARD')

                default:
                    console.warn(`difficulty not defined, auto setting to ${this.defaultDifficulty} `)
            }
        },
        soundsList(){
            var arr = [
                'atabaque.mp3',
                'berimbau.mp3',
                // 'berrante.mp3',
                // 'pandeiro.mp3',
                // 'sanfona.mp3',
                // 'sinos.mp3',
                // 'torelli.mp3',
                // 'viola.mp3'
            ]

            if (this.items) {
                if (this.items > arr.length) {
                    arr = arr.slice(arr.length)
                }
                arr = arr.slice(arr.length - this.items)
                return arr
            } else {
                return arr
            }
        },
        shuffleSounds(){
            return _.shuffle(this.duplicateSounds())
        },
        duplicateSounds(){
            return [...this.soundsList(),...this.soundsList()]
        }
    },
    init(){
        this.methods.initilizeConfig()
    }
}
