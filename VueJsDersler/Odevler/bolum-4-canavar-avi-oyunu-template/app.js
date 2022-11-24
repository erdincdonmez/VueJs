new Vue({
    el : "#app",
    data : {
        player_heal : 100,
        monster_heal : 100,
        game_is_on : false,
        turn : [{turn : "", text : ""}],
        logs : []
    },
    methods : {
        start_game : function(){
            this.game_is_on = true
        },
        attack : function(){
            var point = Math.ceil(Math.random() * 10);
            //alert(point);
            this.monster_heal-=point;
            console.log("=============");
            console.log("Monster: ", this.monster_heal);
            console.log("Player : ", this.player_heal);
            this.monster_attack();
            this.add_to_log({turn : "Player", text : "Oyuncu atağı. Vuruş=>"+point+" ", Point : point, OyuncuCanı : this.player_heal, CanavarCanı : this.monster_heal})
        },
        special_attack : function(){
            var point = Math.ceil(Math.random() * 25);
            //alert(point);
            this.monster_heal-=point;
            console.log("=============");
            console.log("Monster: ", this.monster_heal);
            console.log("Player : ", this.player_heal);
            this.monster_attack();
            this.add_to_log({turn : "Player", text : "ÖZEL Oyuncu atağı. Vuruş=>"+point+" ", Point : point, OyuncuCanı : this.player_heal, CanavarCanı : this.monster_heal})
        },
        heal_up : function(){
            var point = Math.ceil(Math.random() * 20);
            //alert(point);
            this.player_heal+=point;
            this.monster_attack();
            console.log("=============");
            console.log("Monster: ", this.monster_heal);
            console.log("Player : ", this.player_heal);
            this.add_to_log({turn : "Player", text : "İlk yardım. Vuruş=>"+point+" ", Point : point, OyuncuCanı : this.player_heal, CanavarCanı : this.monster_heal})
        },
        give_up : function(){
            this.player_heal=0;
            console.log("=============");
            console.log("Monster: ", this.monster_heal);
            console.log("Player : ", this.player_heal);
            this.add_to_log({turn : "Player", text : "Oyuncu pes etti."})

        },
        monster_attack : function(){
            var point = Math.ceil(Math.random() * 15);
            //alert(point);
            this.player_heal-=point;
            console.log("=============");
            console.log("Monster: ", this.monster_heal);
            console.log("Player : ", this.player_heal);
            this.add_to_log({turn : "Monster", text : "Canavar atağı. Vuruş=>"+point+" ", Point : point, OyuncuCanı : this.player_heal, CanavarCanı : this.monster_heal})

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
                }
            }              
            else if (value>100) {
                this.player_heal=100;
                if (confirm("Oyunu KAZANDIN, tekrar denemek ister misin?")){
                    this.player_heal=100;
                    this.monster_heal=100; 
                 }
            }            
            
        },
        monster_heal : function(value) {
             if (value<=0) { this.monster_heal=0;}
        }
    }
})