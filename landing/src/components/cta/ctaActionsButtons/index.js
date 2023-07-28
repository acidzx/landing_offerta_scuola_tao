import { PhoneIcon } from "@heroicons/react/24/outline";

export default function CtaActionsButtons() {
  return (
    <div className="py-6">
      <div className="flex flex-col my-3 mx-[4rem] lg:mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <label
          htmlFor="modalForm"
          className="cursor-pointer inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
        >
          Richiedi Ora
          {/*   <svg
            className="ml-2 -mr-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z"
              clipRule="evenodd"
            ></path>
          </svg> */}
        </label>
        {/*  <a
          href="tel:057862772"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
        >
          Chiamaci
          <PhoneIcon className="ml-2 -mr-1 w-5 h-5" />
        </a> */}
      </div>
    </div>
  );
}
