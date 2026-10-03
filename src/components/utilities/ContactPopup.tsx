import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";

export const openContactPopup = () => {
  window.dispatchEvent(new CustomEvent("open-contact-popup"));
};

const ContactPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-contact-popup", handleOpen);
    return () => {
      window.removeEventListener("open-contact-popup", handleOpen);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    
    // Perform standard actions
    toast.success(`Thanks for your enquiry, ${name}! We will get back to you shortly.`);
    handleClose();
  };

  // Close popup on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-[950px] bg-white rounded-[6px] shadow-2xl overflow-hidden z-10 grid grid-cols-1 md:grid-cols-2 text-black"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-black hover:scale-110 transition-all z-20 w-8 h-8 flex items-center justify-center rounded-[6px] bg-gray-100 hover:bg-gray-200"
              aria-label="Close Popup"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Left Column (Brand + Team Image) */}
            <div className="p-8 md:p-12 flex flex-col justify-between bg-white border-r border-gray-100">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-neutral-900 leading-tight mb-4 flex items-center gap-2">
                  Contact Us
                  <span className="font-sans font-light text-3xl text-neutral-700">↗</span>
                </h2>
                <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-6 font-sans">
                  Share your project details with us, and we'll get back with a
                  custom estimate tailored to your needs.
                </p>
              </div>

              {/* Team Photo */}
              <div className="mt-auto flex justify-center items-end select-none pointer-events-none">
                <img
                  src="/assets/images/contact_popup_team.png"
                  alt="Zenorix Team"
                  className="w-full max-w-[340px] md:max-w-full h-auto object-contain rounded-[6px]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column (Form fields) */}
            <div className="p-8 md:p-12 bg-white flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5 uppercase tracking-wider">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter full name"
                    required
                    autoComplete="name"
                    className="w-full bg-[#f3f4f6] text-neutral-900 border-0 rounded-[6px] px-4 py-3 text-sm placeholder:text-neutral-400 focus:bg-[#e5e7eb] focus:ring-2 focus:ring-neutral-900 outline-none transition-all"
                  />
                </div>

                {/* Phone & Email Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5 uppercase tracking-wider">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number"
                      required
                      autoComplete="tel"
                      className="w-full bg-[#f3f4f6] text-neutral-900 border-0 rounded-[6px] px-4 py-3 text-sm placeholder:text-neutral-400 focus:bg-[#e5e7eb] focus:ring-2 focus:ring-neutral-900 outline-none transition-all"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5 uppercase tracking-wider">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter e-mail address"
                      required
                      autoComplete="email"
                      className="w-full bg-[#f3f4f6] text-neutral-900 border-0 rounded-[6px] px-4 py-3 text-sm placeholder:text-neutral-400 focus:bg-[#e5e7eb] focus:ring-2 focus:ring-neutral-900 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about project"
                    className="w-full bg-[#f3f4f6] text-neutral-900 border-0 rounded-[6px] px-4 py-3 text-sm placeholder:text-neutral-400 focus:bg-[#e5e7eb] focus:ring-2 focus:ring-neutral-900 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-black hover:bg-neutral-800 text-white font-medium py-3.5 px-6 rounded-[6px] flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm shadow-lg shadow-neutral-300"
                  >
                    Send Enquiry
                    <span className="font-sans font-light text-base">→</span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;
