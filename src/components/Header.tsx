"use client"
import React from "react";
export const Header =()=>{
    return(
        <header className="navbar">
            <div className="navbar-start">Logo</div>
            <div className="navbar-end">
                <div className="px-3">Blog</div>
                <div className="px-3">Concept</div>
                <div className="px-3">Area</div>
            </div>
        </header>
    )
}