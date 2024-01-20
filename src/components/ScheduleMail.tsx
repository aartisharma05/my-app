import { useState } from "react";
import SchedularForm from "./SchedularForm";
import DateTimePicker from "react-datetime-picker";

import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


 type ValuePiece = Date | null;

 type Value = ValuePiece | [ValuePiece, ValuePiece];

const ScheduleMail = () => {

  const [open, setOpen] = useState<boolean>(false);


  const [value, onChange] = useState<Value>(new Date());

  const [formData, setFormData] = useState({
    schedularname: "",
    date: "",
    frequency: "",
    frommail: "",
    tomails: [],
    subject:"",
  });

  const handleSubmit=(e: { preventDefault: () => void; })=>{
    e.preventDefault();
    console.log(formData);
    

  }

  const handleInputChange = (e: { target: any; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
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
            <form className="" onSubmit={handleSubmit}>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-semibold md:text-left mb-1 md:mb-0 pr-4"
                    htmlFor="schedularname"
                  >
                    Schedular Name
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    name="schedularname"
                    id="schedularname"
                    type="text"
                    value={formData.schedularname}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-semibold md:text-left mb-1 md:mb-0 pr-4"
                    htmlFor="date"
                  >
                    Start date and time
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
                    
                  />
                </div>
              </div>


              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                 
                >
                  Message
                </label>
              </div>

              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-semibold md:text-left mb-1 md:mb-0 pr-4"
                    htmlFor="frommail"
                  >
                    From
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="frommail"
                    name="frommail"
                    type="email"
                    onChange={handleInputChange}
                  />
                </div>
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="md:flex md:items-center my-2">
                <CKEditor
                  editor={ClassicEditor}
                  data="<p>Hello from CKEditor&nbsp;5!</p>"
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    // console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event) => {
                    console.log(event);
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </div>

              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                  <button
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Submit
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
