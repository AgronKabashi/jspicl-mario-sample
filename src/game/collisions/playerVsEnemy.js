import { playerDead } from "../states/playerDead";
import { enemyDead } from "../states/enemyDead";

export function playerVsEnemy (actor1, actor2) {
  let player;
  let enemy;
  if (actor1.type === "player") {
    player = actor1;
    enemy = actor2;
  }
  else {
    player = actor2;
    enemy = actor1;
  }

  if (player.y + player.currentAnimation.height < enemy.y + 5) {
    enemy.health = Math.max(enemy.health - 1, 0);
    player.yVelocity = -50;
  }
  else {
    player.health = Math.max(player.health - 1, 0);
  }

  if (player.health === 0) {
    player.updateState = playerDead;
  }

  if (enemy.health === 0) {
    enemy.updateState = enemyDead;
  }
}
