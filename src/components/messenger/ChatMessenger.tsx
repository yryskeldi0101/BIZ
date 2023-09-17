// In Progress

// import React, { useEffect, useState } from "react";
// import MessageIcon from "../../assets/icons/free-message-2367724-1976874.webp";
// import { getChatIdRequest } from "../../api/chat/chatService";

// interface Message {
//   id: number;
//   message: string;
//   isManager: boolean;
//   senderUserId: number | null;
//   recipientUserId: number | null;
// }

// interface ChatData {
//   id: number;
//   userId: number;
//   managerId: number;
//   fullName: string;
//   messages: Message[];
// }

// const ChatMessages: React.FC<{
//   chatId: { message: number; chat: boolean };
//   setActiveChat?: (data: { message: number; chat: boolean }) => void;
// }> = ({ chatId, setActiveChat }) => {
//   const [message, setMessage] = useState("");

//   const [chatData, setChatData] = useState<ChatData | null>(null);

//   const selectedChat = chatData?.messages.find(
//     (chat) => chat.id === chatId.message
//   );
//   console.log(chatData, "sdsd");

//   useEffect(() => {
//     const getByIdChat = async () => {
//       try {
//         const { data } = await getChatIdRequest(chatId.message);
//         setChatData(data);
//       } catch (error) {
//         // console.log(error);
//       }
//     };
//     getByIdChat();
//   }, [chatId]);

//   useEffect(() => {
//     setChatData(chatData);
//   }, [chatData]);

//   const handleSendMessage = () => {
//     if (selectedChat) {
//       const updatedChatData = chatData?.messages.map((chat) => {
//         if (chat.id === selectedChat.id) {
//           return {
//             ...chat,
//             messages: [
//               ...chat.messages, // Fix this line
//               {
//                 message: message,
//                 isManager: true,
//                 setActiveChat: setActiveChat,
//               },
//             ],
//           };
//         }
//         return chat;
//       });

//       setChatData({ ...chatData, messages: updatedChatData });
//       setMessage("");
//     }
//   };
//   if (!chatData || chatData.messages.length === 0) {
//     return (
//       <div className=" text-orange-500 text-2xl mr-[110px]">
//         No messages available
//       </div>
//     );
//   }
//   return (
//     <div className="w-2/3 bg-white pt-5 px-4 rounded-lg  flex flex-col h-full overflow-y-auto">
//       <div className="sticky top-0 bg-white">
//         <div className={`pb-2 mb-4 ${selectedChat ? "border-b" : ""}`}>
//           <div className="flex items-center space-x-3">
//             {selectedChat ? (
//               <>
//                 <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
//                   <p className="text-base font-medium">Н</p>
//                 </div>
//                 <div>
//                   <p className="text-xl font-semibold  text-slate-600">
//                     {selectedChat.fullName}
//                   </p>
//                   {/* <p className="text-gray-500">12.12.12</p> */}
//                 </div>
//               </>
//             ) : null}
//           </div>
//         </div>
//       </div>
//       <div className="pt-2 h-[20rem] overflow-y-auto">
//         {selectedChat && (
//           <div className="space-y-2">
//             {[selectedChat].map((item: Message, index) => {
//               const isUserMessage = item.isManager === true;
//               const messageClass = isUserMessage
//                 ? "bg-slate-600 text-white ml-auto"
//                 : "bg-gray-100";
//               return (
//                 <div
//                   key={index}
//                   className={`p-2 rounded-md shadow-md ${messageClass} w-96 `}
//                 >
//                   {chatData?.messages.map((item: Message) => (
//                     <p>{item.message}</p>
//                   ))}
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//       <div className="mt-5 flex items-center">
//         {selectedChat ? (
//           <>
//             <input
//               type="text"
//               placeholder="Type here"
//               className="input input-bordered w-[22rem]"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//             <button
//               className="bg-slate-600 text-white py-3 px-6 rounded ml-2"
//               onClick={handleSendMessage}
//             >
//               Отправить
//             </button>
//           </>
//         ) : (
//           <div className="m-auto">
//             <p className="text-xl flex items-center text-gray-800">
//               Выберите чат, чтобы начать общение.
//               <img src={MessageIcon} alt="message" className="w-8 h-8" />
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChatMessages;
