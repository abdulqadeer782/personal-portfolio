import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiX, FiMenu } from 'react-icons/fi';
// import HireMeModal from '../HireMeModal';
// import logoLight from '../../public/images/light-logo.png';
import logoDark from '../../public/images/logo.png';

function AppHeader() {
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function toggleMenu() {
        if (!showMenu) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }
    }

    function showHireMeModal() {
        if (!showModal) {
            document
                .getElementsByTagName('html')[0]
                .classList.add('overflow-y-hidden');
            setShowModal(true);
        } else {
            document
                .getElementsByTagName('html')[0]
                .classList.remove('overflow-y-hidden');
            setShowModal(false);
        }
    }

    return (
        <div className='sticky top-0 bg-white'>
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                id="nav"
                className="sm:container sm:mx-auto"
            >
                {/* Header */}
                <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
                    {/* Header menu links and small screen hamburger menu */}
                    <div className="flex justify-between items-center px-4 sm:px-0">
                        <div>
                            <Link href="/">

                                <Image
                                    src={logoDark}
                                    className="w-36 cursor-pointer"
                                    alt="Dark Logo"
                                    width={"200px"}
                                    height={"50px"}
                                    style={{ height: '100%', width: '100%' }}
                                />

                            </Link>
                        </div>

                        {/* Small screen hamburger menu */}
                        <div className="sm:hidden">
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className="focus:outline-none"
                                aria-label="Hamburger Menu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
                                >
                                    {showMenu ? (
                                        <FiX className="text-3xl" />
                                    ) : (
                                        <FiMenu className="text-3xl" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Header links small screen */}
                    <div
                        className={
                            showMenu
                                ? 'block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none'
                                : 'hidden'
                        }
                    >
                        <div
                            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                            aria-label="Home"
                        >
                            <Link href="#Home">Home</Link>
                        </div>
                        <div
                            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                            aria-label="Projects"
                        >
                            <Link href="#About">About</Link>
                        </div>
                        <div
                            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                            aria-label="Projects"
                        >
                            <Link href="#Projects">Projects</Link>
                        </div>
                        <div
                            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                            aria-label="Skills"
                        >
                            <Link href="#Skills">Skills</Link>
                        </div>

                        <div
                            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                            aria-label="Contact"
                        >
                            <Link href="#Contact">Contact</Link>
                        </div>
                    </div>

                    {/* Header links large screen */}
                    <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
                        <div
                            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                            aria-label="Home"
                        >
                            <Link href="#Home">Home</Link>
                        </div>
                        <div
                            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                            aria-label="Projects"
                        >
                            <Link href="#About">About</Link>
                        </div>
                        <div
                            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                            aria-label="Projects"
                        >
                            <Link href="#Projects">Projects</Link>
                        </div>
                        <div
                            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                            aria-label="Skills"
                        >
                            <Link href="#Skills">Skills</Link>
                        </div>

                        <div
                            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                            aria-label="Contact"
                        >
                            <Link href="#Contact">Contact</Link>
                        </div>
                    </div>

                   
                </div>
                {/* <div>
                    {showModal ? (
                        <HireMeModal
                            onClose={showHireMeModal}
                            onRequest={showHireMeModal}
                        />
                    ) : null}
                    {showModal ? showHireMeModal : null}
                </div> */}
            </motion.nav>
        </div>
    );
}

export default AppHeader;
