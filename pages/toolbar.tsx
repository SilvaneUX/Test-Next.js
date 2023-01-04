import { Inter, Yeseva_One } from "@next/font/google";
import Link from "next/link";
import Style from "../styles/toolbar.module.css";
import React, { useState } from "react";
import { text } from "node:stream/consumers";

export var exstyle:string = Style.none;

export default function toolbar() {
    const [ grayscale, setgray] = useState(true);
    const [ hcontrast, sethc] = useState(true);
    const [ invert, setinvert] = useState(true);
    const [ lightbg, setlbg] = useState(true);
    const [ underlink, setulink] = useState(true);
    const [ tts, setts] = useState(true);
    const [ setstyle, setstile] = useState(Style.none);

    function mengubah(change:string){
        exstyle = setstyle;
        switch(change){
            case "grayscale": 
                setgray(!grayscale);
                if (grayscale){
                    setstile(Style.none)
                    setstile(Style.grayscale);
                }
                else{
                    setstile(Style.none)
                }
                console.log(grayscale);
                break;
            case "hcontrast": 
                sethc(!hcontrast);
                console.log(hcontrast);
                break;
            case "invert": 
                setinvert(!invert);
                if (invert){
                    setstile(Style.none)
                    setstile(Style.negative);
                }
                else{
                    setstile(Style.none)
                }
                console.log(invert);
                break;
            case "lightbg": 
                setlbg(!lightbg);
                console.log(lightbg);
                break;
            case "underlink": 
                setulink(!underlink);
                console.log(underlink);
                break;
            case "tts": 
                setts(!tts);
                console.log(tts);
                break;
            case "reset":
                setstile(Style.none)
                break;
        }
    }

    return (
        <>
        <div
                className={`${Style.toolbox} ${setstyle}`}>
                <div>
                    <a href="#"
                        title="Accessibility Tools"
                        className={Style.icon}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor" width="2em">
                            <g>
                                <path
                                    d="M60.4,78.9c-2.2,4.1-5.3,7.4-9.2,9.8c-4,2.4-8.3,3.6-13,3.6c-6.9,0-12.8-2.4-17.7-7.3c-4.9-4.9-7.3-10.8-7.3-17.7c0-5,1.4-9.5,4.1-13.7c2.7-4.2,6.4-7.2,10.9-9.2l-0.9-7.3c-6.3,2.3-11.4,6.2-15.3,11.8C7.9,54.4,6,60.6,6,67.3c0,5.8,1.4,11.2,4.3,16.1s6.8,8.8,11.7,11.7c4.9,2.9,10.3,4.3,16.1,4.3c7,0,13.3-2.1,18.9-6.2c5.7-4.1,9.6-9.5,11.7-16.2l-5.7-11.4C63.5,70.4,62.5,74.8,60.4,78.9z">
                                </path>
                                <path
                                    d="M93.8,71.3l-11.1,5.5L70,51.4c-0.6-1.3-1.7-2-3.2-2H41.3l-0.9-7.2h22.7v-7.2H39.6L37.5,19c2.5,0.3,4.8-0.5,6.7-2.3c1.9-1.8,2.9-4,2.9-6.6c0-2.5-0.9-4.6-2.6-6.3c-1.8-1.8-3.9-2.6-6.3-2.6c-2,0-3.8,0.6-5.4,1.8c-1.6,1.2-2.7,2.7-3.2,4.6c-0.3,1-0.4,1.8-0.3,2.3l5.4,43.5c0.1,0.9,0.5,1.6,1.2,2.3c0.7,0.6,1.5,0.9,2.4,0.9h26.4l13.4,26.7c0.6,1.3,1.7,2,3.2,2c0.6,0,1.1-0.1,1.6-0.4L97,77.7L93.8,71.3z">
                                </path>
                            </g>
                        </svg>
                    </a>
                </div>
                <div
                    className={Style.toolist}>
                    <div>
                        <p
                            className={Style.tittle}
                        >Accessibility Tools</p>
                        <ul
                            className={Style.ulnobullets}
                        >
                            <li>
                                <a href="#" data-action="resize-plus" data-action-group="resize"
                                    className={Style.choose}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1em" viewBox="0 0 448 448">
                                            <path fill="currentColor"
                                                d="M256 200v16c0 4.25-3.75 8-8 8h-56v56c0 4.25-3.75 8-8 8h-16c-4.25 0-8-3.75-8-8v-56h-56c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h56v-56c0-4.25 3.75-8 8-8h16c4.25 0 8 3.75 8 8v56h56c4.25 0 8 3.75 8 8zM288 208c0-61.75-50.25-112-112-112s-112 50.25-112 112 50.25 112 112 112 112-50.25 112-112zM416 416c0 17.75-14.25 32-32 32-8.5 0-16.75-3.5-22.5-9.5l-85.75-85.5c-29.25 20.25-64.25 31-99.75 31-97.25 0-176-78.75-176-176s78.75-176 176-176 176 78.75 176 176c0 35.5-10.75 70.5-31 99.75l85.75 85.75c5.75 5.75 9.25 14 9.25 22.5z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>Increase Text</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" data-action="resize-minus" data-action-group="resize"
                                    className={Style.choose}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1em" viewBox="0 0 448 448">
                                            <path fill="currentColor"
                                                d="M256 200v16c0 4.25-3.75 8-8 8h-144c-4.25 0-8-3.75-8-8v-16c0-4.25 3.75-8 8-8h144c4.25 0 8 3.75 8 8zM288 208c0-61.75-50.25-112-112-112s-112 50.25-112 112 50.25 112 112 112 112-50.25 112-112zM416 416c0 17.75-14.25 32-32 32-8.5 0-16.75-3.5-22.5-9.5l-85.75-85.5c-29.25 20.25-64.25 31-99.75 31-97.25 0-176-78.75-176-176s78.75-176 176-176 176 78.75 176 176c0 35.5-10.75 70.5-31 99.75l85.75 85.75c5.75 5.75 9.25 14 9.25 22.5z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>Decrease Text</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" data-action="grayscale" data-action-group="schema"
                                    className={Style.choose}
                                    onClick={() => mengubah("grayscale")}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1em" viewBox="0 0 448 448">
                                            <path fill="currentColor"
                                                d="M15.75 384h-15.75v-352h15.75v352zM31.5 383.75h-8v-351.75h8v351.75zM55 383.75h-7.75v-351.75h7.75v351.75zM94.25 383.75h-7.75v-351.75h7.75v351.75zM133.5 383.75h-15.5v-351.75h15.5v351.75zM165 383.75h-7.75v-351.75h7.75v351.75zM180.75 383.75h-7.75v-351.75h7.75v351.75zM196.5 383.75h-7.75v-351.75h7.75v351.75zM235.75 383.75h-15.75v-351.75h15.75v351.75zM275 383.75h-15.75v-351.75h15.75v351.75zM306.5 383.75h-15.75v-351.75h15.75v351.75zM338 383.75h-15.75v-351.75h15.75v351.75zM361.5 383.75h-15.75v-351.75h15.75v351.75zM408.75 383.75h-23.5v-351.75h23.5v351.75zM424.5 383.75h-8v-351.75h8v351.75zM448 384h-15.75v-352h15.75v352z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>Grayscale</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" data-action="high-contrast" data-action-group="schema"
                                    className={Style.choose}
                                    onClick={() => mengubah("hcontrast")}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1em" viewBox="0 0 448 448">
                                            <path fill="currentColor"
                                                d="M192 360v-272c-75 0-136 61-136 136s61 136 136 136zM384 224c0 106-86 192-192 192s-192-86-192-192 86-192 192-192 192 86 192 192z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>High Contrast</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" data-action="negative-contrast" data-action-group="schema"
                                    className={Style.choose}
                                    onClick={() => mengubah("invert")}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1em" viewBox="0 0 448 448">
                                            <path fill="currentColor"
                                                d="M416 240c-23.75-36.75-56.25-68.25-95.25-88.25 10 17 15.25 36.5 15.25 56.25 0 61.75-50.25 112-112 112s-112-50.25-112-112c0-19.75 5.25-39.25 15.25-56.25-39 20-71.5 51.5-95.25 88.25 42.75 66 111.75 112 192 112s149.25-46 192-112zM236 144c0-6.5-5.5-12-12-12-41.75 0-76 34.25-76 76 0 6.5 5.5 12 12 12s12-5.5 12-12c0-28.5 23.5-52 52-52 6.5 0 12-5.5 12-12zM448 240c0 6.25-2 12-5 17.25-46 75.75-130.25 126.75-219 126.75s-173-51.25-219-126.75c-3-5.25-5-11-5-17.25s2-12 5-17.25c46-75.5 130.25-126.75 219-126.75s173 51.25 219 126.75c3 5.25 5 11 5 17.25z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>Negative Contrast</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" data-action="light-background" data-action-group="schema"
                                    className={Style.choose}
                                    onClick={() => mengubah("lightbg")}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1em" viewBox="0 0 448 448">
                                            <path fill="currentColor"
                                                d="M184 144c0 4.25-3.75 8-8 8s-8-3.75-8-8c0-17.25-26.75-24-40-24-4.25 0-8-3.75-8-8s3.75-8 8-8c23.25 0 56 12.25 56 40zM224 144c0-50-50.75-80-96-80s-96 30-96 80c0 16 6.5 32.75 17 45 4.75 5.5 10.25 10.75 15.25 16.5 17.75 21.25 32.75 46.25 35.25 74.5h57c2.5-28.25 17.5-53.25 35.25-74.5 5-5.75 10.5-11 15.25-16.5 10.5-12.25 17-29 17-45zM256 144c0 25.75-8.5 48-25.75 67s-40 45.75-42 72.5c7.25 4.25 11.75 12.25 11.75 20.5 0 6-2.25 11.75-6.25 16 4 4.25 6.25 10 6.25 16 0 8.25-4.25 15.75-11.25 20.25 2 3.5 3.25 7.75 3.25 11.75 0 16.25-12.75 24-27.25 24-6.5 14.5-21 24-36.75 24s-30.25-9.5-36.75-24c-14.5 0-27.25-7.75-27.25-24 0-4 1.25-8.25 3.25-11.75-7-4.5-11.25-12-11.25-20.25 0-6 2.25-11.75 6.25-16-4-4.25-6.25-10-6.25-16 0-8.25 4.5-16.25 11.75-20.5-2-26.75-24.75-53.5-42-72.5s-25.75-41.25-25.75-67c0-68 64.75-112 128-112s128 44 128 112z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>Light Background</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" data-action="links-underline" data-action-group="toggle"
                                    className={Style.choose}
                                    onClick={() => mengubah("underlink")}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1em" viewBox="0 0 448 448">
                                            <path fill="currentColor"
                                                d="M364 304c0-6.5-2.5-12.5-7-17l-52-52c-4.5-4.5-10.75-7-17-7-7.25 0-13 2.75-18 8 8.25 8.25 18 15.25 18 28 0 13.25-10.75 24-24 24-12.75 0-19.75-9.75-28-18-5.25 5-8.25 10.75-8.25 18.25 0 6.25 2.5 12.5 7 17l51.5 51.75c4.5 4.5 10.75 6.75 17 6.75s12.5-2.25 17-6.5l36.75-36.5c4.5-4.5 7-10.5 7-16.75zM188.25 127.75c0-6.25-2.5-12.5-7-17l-51.5-51.75c-4.5-4.5-10.75-7-17-7s-12.5 2.5-17 6.75l-36.75 36.5c-4.5 4.5-7 10.5-7 16.75 0 6.5 2.5 12.5 7 17l52 52c4.5 4.5 10.75 6.75 17 6.75 7.25 0 13-2.5 18-7.75-8.25-8.25-18-15.25-18-28 0-13.25 10.75-24 24-24 12.75 0 19.75 9.75 28 18 5.25-5 8.25-10.75 8.25-18.25zM412 304c0 19-7.75 37.5-21.25 50.75l-36.75 36.5c-13.5 13.5-31.75 20.75-50.75 20.75-19.25 0-37.5-7.5-51-21.25l-51.5-51.75c-13.5-13.5-20.75-31.75-20.75-50.75 0-19.75 8-38.5 22-52.25l-22-22c-13.75 14-32.25 22-52 22-19 0-37.5-7.5-51-21l-52-52c-13.75-13.75-21-31.75-21-51 0-19 7.75-37.5 21.25-50.75l36.75-36.5c13.5-13.5 31.75-20.75 50.75-20.75 19.25 0 37.5 7.5 51 21.25l51.5 51.75c13.5 13.5 20.75 31.75 20.75 50.75 0 19.75-8 38.5-22 52.25l22 22c13.75-14 32.25-22 52-22 19 0 37.5 7.5 51 21l52 52c13.75 13.75 21 31.75 21 51z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>Links Underline</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" data-action="readable-font" data-action-group="toggle"
                                    className={Style.choose}
                                    onClick={() => mengubah("tts")}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1em" viewBox="0 0 448 448">
                                            <path fill="currentColor"
                                                d="M181.25 139.75l-42.5 112.5c24.75 0.25 49.5 1 74.25 1 4.75 0 9.5-0.25 14.25-0.5-13-38-28.25-76.75-46-113zM0 416l0.5-19.75c23.5-7.25 49-2.25 59.5-29.25l59.25-154 70-181h32c1 1.75 2 3.5 2.75 5.25l51.25 120c18.75 44.25 36 89 55 133 11.25 26 20 52.75 32.5 78.25 1.75 4 5.25 11.5 8.75 14.25 8.25 6.5 31.25 8 43 12.5 0.75 4.75 1.5 9.5 1.5 14.25 0 2.25-0.25 4.25-0.25 6.5-31.75 0-63.5-4-95.25-4-32.75 0-65.5 2.75-98.25 3.75 0-6.5 0.25-13 1-19.5l32.75-7c6.75-1.5 20-3.25 20-12.5 0-9-32.25-83.25-36.25-93.5l-112.5-0.5c-6.5 14.5-31.75 80-31.75 89.5 0 19.25 36.75 20 51 22 0.25 4.75 0.25 9.5 0.25 14.5 0 2.25-0.25 4.5-0.5 6.75-29 0-58.25-5-87.25-5-3.5 0-8.5 1.5-12 2-15.75 2.75-31.25 3.5-47 3.5z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>Readable Font</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" data-action="reset"
                                    className={Style.choose}
                                    onClick={() => mengubah("reset")}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1em" viewBox="0 0 448 448">
                                            <path fill="currentColor"
                                                d="M384 224c0 105.75-86.25 192-192 192-57.25 0-111.25-25.25-147.75-69.25-2.5-3.25-2.25-8 0.5-10.75l34.25-34.5c1.75-1.5 4-2.25 6.25-2.25 2.25 0.25 4.5 1.25 5.75 3 24.5 31.75 61.25 49.75 101 49.75 70.5 0 128-57.5 128-128s-57.5-128-128-128c-32.75 0-63.75 12.5-87 34.25l34.25 34.5c4.75 4.5 6 11.5 3.5 17.25-2.5 6-8.25 10-14.75 10h-112c-8.75 0-16-7.25-16-16v-112c0-6.5 4-12.25 10-14.75 5.75-2.5 12.75-1.25 17.25 3.5l32.5 32.25c35.25-33.25 83-53 132.25-53 105.75 0 192 86.25 192 192z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>Reset</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}