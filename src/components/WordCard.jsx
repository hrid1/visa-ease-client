import { HiSpeakerWave } from "react-icons/hi2";
import { IoLanguage } from "react-icons/io5";

const WordCard = ({ data }) => {
  const {
    Id,
    word,
    pronunciation,
    meaning,
    part_of_speech,
    difficulty,
    Lesson_no,
    when_to_say,
    example,
  } = data || {};

  //   background color based on difficulty
  const bgColor = {
    easy: "bg-green-100",
    medium: "bg-blue-100",
    difficult: "bg-red-100",
  };

  // Function to pronounce the word
  const pronounceWord = (word) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "de-DE"; // German language
      window.speechSynthesis.speak(utterance);
    } else {
      console.error("Speech Synthesis API is not supported in this browser.");
    }
  };

  return (
    <div>
      <div
       
        className={`card-body border shadow-md  mx-4 rounded-md ${bgColor[difficulty]} `}
      >
        <h3 className="text-2xl font-bold text-center flex justify-between items-center">
         <span > {word}</span>
         
        <span  onClick={() => pronounceWord(word)} className=" bg-white rounded-md p-1.5 cursor-pointer"> <HiSpeakerWave className="  " /></span>
        </h3>
        <p className="text-gray-600">
          <span className="font-semibold">Meaning:</span> {meaning}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Pronunciation:</span> {pronunciation}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Part of Speech:</span>{" "}
          {part_of_speech}
        </p>
        <button
          onClick={() => document.getElementById(Id).showModal()}
          className="btn btn-sm btn-outline border-none mt-4 bg-emerald-500 text-white"
        >
          When to Say
        </button>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id={Id} className="modal">
        {/* modal body */}
        <div className="modal-box bg-emerald-50 border-4 border-gray-200 shadow-md rounded-xl">
          <div>
            <h2 className="text-4xl font-bold text-emerald-700 mb-4 flex gap-4">
              <IoLanguage />: {word}
            </h2>
            <p className="text-gray-700 mb-3">
              <span className="font-semibold">Meaning:</span> {meaning}
            </p>
            <p className="text-gray-700 mb-3">
              <span className="font-semibold">Pronunciation:</span>{" "}
              <span className="italic">{pronunciation}</span>
            </p>
            <p className="text-gray-700 mb-3">
              <span className="font-semibold">Part of Speech:</span>{" "}
              {part_of_speech}
            </p>
            <p className="text-gray-700 mb-3">
              <span className="font-semibold">When to Say:</span> {when_to_say}
            </p>
            <p className="text-gray-700 mb-6">
              <span className="font-semibold">Example:</span>{" "}
              <span className="italic">{example}</span>
            </p>
          </div>
          {/* footer */}
          <div className="modal-action">
            <form method="dialog">
              {/* Close button */}
              <div className="mt-6">
                <button className="btn bg-emerald-600 text-white w-full">
                  Got it!
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default WordCard;
