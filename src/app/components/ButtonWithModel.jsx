"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const ButtonWithModal = ({ className, defaultOpen=false }) => {
  const [isModalOpen, setIsModalOpen] = useState(defaultOpen);
  const modalRef = useRef(null);
  const modalOverlayRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalOverlayRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("click", handleOutsideClick);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div className={`flex justify-center mb-[53px] sm:mb-[67px] ${className}`}>
      <button
        onClick={openModal}
        className="text-[19.37px] font-bold leading-[24px] bg-custom-gradient h-[59px] w-[290px] rounded-[43.05px] hover:!bg-bg-hover m-0 hover:text-[#7f37f6]"
      >
        Download the app
      </button>

      {isModalOpen && (
        <div className="modal-overlay" ref={modalOverlayRef}>
          <div className="modal" ref={modalRef}>
            <button className="close-btn p-0 absolute right-5 ss:right-[37px] top-5 ss:top-[37px]" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-content">
              <h2 className="font-extrabold text-center text-2xl md:text-4xl mb-4">
                Earn cashback upto <br /> ₹300 on App download!{" "}
              </h2>
              <div className="font-normal w-[90%] max-w-[388px] mx-auto text-base mb-[22px] text-[#939393]">
                <p>
                Welcome to Plavox, where your skills meet opportunity! Engage in
                skill-based wagering across hundreds of mobile games.
                </p>
              </div>
              <div className="flex justify-center items-center gap-2 mb-4 md:mb-[30px]">
                <Image
                  src="/assets/app-play-store/app-store.png"
                  width={100}
                  height={100}
                  className="w-[130px] md:w-[173px] h-auto"
                />
                <Image
                  src="/assets/app-play-store/google-play.png"
                  width={100}
                  height={100}
                  className="w-[130px] md:w-[173px] h-auto"
                />
              </div>
              <div>
                <Image
                  src="/assets/Main-menu/Group 1171275246.svg"
                  alt="mobile"
                  width={500}
                  height={500}
                  className="h-[316px] w-[486.08px]"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 999;
          width: 100%;
          background: linear-gradient(87.24deg, rgba(34, 41, 58, 0.8) 0.69%, rgba(41, 52, 77, 0.8) 99.64%);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal {
          background: #141924;
          padding: 47px;
          border-radius: 37.82px;
          padding-bottom: 0;
          height: 593px;
          width: 95%;
          max-width: 646.78px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        button {
          padding: 10px;
          margin: 10px;
          cursor: pointer;
        }

        .close-btn {
          position: absolute;
          top: 37px;
          right: 37px;
          background: none;
          border: none;
          font-size: 30px;
          cursor: pointer;
          padding: 0;
          margin: 0;
        }

        .close-btn:hover {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default ButtonWithModal;
