import React, { useState } from "react";
import group22 from "../assets/logo/Group 22.svg";
import mira from "../assets/logo/MIRA.svg";

const ChatModel = () => {
  const [inputValue, setInputValue] = useState("");
  const [instructions, setInstructions] = useState(true);
  const [instructionMessages, setInstructionMessages] = useState([
    "Explore mortgage plans, financial advice, and investment strategies with us.",
    "Need help with finances? Ask about mortgages or loan <br /> rates",
    "Curious about finance? Inquire about mortgages guidance here.",
  ]);
  const [messages, setMessages] = useState(["a", "b", "c", "d", "e", "f", "g"]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 pt-[100px] pb-[50px]">
      <div className='w-full h-[4rem] bg-gradient-to-r  from-blue-800 to-fuchsia-500 flex mt-4'>
        <img src={group22} className='ml-3 mt-2 h-[2rem] w-[2rem]' alt = ''></img>
        <img src={mira} className='ml-3 mt-1 h-[3rem] w-[3rem]'  alt = ''></img>
      </div>
      <div className='flex flex-col w-full h-full pb-24 px-5 overflow-hidden'>
        {messages.length === 0 ? (
          <>
            <img
              loading='lazy'
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/18bb164acd9b11f17894f9a9af8c09ec18e04e51732353efdb01b2fca9864feb?apiKey=1eeb4ba3f53c45c3b5558e24572a3e13&'
              alt='Company Logo'
              onError={(event) => {
                event.target.src = "placeholder-image.png";
              }}
              className='mt-96 aspect-square w-[60px]'
            />
            <div className='mt-7 text-xl leading-6 text-center text-gray-500 whitespace-nowrap'>
              What can I do for you today?
            </div>
            {instructions &&
              instructionMessages.map((message, index) => (
                <div
                  key={index}
                  className='justify-center py-5 pr-9 pl-3 mt-3 max-w-full rounded-lg border border-gray-300 border-solid w-[424px]'
                >
                  {message}
                </div>
              ))}
          </>
        ) : (
          <>
            {instructions &&
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`py-5 pr-${index % 2 === 1 ? "9" : "3"} text-${
                    index % 2 === 1 ? "white" : "black"
                  } pl-${
                    index % 2 === 1 ? "3" : "9"
                  } mt-3 max-w-full rounded-lg border bg-${
                    index % 2 === 1 ? "blue-600" : "gray-500"
                  } border-gray-300 border-solid w-[424px] ${
                    index % 2 === 1 ? "justify-start" : "justify-end"
                  }`}
                >
                  {message}
                </div>
              ))}
          </>
        )}
      </div>
      <div className='flex mt-6 absolute bottom-6'>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='Write your message...'
          className='px-3  w-[17rem] py-2 text-base leading-6 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <button
          onClick={handleSendMessage}
          className='ml-2  px-4 py-2  bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatModel;
