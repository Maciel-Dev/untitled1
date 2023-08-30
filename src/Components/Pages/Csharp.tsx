import {motion} from 'framer-motion';
import React from 'react';
import csharp from "../../Assets/c-sharp-c-logo-02F17714BA-seeklogo.com.png";
import {Link} from "react-router-dom";
import MonacoEditor from 'react-monaco-editor';
import CodeEditorWindow from "../Editor";
import EditorNew from "../Editor";
import {defineTheme} from "../../lib/defineThemes";


function Csharp() {

    return (
        <>

            <section className="w-screen h-screen grid grid-cols-5 grid-rows-4 overflow-hidden"
                     style={{backgroundColor: "#000411"}}>
                <Link to="/"
                      className="sm:flex sm:col-span-1 sm:col-start-3 col-start-3 row-start-2 sm:scale-100 scale-150 origin-bottom">
                    <motion.div className="sm:flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                                initial={{scale: 0, y: 200}}
                                transition={{type: "spring", duration: 1, delay: 0.02}}
                                whileInView={{scale: 1.5, y: 0}}
                                viewport={{once: false, amount: 0.4}}
                                whileHover={{
                                    scale: 1.3,
                                    rotateZ: 0,
                                    transition: {duration: 1, delay: 0.2, type: "spring"}
                                }}
                                style={{}}>
                        <motion.img className="" src={csharp} alt="rt"
                                    initial={{scale: 0, rotateZ: 180}}
                                    whileHover={{
                                        scale: 0.5,
                                        rotateZ: 15,
                                        transition: {duration: 1, delay: 0.2, type: "spring"}
                                    }}
                                    whileInView={{scale: 0.4, rotateZ: 0}}
                                    transition={{type: "spring", duration: 1.4, delay: 0.04}}
                                    viewport={{once: false, amount: 0.4}}>
                        </motion.img>
                    </motion.div>
                </Link>
                <motion.div className="col-start-1 row-start-4 col-span-full">
                    <EditorNew onChange={undefined} language={undefined} code={undefined} theme={defineTheme("blackboard")}/>
                </motion.div>

                {/*<motion.div className="col-start-1 row-start-4 w-screen grid grid-cols-3 p-9 gap-10">*/}
                {/*    <motion.div className="bg-white rounded-3xl text-center flex items-center justify-center"*/}
                {/*                initial={{opacity: 0, x:-600}} animate={{opacity: 1, x:0}} transition={{type: "spring", duration: 1.5, delay:0}}>*/}
                {/*        <h1 className="font-bold text-4xl">*/}
                {/*            .Net*/}
                {/*        </h1>*/}
                {/*    </motion.div>*/}
                {/*    <motion.div className="bg-white rounded-3xl text-center flex items-center justify-center"*/}
                {/*                initial={{opacity: 0, x:-600}} animate={{opacity: 1, x:0}} transition={{type: "spring", duration: 1.5, delay:0.5}}>*/}
                {/*        <h1 className="font-bold text-4xl">*/}
                {/*            ASP*/}
                {/*        </h1>*/}
                {/*    </motion.div>*/}
                {/*    <motion.div className="bg-white rounded-3xl text-center flex items-center justify-center"*/}
                {/*                initial={{opacity: 0, x:-600}} animate={{opacity: 1, x:0}} transition={{type: "spring", duration: 1.5, delay:1}}>*/}
                {/*        <h1 className="font-bold text-4xl">*/}
                {/*            Rest*/}
                {/*        </h1>*/}
                {/*    </motion.div>*/}
                {/*</motion.div>*/}
            </section>
        </>
    );
}

export default Csharp;