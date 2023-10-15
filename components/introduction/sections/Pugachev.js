import React from "react";
import Image from "next/image";


const Pugachev = ({ width = 240, height = 80 }) => {
    return (<Image className={`w-${width} h-${height}`} src="/assets/svg/Pugachev_Cobra.svg" alt="Logo" width={width} height={height}/>);
};
export default Pugachev;