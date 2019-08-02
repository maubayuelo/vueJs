document.addEventListener("DOMContentLoaded", function(){
  var app = new Vue({
    el: '#app',
    data:{
      oponent_1: 'Monster',
      oponent_1_pic: 'https://cdn.dribbble.com/users/458522/screenshots/5481347/rock_monster__.jpg',
      oponent_2: 'Robot',
      oponent_2_pic: 'https://cdn.dribbble.com/users/2129332/screenshots/4222174/roboe.jpg',
      monsterHealth: 100,
      robotHealth: 100,
      gameIsRunning: false,
      winner: false,
      turns: []
    },
    methods:{
      startGame: function(){
        this.gameIsRunning = true;
        this.monsterHealth = 100;
        this.robotHealth = 100;
        this.winner = false;
        this.turns = [];
      },
      logs: function(oponentHits, oponentReceiver, damage, heal){
        if(damage){
          this.turns.unshift(
            {
              text: oponentHits + ' hits ' + oponentReceiver + ' for ' + damage,
              isMonster : oponentHits,
              isRobot : oponentHits,
            }
          );
        }
        if(heal){
          this.turns.unshift(
            {
              text: oponentHits + ' heals by ' + heal,
              isMonster : oponentHits,
              isRobot : oponentHits,
            }
          );
        }

      },
      calculateAtacks: function(minDamag, maxDamag){

        var monsterDamage = this.calculateDamage(minDamag, maxDamag);
        var robotDamage = this.calculateDamage(minDamag, maxDamag);

        this.logs(this.oponent_1, this.oponent_2, robotDamage, 0);
        this.logs(this.oponent_2, this.oponent_1, monsterDamage, 0);

        this.monsterHealth -= monsterDamage;
        this.robotHealth -= robotDamage;
        if(this.checkWin){
          this.checkWin(this.oponent_1, this.monsterHealth);
          this.checkWin(this.oponent_2, this.robotHealth);
          return;
        }
      },
      attack:function(){
        this.calculateAtacks(3, 10);
      },
      superAttack: function(){
        this.calculateAtacks(10, 40);
      },
      heal: function(){
        var monsterHealing = this.calculateDamage(20, 40);
        var robotHealing = this.calculateDamage(20, 40);
        this.monsterHealth += monsterHealing;
        this.robotHealth += robotHealing;
        if(this.monsterHealth > 100){
          this.monsterHealth = 100;
          this.logs(this.oponent_1, this.oponent_2, 0, monsterHealing);
        }else{
          this.logs(this.oponent_1, this.oponent_2, 0, monsterHealing);
        }
        if(this.robotHealth > 100){
          this.robotHealth = 100;
          this.logs(this.oponent_2, this.oponent_1, 0, robotHealing);
        }else{
          this.logs(this.oponent_2, this.oponent_1, 0, robotHealing);
        }
      },
      giveUp: function(){
        this.gameIsRunning = false;
      },
      calculateDamage: function (min, max){
        return Math.max(Math.floor((Math.random() * max)) + 1, min);
      },
      checkWin: function(oponent, playerHealth){
        if(playerHealth <= 0){
          this.gameIsRunning = false;
          if(oponent != this.oponent_1){
            this.winner = this.oponent_1;
            this.robotHealth = 0;
          }else{
            this.winner = this.oponent_2;
            this.monsterHealth = 0;
          }
          return false;
        }
        return true;
      }
    }
  })
});
