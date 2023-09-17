import React, {useState} from 'react';
/*import swal from 'sweetalert';*/


const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];
export default function App() {
    //**************** variables ****************//
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    //**************** functions ****************//
    function handlePrev() {

        if (step > 1) {
            setStep((step) => step - 1);
        }
    }

    function handleNext() {

        if (step < 3) {
            setStep((step) => step + 1);
        }
    }

    return (
        <main className="wrapper main">
            <button className="close" onClick={() => setIsOpen((is) => !is)}>
                &times;
            </button>
            {isOpen && (
                <div className='steps'>
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step >= 3 ? "active" : ""}>3</div>
                    </div>
                    <p className='message'>Step {step}: {messages[step - 1]}</p>
                    <div className="buttons">
                        <button style={{backgroundColor: "#18497A", color: "#FFF"}}
                                onClick={handlePrev}>prev
                        </button>
                        <button style={{backgroundColor: "#18497A", color: "#FFF"}}
                                onClick={handleNext}>next
                        </button>
                    </div>
                </div>
            )}
        </main>

    );
};