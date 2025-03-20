// app/page.js
'use client';  // 确保在客户端渲染

import React, { useState, useEffect } from "react";

function Page() {
  const [carDoor, setCarDoor] = useState(null); // 随机决定车的位置
  const [FirstChosenDoor, setFirstChosenDoor] = useState(null); // 玩家第一次选择的门
  const [selectedDoor, setSelectedDoor] = useState(null); // 玩家选择的门
  const [revealedDoor, setRevealedDoor] = useState(null); // 主持人揭示的门
  const [gameStep, setGameStep] = useState(1); // 游戏步骤（1 = 选择门，2 = 揭示门）

  const doors = [0, 1, 2]; // 三扇门

  // 1. 随机设置车的位置
  useEffect(() => {
    if (carDoor === null) {
      setCarDoor(Math.floor(Math.random() * 3)); // 随机选择车的位置
    }
  }, [carDoor]);

  // 2. 游戏逻辑：玩家选择一扇门
  function handleDoorClick(door) {
    if (gameStep === 1 && selectedDoor === null) {
      setSelectedDoor(door); // 选择门
      setFirstChosenDoor(door); // 选择门

      // 随后，主持人揭示一扇没有车的门
      const doorToReveal = doors.filter(
        (d) => d !== door && d !== carDoor
      );
      const randomRevealedDoor = doorToReveal[Math.floor(Math.random() * doorToReveal.length)];
      setRevealedDoor(randomRevealedDoor); // 揭示门
      setGameStep(2); // 进入游戏的下一步
    }
  }

  // 3. 换门逻辑
  function handleSwitchDoor(switchdoor) {
    if (gameStep === 2 && selectedDoor !== null && revealedDoor !== null) {
      // 玩家选择是否换门
      if (switchdoor === 1) {
        const remainingDoors = doors.filter(
          (d) => d !== selectedDoor && d !== revealedDoor
        );
        setSelectedDoor(remainingDoors[0]); // 换到剩下的门
      }
      setGameStep(3); // 结束游戏
    }
  }

  // 4. 显示结果
  function checkResult() {
    if (selectedDoor !== null && carDoor !== null) {
      return selectedDoor === carDoor ? "恭喜！你赢了！" : "很遗憾，你输了！";
    }
    return "";
  }

  return (
    <div>
      <h1>Monty Hall 游戏</h1>
      <div>
        {doors.map((door) => (
          <button
            key={door}
            onClick={() => handleDoorClick(door)}
            disabled={gameStep === 2 || gameStep === 3}
          >
            🚪 {door + 1}
          </button>
        ))}
      </div>

      {gameStep === 2 && (
        <div>
          <p>你选择了门 {selectedDoor !== null ? selectedDoor + 1 : "无"}。</p>
          <p>主持人揭示了门 {revealedDoor !== null ? revealedDoor + 1 : "无"}，它后面没有车！</p>
          <button onClick={() => handleSwitchDoor(1)}>换门</button>
          <button onClick={() => handleSwitchDoor(0)}>不换门</button>
        </div>
      )}

      {gameStep === 3 && (
        <div>
          <p>游戏结束！</p>
          <p>你首先选择的门是 {FirstChosenDoor !== null ? FirstChosenDoor + 1 : "无"} </p>
          <p>展示的门是 {revealedDoor !== null ? revealedDoor + 1 : "无"}, 其中没有车 </p>
          <p>你最终选择的门是 {selectedDoor !== null ? selectedDoor + 1 : "无"} </p>
          <p>正确答案是 {carDoor !== null ? carDoor + 1 : "无"} </p>
          <p>{checkResult()}</p>
        </div>
      )}
    </div>
  );
}

export default Page;
