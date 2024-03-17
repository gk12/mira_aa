import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Profile from "../pages/Profile";
import EmploymentAndIncome from "../pages/EmploymentAndIncome";
import Loan from "../pages/Loan";
import Assests from "../pages/Assests";
import Liabilities from "../pages/Liabilities";
import RealState from "../pages/RealState";
import Declaration from "../pages/Declaration";
import DemoGraphy from "../pages/DemoGraphy";
import Pipline from "../pages/Pipline";
import Documents from "../pages/Documents";
import Tool1 from "../pages/Tool1";
import Tool2 from "../pages/Tool2";
// import UserOnboardFirst from "../components/UserOnboardFirst";
// import UserOnboardingSecond from "../components/UserOnboardingSecond";
// import UserOnboardingThird from "../components/UserOnboardingThird";
// import UserOnboardinFourth from "../components/UserOnboardinFourth";
// import UserOnboardingFifth from "../components/UserOnboardingFifth";
// import UserOnboardingSixth from "../components/UserOnboardingSixth";
import OnBoardingMain from "../pages/OnBoardingMain";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/signin' element={<Profile />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/employee' element={<EmploymentAndIncome />} />
      <Route path='/loan' element={<Loan />} />
      <Route path='/assest' element={<Assests />} />
      <Route path='/liability' element={<Liabilities />} />
      <Route path='/realState' element={<RealState />} />
      <Route path='/Declaration' element={<Declaration />} />
      <Route path='/DemoGraphy' element={<DemoGraphy />} />
      <Route path='/pipline' element={<Pipline />} />
      <Route path='/doc' element={<Documents />} />
      <Route path='/tools' element={<Tool1 />} />
      <Route path='/tools2' element={<Tool2 />} />
      <Route path='/onboarding/1' element={<OnBoardingMain />} />
      <Route path='/onboarding/2' element={<OnBoardingMain />} />
      <Route path='/onboarding/3' element={<OnBoardingMain />} />
      <Route path='/onboarding/4' element={<OnBoardingMain />} />
      <Route path='/onboarding/5' element={<OnBoardingMain />} />
      <Route path='/onboarding/6' element={<OnBoardingMain />} />
      {/* <Route path='/onboarding' element={<UserOnboardingSixth />} /> */}
    </Routes>
  );
};

export default AllRoutes;
