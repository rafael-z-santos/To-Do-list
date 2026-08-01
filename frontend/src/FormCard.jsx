import { useState } from "react";
import "./FormCard.css";

export default function FormCard({ isOpenForm }) {
    if(isOpenForm){
        return (
            <h1>formcard</h1>
        );
    }
}

