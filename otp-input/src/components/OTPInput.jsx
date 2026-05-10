import { useState, useRef, useEffect } from 'react';

const OTP_DIGITS_COUNT = 6;

export default function OTPInput() {
    const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS_COUNT).fill(""));
    const refArr = useRef([]);

    useEffect(() => {
        refArr.current[0]?.focus();
    }, []);

    function handleChange(input, index) {
        if (isNaN(input)) return;

        const newValue = input.trim();
        const newInputArr = [...inputArr];
        newInputArr[index] = input.at(-1);
        setInputArr(newInputArr);

        newValue && refArr.current[index + 1]?.focus();
    }

    function handleOnKeyDown(e, index) {
        if (!inputArr[index] && e.key == "Backspace") {
            refArr.current[index - 1]?.focus();
        }
    }

    return (<div>
        <h1>OTP Validator</h1>
        <div>
            {
                inputArr.map((input, index) => (
                    <input type="text" key={index} ref={input => refArr.current[index] = input} className='otp-input' name="otp-input" id="otp-input" value={input} onChange={(e) => handleChange(e.target.value, index)} onKeyDown={(e) => handleOnKeyDown(e, index)} />
                ))
            }
        </div>
    </div>)
}