
function Chat() {
  return (
    <>
    <div className="p-6 mb-96 mt-8 max-w-sm mx-auto bg-white dark:bg-slate-400 rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
            <img className="h-12 w-12" src="/img/chat.png" alt="ChitChat Logo"/>
        </div>
        <div>
            <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
            <p className="text-slate-500 dark:text-slate-100">You have a new message!</p>
        </div>
    </div>
  </>
  );
}

export default Chat;