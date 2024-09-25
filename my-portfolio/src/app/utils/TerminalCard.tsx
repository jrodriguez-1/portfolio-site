import React, { useState, ChangeEvent, FormEvent } from 'react';

interface OutputLine {
  text: string;
  type: 'input' | 'output';
}

const TerminalCard: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<OutputLine[]>([
    { text: 'Welcome to the terminal!', type: 'output' }
  ]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOutput([
      ...output,
      { text: `> ${input}`, type: 'input' },
      { text: `Command '${input}' not recognized.`, type: 'output' }
    ]);
    setInput('');
  };

  return (
    <div className="max-w-lg h-screen mx-auto mt-10">
      <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-start p-2 bg-gray-800">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="p-4">
          <div className="h-64 overflow-y-auto mb-4">
            {output.map((line, index) => (
              <p key={index} className={`font-mono ${line.type === 'input' ? 'text-blue-400' : 'text-lime-600'}`}>
                {line.text}
              </p>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex">
            <span className="text-lime-700 font-mono mr-2">{'>'}</span>
            <input
              type="text"
              value={input}
              onChange={handleInput}
              className="flex-grow bg-transparent text-lime-600 font-mono focus:outline-none"
              placeholder="Type a command..."
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TerminalCard;