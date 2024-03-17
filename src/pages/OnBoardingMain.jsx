import React, { useEffect, useState } from "react";
import UserOnboardFirst from "../components/UserOnboardFirst";
import UserOnboardingSecond from "../components/UserOnboardingSecond";
import UserOnboardingThird from "../components/UserOnboardingThird";
import UserOnboardinFourth from "../components/UserOnboardinFourth";
import UserOnboardingFifth from "../components/UserOnboardingFifth";
import UserOnboardingSixth from "../components/UserOnboardingSixth";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const OnBoardingMain = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    setStep(location.pathname.split("/").pop());
  }, []);
  useEffect(() => {
    const path = window.location.pathname;
    console.log(path);
    if (path === "/onBoarding/7") {
      navigate("/profile");
    }
  }, [navigate]);
  // const nextStep = () => {
  //   setStep((prevStep) => prevStep + 1);
  // };

  // const prevStep = () => {
  //   setStep((prevStep) => prevStep - 1);
  // };

  // const goToHome = () => {
  //   history.push("/");
  // };

  // if (step > 6) {
  //   navigate("/profile");
  // }
  return (
    <div>
      {step == 1 && <UserOnboardFirst />}
      {step == 2 && <UserOnboardingSecond />}
      {step == 3 && <UserOnboardingThird />}
      {step == 4 && <UserOnboardinFourth />}
      {step == 5 && <UserOnboardingFifth />}
      {step == 6 && <UserOnboardingSixth />}
      {step > 6 && navigate("/profile")}
    </div>
  );
};

export default OnBoardingMain;
// {step === 2 && (
//   <UserOnboardingSecond nextStep={nextStep} prevStep={prevStep} />
// )}
