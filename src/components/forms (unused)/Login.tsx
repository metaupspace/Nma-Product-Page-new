import React from "react";
import Modal from "../modals/Modal";
import googleIcon from "../../../public/assets/login/google.png"
import Image from "next/image";
import { signIn } from "next-auth/react";

interface LoginFormProps {
    isModalOpen: boolean
    setIsModalOpen: (val: boolean) => void
}

const LoginForm: React.FC<LoginFormProps> = ({ isModalOpen, setIsModalOpen }) => {

    return (
        <Modal
            title="Login to your account"
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            className="w-full lg:w-1/2"
        >
            <div>
                <button
                    onClick={() => signIn("google")}
                    className="flex justify-center border-2 border-gray-800 rounded-md p-3 w-full items-center gap-6 hover:bg-gray-200 dark:hover:bg-gray-800"
                >
                    <Image src={googleIcon} alt="googleIcon" />
                    <span className="text-xl">Login with Google</span>
                </button>
            </div>
        </Modal>
    )
}

export default LoginForm