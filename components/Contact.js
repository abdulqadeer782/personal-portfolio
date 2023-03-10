import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import PagesMetaHead from './PagesMetaHead';
import Button from './reusable/Button';
import FormInput from './reusable/FormInput';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


const contacts = [
    {
        id: 1,
        name: 'Karachi,Pakistan',
        icon: <FiMapPin />,
    },
    {
        id: 2,
        name: 'aqkalmati0@gmail.com',
        icon: <FiMail />,
    },
    {
        id: 3,
        name: '+92 341 0292782',
        icon: <FiPhone />,
    },
];


function Contact() {
    const form = useRef();
    const [infoMsg, setInfoMsg] = useState()
    const [subject, setSubject] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                name: name,
                body: body,
                subject
            })
        }).then((res) => {
            NotificationManager.success('Email has been sent!.','Success');
            setBody("")
            setEmail("")
            setSubject('')
            setName('')
        }).catch((err) => {
            setInfoMsg('Something Went Wrong!.  ')
        })
    }

    return (
        <section id='Contact' className="py-5 sm:py-10 my-5 sm:mt-10">
            <div className="text-center">
                <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                    Contact
                </p>
            </div>
            <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
                <PagesMetaHead title="Contact" />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.5,
                        delay: 0.1,
                    }}
                    className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-5"
                >
                    <div className="w-full lg:w-1/2">
                        <div className="leading-loose">
                            <form
                                onSubmit={handleSubmit}
                                ref={form}
                                className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
                            >
                                <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-4">
                                    Contact Form
                                </p>
                                {infoMsg && <div class=" border-blue-500 text-white py-3" role="alert">
                                    <p class="font-bold">{infoMsg}</p>
                                </div>}

                                <FormInput
                                    inputLabel="Full Name"
                                    labelFor="name"
                                    inputType="text"
                                    inputId="name"
                                    inputName="name"
                                    placeholderText="Your Name"
                                    ariaLabelName="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <FormInput
                                    inputLabel="Email"
                                    labelFor="email"
                                    inputType="email"
                                    inputId="email"
                                    inputName="email"
                                    placeholderText="Your email"
                                    ariaLabelName="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <FormInput
                                    inputLabel="Subject"
                                    labelFor="subject"
                                    inputType="text"
                                    inputId="subject"
                                    inputName="subject"
                                    placeholderText="Subject"
                                    ariaLabelName="Subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />

                                <div className="mt-6">
                                    <label
                                        className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                                        htmlFor="message"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                                        id="message"
                                        name="message"
                                        cols="14"
                                        rows="6"
                                        aria-label="Message"
                                        value={body}
                                        onChange={e => setBody(e.target.value)}
                                    ></textarea>
                                </div>

                                <div className="mt-6">
                                    <span className="font-general-medium  px-7 py-4 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
                                        <Button
                                            title="Send Message"
                                            type="submit"
                                            aria-label="Send Message"
                                        />
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="text-left max-w-xl px-6">
                            <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
                                Contact details
                            </h2>
                            <ul>
                                {contacts.map((contact) => (
                                    <li className="flex " key={contact.id}>
                                        <i className="text-2xl text-neutral-500 dark:text-neutral-400 mr-4 mt-1">
                                            {contact.icon}
                                        </i>
                                        <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                                            {contact.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
            <NotificationContainer/>
        </section>
    );
}

export default Contact;
