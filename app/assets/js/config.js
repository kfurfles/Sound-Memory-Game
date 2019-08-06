'use strict';
var Config = {
    methods:{
        defaultDifficulty: 'EASY',
        difficult: getLocalStorage('difficulty'),
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
            return [
                'Alarm01.wav',
                'Alarm02.wav',
                'Alarm03.wav',
                'Alarm04.wav',
                'Alarm05.wav',
                'Alarm06.wav',
                'Alarm07.wav',
                'Alarm09.wav',
                'Alarm10.wav',
                'sound-03.mp3'
            ]
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