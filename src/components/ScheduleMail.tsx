import { useState } from "react";
import SchedularForm from "./SchedularForm";
import ScheduleMailModalForm from "./ScheduleMailModalForm";

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
          <SchedularForm
            open={open}
            onClose={() => setOpen(false)}
          >
            <ScheduleMailModalForm  open={open}
            onClose={() => setOpen(false)}/>
          </SchedularForm>
        </div>
      </div>
    </>
  );
};


export default ScheduleMail;
