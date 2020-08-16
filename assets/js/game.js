var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
      }, // comma!
      refillHealth: function() {
        this.health += 20;
        this.money -= 7;
      }, // comma!
      upgradeAttack: function() {
        this.attack += 6;
        this.money -= 7;
      }
  };

  var enemyInfo = [
    {
      name: "Roborto",
      attack: 12,
      health: 50
    },
    {
      name: "Amy Android",
      attack: 13,
      health:50
    },
    {
      name: "Robo Trumble",
      attack: 14,
      health: 50
    }
  ];
  var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
  };

  // function to set name
var getPlayerName = function() {
    var name = "";
  
  // ***************************************
  // ADD LOOP HERE WITH PROMPT AND CONDITION
  // ***************************************
  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }  



    console.log("Your robot's name is " + name);
    return name;
  };
// You can also log multiple values at once like this
console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

var fightOrSkip = function() {
    // ask user if they'd like to fight or skip using  function
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  

    promptFight = promptFight.toLowerCase();

    // Enter the conditional recursive function call here!
  
    // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip") {
      // confirm user wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerInfo.playerMoney = playerInfo.money - 10;
        
        return true;
      }
    }
  }





//create function
var fight = function(enemy) {
    
    if (playerInfo.health > 0){
    window.alert("Welcome to Robot Gladiators! Round " + (i +1));
    // pick new enemy to fight based on the index of the enemyInfo.names array
    var pickedEnemyObj = enemyInfo[i];

    // reset enemyInfo.health before starting new fight
    enemyInfo.health = 50

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedenemyInfo.name variable's value into the fight function, where it will assume the value of the enemyInfo.name parameter
   // fight(pickedEnemyObj);
    }
    else {
        window.alert("You have lost your robot in battle! Game Over!")
    }
    while (playerInfo.health > 0 && enemyInfo.health > 0) {
      // ask user if they'd liked to fight or run
      if (fightOrSkip()){
          //if true,leave fight by breaking loop
          break;
      }
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
      // if user picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm user wants to skip
        var confirmSkip = 
        window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerInfo.money for skipping
          playerInfo.money = Math.max(0, playerInfo.money - 10);
          console.log("playerInfo.money", playerInfo.money)
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
      // generate random damage value based on player's attack power


enemyInfo.health = Math.max(0, enemyInfo.health - damage);
      console.log(
        playerInfo.name + ' attacked ' + enemyInfo.name + '. ' + enemyInfo.name + ' now has ' + enemyInfo.health + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyInfo.health <= 0) {
        window.alert(enemyInfo.name + ' has died!');
  
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyInfo.name + ' still has ' + enemyInfo.health + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyInfo.attack variable
      var damage = randomNumber(enemyInfo.attack - 3, enemyInfo.attack);

playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemyInfo.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
      );
  
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
      }
    }
  };
  
//execute function
for (var i = 0; i < enemyInfo.length; i++) {
    debugger;
    // call fight function with enemy robot
    for (var i = 0; i < enemyInfo.length; i++) {
        var pickedEnemyObj = enemyInfo[i];
        enemyInfo.health = 50
        fight(pickedEnemyObj);
    }
  };

   // function to start a new game
 var startGame = function() {
      // reset player stats
   playerInfo.reset();

     for (var i = 0; i < enemyInfo.length; i++) {
       if (playerInfo.health > 0) {
         window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
         var pickedEnemyObj = enemyInfo[i];
  
         enemyInfo.health = randomNumber(40,60);
  
         fight(pickedEnemyObj);

         //if we're not at the last enemy in the array
         if (playerInfo.health > 0 && i < enemyInfo.length - 1){
        // ask if user wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

        // if yes, take them to the store() function
        if (storeConfirm) {
        shop();
        }    
         }
       }
       else {
         window.alert("You have lost your robot in battle! Game Over!");
         break;
       }
     }
    


     endGame();
   };
   // function to end the entire game
   var endGame = function() {
     // if player is still alive, player wins!
     if (playerInfo.health > 0) {
       window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
     } 
     else {
       window.alert("You've lost your robot in battle.");
     }
     var playAgainConfirm = window.confirm("Would you like to play again?");

 if (playAgainConfirm) {
   // restart the game
   startGame();
 } 
 else {
   window.alert("Thank you for playing Robot Gladiators! Come back soon!");
 }
   };
   var shop = function(){

    // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  shopOptionPrompt = parseInt(shopOptionPrompt);
  // use switch case to carry out action
  switch (shopOptionPrompt) {
    case 1:
      playerInfo.refillHealth();
      break;
    case 2:
      playerInfo.upgradeAttack();
      break;
    case 3:
      window.alert("Leaving the store.");
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
  
};
   

