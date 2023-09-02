'use client'
import React, {useEffect, useRef} from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import Aos from "aos";
import Social from "@/components/Social";

const Contact = () => {
    const form: any = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_6amwa57",
            "template_k8l6vm4",
            form.current,
            "zrnarS1PkewYuKyLf",
        ).then(
            (result) => {
                if (result) {
                    swal(
                        "Thanks for your message!",
                        "Keep checking back with us",
                        "success"
                    );
                }
            },
            (error) => {
                if (error) {
                    swal(
                        "oops something went wrongs",
                        "Please try again later",
                        "danger"
                    );
                }
            }
        );
        e.target.reset();
    }

    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, [form]);

    return (
        <div className="contact text-white">
            <div className="my-services ">
                <h1 className={"text-4xl text-fuchsia-700 text-center font-extrabold m-2"}>One Call Kuwait</h1>
                <div className="text-center">
                    <h6>If you need any help please </h6>
                    <h1 className={"text-3xl"}> Get in touch</h1>
                    <p>
                        If you would like to hear from me, please email me. Please feel free
                        to contact us if you have a question or just want to say hi. Please
                        expect a reply from me as soon as possible!
                    </p>
                </div>
            </div>
            <div className="container" data-aos="fade-right">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 mt-5 pt-4">
                        <div className="button-customize">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="contact-flex">
                                    <p>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="name*"
                                        />
                                    </p>

                                    <p>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="email*"
                                            required
                                        />
                                    </p>
                                </div>

                                <div className="form ">
                                    <p>
                                        <input
                                            type="text"
                                            name="subject"
                                            required
                                            placeholder="subject*"
                                        />
                                    </p>
                                </div>
                                <div className="another-div ">
                                    <p>
                                    <textarea
                                        placeholder={" message*"}
                                        name={"message"}

                                    />
                                    </p>
                                </div>
                                <button type="submit">send</button>
                            </form>
                        </div>
                        <div className="social-icon d-flex mt-5 pt-5 m-auto text-center">
                            <p style={{color: "#fafafa"}}>
                                I can be reached via social media -
                            </p>
                            <Social/>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;