import { useState } from "react";

import DateTimePicker from "react-datetime-picker";

import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

type propTypes = {
  open: boolean;
  onClose: () => void;
 
};


const ScheduleMailModalForm: React.FC<propTypes> = ({
  open,
  onClose,

}) => {
  type ValuePiece = Date | null;

  type Value = ValuePiece | [ValuePiece, ValuePiece];

const [isSubmitted, setIsSubmitted] =  useState(false);

  const [formData, setFormData] = useState({
    tomails: [],
    date: "",
    subject: "",
    body: "",
   
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
    // clearState();
  };

  console.log(handleSubmit);
  //  const clearState = () => {
  //    setFormData({ schedularname: "",
  //   date: "",
  //   frequency: "",
  //   frommail: "",
  //   tomails: [],
  //   subject: ""});
     
  //  };
 

  const handleInputChange = (e: { target: any }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <form className="" onSubmit={handleSubmit} method="post">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-semibold md:text-left mb-1 md:mb-0 pr-4"
              htmlFor="date"
            >
              Schedule Date and time
            </label>
          </div>
          <div className="md:w-2/3 bg-slate-400 rounded-lg">
            <DateTimePicker
              onChange={(value) =>
                handleInputChange({ target: { name: "date", value } })
              }
              value={formData.date}
              name="date"
              id="date"
              required
            />
          </div>
        </div>

        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
            Message
          </label>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-semibold md:text-left mb-1 md:mb-0 pr-4"
              htmlFor="tomail"
            >
              To
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="tomail"
              name="tomail"
              type="email"
              value={formData.tomails[0]}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-semibold md:text-left mb-1 md:mb-0 pr-4"
              htmlFor="subject"
            >
              Subject
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="md:flex md:items-center my-2">
          <div className="w-full" aria-colspan={2}>
            <textarea
              rows={10}
              cols={10}
              id="body"
              name="body"
              value={formData.body}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
              onClick={onClose}
            >
              Submit
            </button>
            <button
              className=" ml-1 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
};


export default ScheduleMailModalForm;

