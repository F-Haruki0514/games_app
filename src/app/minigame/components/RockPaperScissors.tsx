"use client";

import { Input } from '@/components/ui/input';
import { useState } from 'react';

// じゃんけんの手の選択肢を定義
const options: Array<'グー' | 'チョキ' | 'パー'> = ['グー', 'チョキ', 'パー'];

const getComputerChoice = (): 'グー' | 'チョキ' | 'パー' => {
  return options[Math.floor(Math.random() * options.length)];
};

const determineWinner = (
  userChoice: 'グー' | 'チョキ' | 'パー',
  computerChoice: 'グー' | 'チョキ' | 'パー'
): '勝ち' | '負け' | '引き分け' => {
  if (userChoice === computerChoice) return '引き分け';
  if (
    (userChoice === 'グー' && computerChoice === 'チョキ') ||
    (userChoice === 'チョキ' && computerChoice === 'パー') ||
    (userChoice === 'パー' && computerChoice === 'グー')
  ) {
    return '勝ち';
  }
  return '負け';
};

export default function RockPaperScissors() {
  const [userChoice, setUserChoice] = useState<'グー' | 'チョキ' | 'パー' | null>(null);
  const [computerChoice, setComputerChoice] = useState<'グー' | 'チョキ' | 'パー' | null>(null);
  const [result, setResult] = useState<string>('');
  const [winCount, setWinCount] = useState<number>(0);

  const handleClick = (choice: 'グー' | 'チョキ' | 'パー') => {
    const compChoice = getComputerChoice();
    const gameResult = determineWinner(choice, compChoice);
    
    setUserChoice(choice);
    setComputerChoice(compChoice);
    setResult(gameResult);

    if (gameResult === '勝ち') {
      setWinCount(winCount + 1);
    } else if (gameResult === '負け') {
      alert(`ゲームオーバー！連勝記録は: ${winCount}`);
      setWinCount(0);
    }
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <h1 className="text-4xl font-bold text-white mb-8">じゃんけんゲーム</h1>
      
      <div className="flex space-x-4 mb-8">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleClick(option)}
            className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-100 transition duration-300"
          >
            {option}
          </button>
        ))}
      </div>
      
      {userChoice && (
        <div className="text-center text-white mb-8">
          <p className="text-lg">あなたの手: <span className="font-bold">{userChoice}</span></p>
          <p className="text-lg">コンピュータの手: <span className="font-bold">{computerChoice}</span></p>
          <p className="text-2xl mt-4">結果: <span className="font-bold">{result}</span></p>
          <p className="text-lg mt-2">連勝記録: <span className="font-bold">{winCount}</span></p>
        </div>
      )}
      
      <Input
        type="button"
        value="もう一度遊ぶ"
        onClick={resetGame}
        className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-100 transition duration-300 cursor-pointer"
      />
    </div>
  );
}
