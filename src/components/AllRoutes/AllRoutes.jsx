
import { Route,Routes } from "react-router-dom"
import { ForgotPassword } from "../Forgotpassword"
import { LandingPage } from "../Landingpage"
import { Navbar } from "../Navbar"
import { ResetPassword } from "../Resetpassword"
import { SignInCard } from "../Signin"
import { SignupCard } from "../Signup"

import React, { Fragment } from "react"

import DelhiDataShow from "../../ProductPages/DelhiData"
import GoaHotels from "../../ProductPages/Goa"
import GujHotels from "../../ProductPages/GujratHotels"
import { BookingDetails } from "../../Pages/BookingDetails"
import { SimpleNavbar } from "../simplenavbar"
import LargeWithAppLinksAndSocial from "../Footer"
import { PackageShow } from "../../ProductPages/Package"
import { PackageDetails } from "../../Pages/PackagePage"
import { useDispatch, useSelector } from 'react-redux';


export const AllRoutes = ()=>{
  const {isAuthenticate} = useSelector((store)=>store.login);


    return (
        <>
         
        <Routes>
        <Route path="*" element={"404"}/>
        <Route path="/signup" element={
          <>
          <SimpleNavbar/>
          <SignupCard/>
          </>
        }/>

            <Route path="/login" element={
              <>
              <SimpleNavbar/>
              <SignInCard/>
              </>
            }/>

            <Route path="/reset_password" element={<>
            <SimpleNavbar/>
            <ResetPassword/>
            </>}/>

            <Route path="/forgot_password" element={
            <>
              <SimpleNavbar/>
              <ForgotPassword/>
            </>
            }/>

            <Route path="/" element={
            <>
                <Navbar/>
                <LandingPage/>
                <LargeWithAppLinksAndSocial/>
            </>
          }/>
              <Route path="/package" element={
            <>
                <Navbar/>
                <PackageDetails/>
                <LargeWithAppLinksAndSocial/>
            </>
          }/>
          <Route path="/Delhi" element={
          <>
            <Navbar/>
            <DelhiDataShow/>
            <LargeWithAppLinksAndSocial/>
          </>
        }/>
          <Route path="/Delhi/:id" element={
          <>
           <SimpleNavbar/>
            <BookingDetails/>
            <LargeWithAppLinksAndSocial/>
          </>
        }/>
          <Route path="/goa" element={
              <>
                    <Navbar/>
                    <GoaHotels/>
                    <LargeWithAppLinksAndSocial/>
                </>
          }/>
          <Route path="/guj" element={<>
            <Navbar/>
            <GujHotels/>
            <LargeWithAppLinksAndSocial/>
          </>}/>
        </Routes>
  
        
        </>
    )
}

