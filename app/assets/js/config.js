'use strict';
var config = {
    methods:{
        defaultDifficulty: 'EASY',
        difficult: getLocalStorage('difficulty'),
        initilizeConfig(){

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
        }
    },
    init(){

    }
}