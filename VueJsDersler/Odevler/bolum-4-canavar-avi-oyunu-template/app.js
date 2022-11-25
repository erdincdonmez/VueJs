new Vue({
    el : "#app",
    data : {
        player_heal : 100,
        monster_heal : 100,
        logs : [],
        game_is_on : false,
        attack_multiple : 10,
        special_attack_multiple : 25,
        heal_up_multiple : 20,
        monster_attack_multiple : 25,
        turn : [{turn : "", text : ""}],
        log_text : {
            attack : "Oyuncu atağı. Vuruş=>",
            special_attack : "ÖZEL Oyuncu atağı. Vuruş=>",
            monster_attack : "Canavar atağı. Vuruş=>",
            heal_up : "İlk yardım. Alınan can=>",
            give_up : "Oyuncu pes etti.!!!"
        },
    },
    methods : {
        start_game : function(){
            this.game_is_on = true
        },
        attack : function(){
            var point = Math.ceil(Math.random() * this.attack_multiple);
            //alert(point);
            this.monster_heal-=point;
            console.log("=============");
            console.log("Monster: ", this.monster_heal);
            console.log("Player : ", this.player_heal);
            this.add_to_log({turn : "Player", text : this.log_text.attack+point+" ", Point : point, OyuncuCanı : this.player_heal, CanavarCanı : this.monster_heal})
            this.monster_attack();
        },
        special_attack : function(){
            var point = Math.ceil(Math.random() * this.special_attack_multiple);
            //alert(point);
            this.monster_heal-=point;
            console.log("=============");
            console.log("Monster: ", this.monster_heal);
            console.log("Player : ", this.player_heal);
            this.add_to_log({turn : "Player", text : this.log_text.special_attack+point+" ", Point : point, OyuncuCanı : this.player_heal, CanavarCanı : this.monster_heal})
            this.monster_attack();
        },
        heal_up : function(){
            var point = Math.ceil(Math.random() * this.heal_up_multiple);
            //alert(point);
            this.player_heal+=point;
            this.add_to_log({turn : "Player", text : this.log_text.heal_up+point+" ", Point : point, OyuncuCanı : this.player_heal, CanavarCanı : this.monster_heal})
            this.monster_attack();
            console.log("=============");
            console.log("Player : ", this.player_heal);
            console.log("Monster: ", this.monster_heal);
        },
        give_up : function(){
            this.player_heal=0;
            console.log("=============");
            console.log("Monster: ", this.monster_heal);
            console.log("Player : ", this.player_heal);
            this.add_to_log({turn : "Player", text : this.log_text.give_up})

        },
        monster_attack : function(){
            var point = Math.ceil(Math.random() * this.monster_attack_multiple);
            //alert(point);
            this.player_heal-=point;
            console.log("=============");
            console.log("Monster: ", this.monster_heal);
            console.log("Player : ", this.player_heal);
            this.add_to_log({turn : "Monster", text : this.log_text.monster_attack+point+" ", Point : point, OyuncuCanı : this.player_heal, CanavarCanı : this.monster_heal})

        },
        add_to_log : function(log){
            this.logs.push(log);
        }

    }, 
    watch : {
        player_heal  : function(value) {
            if (value<=0) { 
                this.player_heal=0;
                if (confirm("Oyunu KAYBETTİN, tekrar denemek ister misin?")){
                   this.player_heal=100;
                   this.monster_heal=100; 
                   this.logs = [];
                }
            }              
            else if (value>100) {
                this.player_heal=100;
                if (confirm("Oyunu KAZANDIN, tekrar denemek ister misin?")){
                    this.player_heal=100;
                    this.monster_heal=100; 
                   this.logs = [];
                 }
            }            
            
        },
        monster_heal : function(value) {
             if (value<=0) { this.monster_heal=0;}
        }
    },
    computed : {
        player_progress : function(){
            return {
                width : this.player_heal + "%"
            }
        },
        monster_progress : function(){
            return {
                width : this.monster_heal + "%"
            }
        }
    }
})