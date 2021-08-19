import React from 'react'
import TotalAbout from '../../components/TotalAbout/TotalAbout'
import {homeObjOne,homeObjTwo} from './Data';


function TotalNews() {
    return (
        <>
         <TotalAbout {...homeObjOne}/> 
         <TotalAbout {...homeObjTwo}/> 
        </>
    )
}

export default TotalNews
