var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiple values at once like this console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Tumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt(
      "Would you like to Fight or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose."
    );
    if (promptFight === "skip" || promptFight === "SKIP") {
      var confirmSkip = window.confirm("Are you Sure you'd like to quit?");
      if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight. Goodbye!");
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }
    //subrtract the value of 'playerAttack' from the value of 'enemyHealth' and use the reults to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    //Log a resluting message to the console so we know that it worked.
    playerHealth = playerHealth - enemyAttack;

    if (promptFight === "fight" || promptFight === "FIGHT") {
      //remove enemy's health by subtracting the amount set in the playerAttack variable

      console.log(
        playerName +
          " attacked " +
          enemyName +
          ". " +
          enemyName +
          " now has " +
          enemyHealth +
          " health remaining."
      );
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }

      console.log(
        enemyName +
          " attacked " +
          playerName +
          ". " +
          playerName +
          " now has " +
          playerHealth +
          " health remaining."
      );

      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
      } else {
        window.alert(
          playerName + " still has " + playerHealth + " health left."
        );
      }
    } else {
      window.alert("You need to choose a valid option. Try again!");
    }

    //sdulting message tot the console so we know that it worked.
  }
};
var startGame = function () {
  //reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round" + (i + 1));
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
      fight(pickedEnemyName);
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  //endGamne();
};
var endGamne = function () {
  window.alert("The game has now ended. Let's see how you did!");
  if (playerHealth > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of" +
        playerMoney +
        "."
    );
  } else {
    window.alert("You've lost you robot in battle.");
  }
  var playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};
startGame();
endGamne();
