"use client"
import React, {useEffect, useState} from 'react';
import axios from "axios";

const Review = () => {
    const [comments, setComments] = useState({name: "", email: "", message: ""})
    const [comment, setComment] = useState([])
    const [something, setSomething] = useState("something")
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    const handleComment = async (e: any) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/openPublic/public", comments).then((res) => {
                if (res.data) {
                    alert("Comment Submitted.")
                }
            }).catch(e => alert(e.message))
        } catch (error: any) {
            console.log(error.message)
        }
    }

    const getAllComments = async () => {
        try {
            const res = await axios.get("/api/openPublic/getallcomments").then((res) => {
                setComment(res.data.data)
            })
        } catch (e: any) {
            console.log(e.message)
        }
    }

    console.log(comment)

    useEffect(() => {
        getAllComments().then(res=>console.log(res))
    }, [something]);

    const primaryBlue = "#002bff"
    // @ts-ignore
    return (
        <div>
            <div className={"p-5"}>
                <h1 className={"capitalize text-center m-auto py-5 text-3xl font-extrabold"}>review areas</h1>
                {
                    comment && (
                        <div>
                            {
                                comment.map((item:any, index:any) => (
                                    <div className={"border-spacing-3 border-4 border-amber-600 w-7/12 m-4 rounded"} key={index + 1}>
                                        <h1 className={"capitalize text-2xl font-extrabold m-4 p-2"}>{item.name}</h1>
                                        <h1 className={"p-2 m-3"}>{item.email}</h1>
                                        <h1 className={"p-2 m-3"}>{item.message}</h1>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
            <div>
                <h3 className={"text-2xl font-bold mx-3"}>Leave Your Comments:</h3>
                <form>
                    <div className={"my-5 mx-8"}>
                        <input type={"text"} className={"border-2 border-blue-600 py-3 rounded "}
                               placeholder={"Enter Your Name."} value={comments.name} onChange={(e) => {
                            setComments({...comments, name: e.target.value})
                        }}/>
                    </div>

                    <div className={"my-5 mx-8"}>
                        <input type={"email"} className={"border-2 border-blue-600 py-3 rounded "}
                               placeholder={"Enter Your Email."} value={comments.email}
                               onChange={(e) => {
                                   setComments({...comments, email: e.target.value})
                               }}/>
                    </div>

                    <div className={"my-5 mx-8"}>
                        <textarea className={"border-2 border-blue-600 py-3 rounded "}
                                  placeholder={"Enter Your Comments:"} value={comments.message} onChange={(e) => {
                            setComments({...comments, message: e.target.value})
                        }}/>
                    </div>
                    <div className={"my-5 mx-8"}>
                        <button disabled={!comments} className={"bg-amber-500 rounded py-3 px-5 hover:bg-blue-700 hover:text-white"}
                                type={"submit"} onClick={(e) => handleComment(e)}>Submit Comment
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Review;