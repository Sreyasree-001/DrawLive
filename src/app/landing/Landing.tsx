"use client";

const Landing = () => {
  return (
    <>
      <div className="h-auto w-fit flex flex-col justify-center items-center p-5 space-y-6 md:flex-row md:space-x-10 md:space-y-0">
        <div className="md:h-80 md:w-80 lg:w-96 flex flex-col space-y-5 justify-center items-center border-2 border-slate-200 rounded-md p-3">
          <h1 className="text-2xl text-blue-500 mb-2 md:text-3xl">
            Create new room
          </h1>
          <input
            type="text"
            placeholder="Name"
            className="p-1 border-2 border-slate-200 rounded-md"
          />
          <input
            type="text"
            placeholder="Room id"
            className="p-1 border-2 border-slate-200 rounded-md"
          />
          <div>
            <button className="bg-indigo-900 p-2 text-slate-200 rounded-md text-sm">
              Create Room
            </button>
          </div>
        </div>
        <div className="md:h-80 md:w-80 lg:w-96 flex flex-col space-y-5 justify-center items-center border-2 border-slate-200 rounded-md p-3">
          <h1 className="text-2xl text-blue-500 mb-2 md:text-3xl">Join new room</h1>
          <input
            type="text"
            placeholder="Name"
            className="p-1 border-2 border-slate-200 rounded-md"
          />
          <input
            type="text"
            placeholder="Room id"
            className="p-1 border-2 border-slate-200 rounded-md"
          />
          <div>
            <button className="bg-indigo-900 p-2 text-slate-200 rounded-md text-sm">
              Join Room
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
