import { useState } from "react";
import SchedularForm from "./SchedularForm";

const ScheduleMail = () => {

  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div
        className=" border mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="container w-full border border-decoration decoration-dashed p-2 m-2 cursor-pointer ">
          <button
            className="border border-neutral-300 rounded-lg py-1.5 px-10 my-2 bg-red-400 text-white"
            onClick={() => setOpen(true)}
          >
            Schedule Mail
          </button>
          <SchedularForm open={open} onClose={() => setOpen(false)}>
            <form className="w-full max-w-lg">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-semibold md:text-left mb-1 md:mb-0 pr-4"
                    htmlFor="inline-full-name"
                  >
                    Schedular Name
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    value="Jane Doe"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-semibold md:text-left mb-1 md:mb-0 pr-4"
                    htmlFor="inline-password"
                  >
                    Start date and time
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-password"
                    type="password"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-semibold md:text-left mb-1 md:mb-0 pr-4"
                    htmlFor="inline-password"
                  >
                    Frequency
                  </label>
                </div>
                <div className="md:w-2/3">
                  {/* Dropdown */}
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-password"
                    type="password"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-semibold md:text-left mb-1 md:mb-0 pr-4"
                    htmlFor="inline-password"
                  >
                    Time Zone
                  </label>
                </div>
                <div className="md:w-2/3">
                  {/* dropdown */}
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-password"
                    type="password"
                  />
                </div>
              </div>

              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                  htmlFor="inline-password"
                >
                  Message
                </label>
              </div>

              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-semibold md:text-left mb-1 md:mb-0 pr-4"
                    htmlFor="inline-password"
                  >
                    From
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-password"
                    type="password"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-semibold md:text-left mb-1 md:mb-0 pr-4"
                    htmlFor="inline-password"
                  >
                    To
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-password"
                    type="password"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-semibold md:text-left mb-1 md:mb-0 pr-4"
                    htmlFor="inline-password"
                  >
                    Subject
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-password"
                    type="password"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                  <button
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                  >
                    Save
                  </button>
                  <button
                    className=" ml-1 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </SchedularForm>
        </div>
      </div>
    </>
  );
}

export default ScheduleMail;
