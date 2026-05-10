import { useState, useRef, useEffect } from 'react';

const OTP_DIGITS_COUNT = 6;

export default function OTPInput() {
    const [otp, setOtp] = useState(new Array(OTP_DIGITS_COUNT).fill(""));
    const inputsRef = useRef([]);

    useEffect(() => {
        inputsRef.current[0]?.focus();
    }, []);

    function handleChange(input, index) {
        if (isNaN(input)) return;

        const newValue = input.trim();
        const newOtp = [...otp];
        newOtp[index] = input.at(-1);
        setOtp(newOtp);

        newValue && inputsRef.current[index + 1]?.focus();
    }

    function handleOnKeyDown(e, index) {
        if (!otp[index] && e.key == "Backspace") {
            inputsRef.current[index - 1]?.focus();
        }
    }

    function handlePaste(e) {
        e.preventDefault();

        const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_DIGITS_COUNT);
        if (pasted.length == 0) return;

        const newOTP = [...otp];
        for (let i = 0; i < pasted.length; i++) {
            newOTP[i] = pasted[i];

            if (inputsRef.current[i]) {
                inputsRef.current[i].value = pasted[i];
            }
        }
        setOtp(newOTP);
    }

    return (<div>
        <h1>OTP Validator</h1>
        <div onPaste={handlePaste}>
            {
                otp.map((input, index) => (
                    <input type="text" key={index} ref={input => inputsRef.current[index] = input} className='otp-input' name="otp-input" id="otp-input" value={input} onChange={(e) => handleChange(e.target.value, index)} onKeyDown={(e) => handleOnKeyDown(e, index)} />
                ))
            }
        </div>
    </div>)
}