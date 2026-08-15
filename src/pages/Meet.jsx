import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import aboutBg from "../assets/meet.png";

const Meet = () => {
  // Team / Architects Data
  const architects = [
    {
      id: "anna",
      name: "Anna Shestakova",
      role: "Account Manager & Architect",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      bio: "Have questions? Book a call to discuss your project, and we'll find the best way to bring your idea to life!",
    },
    {
      id: "marcus",
      name: "Marcus Vance",
      role: "Lead Sustainable Designer",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      bio: "Specializing in passive systems and sustainable materiality. Let's talk about high-performance architecture.",
    },
    {
      id: "aria",
      name: "Aria Takahashi",
      role: "Urban Planner & Partner",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
      bio: "Expert in master planning and turn-key urban developments. Ready to help you scale your architectural vision.",
    },
  ];

  const timeSlots = [
    "09:00 AM - 09:30 AM",
    "10:00 AM - 10:30 AM",
    "11:30 AM - 12:00 PM",
    "02:00 PM - 02:30 PM",
    "03:30 PM - 04:00 PM",
    "04:30 PM - 05:00 PM",
  ];

  // Carousel State (for visual display in right section)
  const [currentArchitectIndex, setCurrentArchitectIndex] = useState(0);
  const selectedArchitect = architects[currentArchitectIndex];

  // Confirmed Architect (for left form - only updates on "Book a Consultant" click)
  const [confirmedArchitect, setConfirmedArchitect] = useState(architects[0]);

  // Integrated Form States
  const [formData, setFormData] = useState({ name: "", email: "", project: "" });
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formError, setFormError] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Verification & Booking States
  const [pendingBooking, setPendingBooking] = useState(null);
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationInput, setVerificationInput] = useState("");
  const [verificationError, setVerificationError] = useState("");
  const [verificationNotice, setVerificationNotice] = useState("");
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  // Storage for Booked Appointments
  const [bookedSlots, setBookedSlots] = useState(() => {
    const saved = localStorage.getItem("architect_bookings");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("architect_bookings", JSON.stringify(bookedSlots));
  }, [bookedSlots]);

  // Carousel Navigation Handlers
  const handlePrevArchitect = () => {
    setCurrentArchitectIndex((prev) =>
      prev === 0 ? architects.length - 1 : prev - 1
    );
  };

  const handleNextArchitect = () => {
    setCurrentArchitectIndex((prev) =>
      prev === architects.length - 1 ? 0 : prev + 1
    );
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@studioDNA.design");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const isSlotTaken = (architectId, date, time) => {
    return bookedSlots.some(
      (slot) =>
        slot.architectId === architectId &&
        slot.date === date &&
        slot.time === time
    );
  };

  const validateRealEmail = (email) => {
    const lowerEmail = email.toLowerCase().trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(lowerEmail)) return false;

    const fakeKeywords = [
      "test",
      "example",
      "fake",
      "burner",
      "sample",
      "demo",
      "mailinator",
      "yopmail",
      "xyz",
    ];
    if (fakeKeywords.some((keyword) => lowerEmail.includes(keyword))) return false;
    return true;
  };

  const sendSingleEmail = async (
    targetRecipient,
    booking,
    code,
    serviceId,
    templateId,
    publicKey
  ) => {
    const recipientName =
      targetRecipient === "jujuba338788@gmail.com" ? "Admin" : booking.name;

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            to_email: targetRecipient,
            to_name: recipientName,
            email: booking.email,
            name: booking.name,
            from_name: booking.name,
            customer_name: booking.name,
            client_name: booking.name,
            user_email: booking.email,
            user_name: booking.name,
            from_email: booking.email,
            reply_to: booking.email,
            admin_email: "jujuba338788@gmail.com",
            subject: "Verification Code",
            architect_name: confirmedArchitect.name,
            appointment_date: booking.date,
            appointment_time: booking.time,
            verification_code: code,
            message: `Your StudioDNA appointment verification code is ${code}.`,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("EmailJS API Error Details:", {
        status: response.status,
        statusText: response.statusText,
        errorBody: errorText,
        serviceId,
        templateId,
        publicKey,
        templateParams: {
          to_email: targetRecipient,
          to_name: recipientName,
          email: booking.email,
          name: booking.name,
        },
      });
      throw new Error(
        `EmailJS send failed (${response.status}): ${errorText || response.statusText}`
      );
    }
  };

  const sendVerificationCode = async (booking, code) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const adminEmail = "jujuba338788@gmail.com";

    if (!serviceId || !templateId || !publicKey) {
      throw new Error("Email service environment variables are missing.");
    }

    await Promise.all([
      sendSingleEmail(booking.email, booking, code, serviceId, templateId, publicKey),
      sendSingleEmail(adminEmail, booking, code, serviceId, templateId, publicKey),
    ]);
  };

  // Send confirmation emails after successful verification
  const sendConfirmationEmails = async (booking, architectName, date, time) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const adminEmail = "jujuba338788@gmail.com";

    if (!serviceId || !templateId || !publicKey) {
      console.warn("Email service not configured, skipping confirmation emails.");
      return;
    }

    const sendConfirmationEmail = async (recipient, recipientType) => {
      const isUser = recipientType === "user";
      let message;

      if (isUser) {
        message = `Hello ${booking.name}! Your appointment with ${architectName} is locked for ${date} at ${time}.`;
      } else {
        message = `${architectName}! Your appointment with '${booking.name}' is locked for ${date} at ${time}.`;
        // Add project description for admin email if provided
        if (booking.project) {
          message += `\n\nDescription: ${booking.project}`;
        }
      }

      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
              to_email: recipient,
              to_name: isUser ? booking.name : architectName,
              // User info (for template if needed)
              user_name: booking.name,
              user_email: booking.email,
              admin_email: adminEmail,
              subject: isUser ? "Appointment Confirmed" : "New Appointment Scheduled",
              architect_name: architectName,
              appointment_date: date,
              appointment_time: time,
              message: message,
              project_description: booking.project || "",
              // Verification specific params (can be empty for confirmation)
              verification_code: "",
            },
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Failed to send ${recipientType} confirmation email:`, errorText);
      }
    };

    try {
      await Promise.all([
        sendConfirmationEmail(booking.email, "user"),
        sendConfirmationEmail(adminEmail, "admin"),
      ]);
      console.info("Confirmation emails sent successfully.");
    } catch (error) {
      console.error("Error sending confirmation emails:", error);
    }
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!formData.name.trim() || !formData.email.trim()) {
      setFormError("Please provide your name and email.");
      return;
    }

    if (!selectedDate) {
      setFormError("Please select a date.");
      return;
    }

    if (!selectedTime) {
      setFormError("Please choose a time slot.");
      return;
    }

    if (!validateRealEmail(formData.email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (isSlotTaken(confirmedArchitect.id, selectedDate, selectedTime)) {
      setFormError("This slot was just booked! Please pick another time.");
      return;
    }

    const newBooking = {
      architectId: confirmedArchitect.id,
      date: selectedDate,
      time: selectedTime,
      name: formData.name.trim(),
      email: formData.email.toLowerCase().trim(),
      project: formData.project.trim(),
    };

    const code = String(Math.floor(100000 + Math.random() * 900000));

    try {
      setIsSendingCode(true);
      await sendVerificationCode(newBooking, code);
      setPendingBooking(newBooking);
      setVerificationCode(code);
      setVerificationInput("");
      setVerificationError("");
      setVerificationNotice(`Verification code sent to ${newBooking.email}.`);
    } catch (error) {
      setFormError(error.message);
    } finally {
      setIsSendingCode(false);
    }
  };

  const handleVerificationSubmit = async (e) => {
    e.preventDefault();
    setVerificationError("");
    setVerificationNotice("");

    if (!verificationInput.trim()) {
      setVerificationError("Please enter the verification code.");
      return;
    }

    if (verificationInput.trim() !== verificationCode) {
      setVerificationError("Incorrect verification code.");
      return;
    }

    // Save the booking
    setBookedSlots((prev) => [...prev, pendingBooking]);

    // Send confirmation emails to user and admin
    try {
      await sendConfirmationEmails(
        pendingBooking,
        confirmedArchitect.name,
        pendingBooking.date,
        pendingBooking.time
      );
    } catch (error) {
      console.error("Failed to send confirmation emails:", error);
      // Don't block the booking if emails fail
    }

    setPendingBooking(null);
    setIsBooked(true);
  };

  // Resend a fresh verification code to the user and admin
  const handleResendCode = async () => {
    if (!pendingBooking || isResending) return;
    setIsResending(true);
    setVerificationError("");
    setVerificationNotice("");
    try {
      const code = String(Math.floor(100000 + Math.random() * 900000));
      await sendVerificationCode(pendingBooking, code);
      setVerificationCode(code);
      setVerificationInput("");
      setVerificationNotice(
        `A new verification code has been sent to ${pendingBooking.email}.`
      );
    } catch (error) {
      setVerificationError(error.message);
    } finally {
      setIsResending(false);
    }
  };

  const handleResetForm = () => {
    setIsBooked(false);
    setPendingBooking(null);
    setFormData({ name: "", email: "", project: "" });
    setSelectedDate("");
    setSelectedTime("");
  };

  // Scroll to left form section and confirm the selected architect
  const handleScrollToForm = (e) => {
    e.preventDefault();
    setConfirmedArchitect(selectedArchitect);
    const targetElement = document.getElementById("left-form-section");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const getMinDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today;
  };

  const otpDigits = Array.from({ length: 6 }, (_, i) => verificationInput[i] || "");

  // Auto-focus OTP input when verification step appears
  useEffect(() => {
    if (pendingBooking) {
      const otpInput = document.getElementById('otp-input');
      if (otpInput) {
        setTimeout(() => otpInput.focus(), 100);
      }
    }
  }, [pendingBooking]);

  return (
    <section
      className="relative  w-full min-h-screen bg-cover  bg-center bg-no-repeat text-neutral-900 font-mono flex items-center justify-center py-16 px-4 sm:px-8 lg:px-12"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      {/* Background Darkening Overlay */}
      <div className="absolute  inset-0 backdrop-blur-[10px]" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[2400px] space-y-8 lg:space-y-10  mb-10 lg:mb-30">

        {/* Main Heading */}
        <div className="space-y-2 lg:ml-275 lg:-mb-200">
          {/* <div className="space-y-2"> */}
          <h1 className="text-4xl lg:mt-50 mt-10 sm:text-5xl md:text-6xl font-mono font-normal text-neutral-800 tracking-tight">
            Have a project?
          </h1>
          <h2 className="text-5xl lg:mb-30 mb-15 sm:text-6xl md:text-7xl font-mono font-bold text-neutral-950 tracking-tight">
            Let's discuss
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Left Side: Wider Card with Extra Large Fonts */}
          <div id="left-form-section" className="order-2  lg:order-none lg:col-span-7 lg:ml-15 lg:mr-25 bg-white/95 backdrop-blur-md 
          rounded-[40px] p-8 sm:p-20 md:p-12 lg:p-16 shadow-2xl border border-white/60 flex flex-col justify-between lg:mt-150">

            {!isBooked && !pendingBooking ? (
              <form onSubmit={handleBookingSubmit} className="space-y-5 sm:space-y-5">

                {/* Consultation Heading */}
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-3xl mb-6 lg:mb-20 -ml-1 font-semibold font-mono tracking-tight">
                    <span className="text-neutral-500 font-normal">Consultation with </span>
                    <span className="text-[#5b7fc7]">{confirmedArchitect.name}</span>
                  </h3>
                </div>

                {/* Name and Email Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div className="space-y-3">

                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full pb-4 border-b-2 border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#5b7fc7] transition-colors text-[18px] font-medium"
                    />
                  </div>

                  <div className="space-y-3">

                    <input
                      type="email"
                      placeholder="Example@mail.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pb-4 border-b-2 border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#5b7fc7] transition-colors text-[18px] font-medium"
                    />
                  </div>
                </div>

                {/* Project Details Input */}
                <div className="space-y-2">
                  <textarea
                    rows={3}
                    placeholder="Tell us about your timeline, scope, or design ideas..."
                    value={formData.project}
                    onChange={(e) =>
                      setFormData({ ...formData, project: e.target.value })
                    }
                    className="w-full pb-0 mb-3 border-b-2 border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#5b7fc7] transition-colors resize-none text-[18px] font-medium leading-none block"
                  />
                </div>
                {/* Date Picker */}
                <div className="space-y-3 pt-2">
                  <label className="block text-xs sm:text-lg font-semibold font-serif uppercase tracking-wider text-neutral-800">
                    Select Date
                  </label>
                  <div className="relative">
                    <DatePicker
                      selected={selectedDate ? new Date(selectedDate) : null}
                      onChange={(date) => {
                        if (date) {
                          const year = date.getFullYear();
                          const month = String(date.getMonth() + 1).padStart(2, "0");
                          const day = String(date.getDate()).padStart(2, "0");
                          setSelectedDate(`${year}-${month}-${day}`);
                        } else {
                          setSelectedDate("");
                        }
                        setSelectedTime("");
                        setFormError("");
                      }}
                      minDate={getMinDate()}
                      dateFormat="MM/dd/yyyy"
                      placeholderText="mm/dd/yyyy"
                      className="!pr-12 w-full p-4 bg-white border border-gray-300 rounded-lg text-gray-700 text-lg font-normal focus:outline-none focus:border-[#5b7fc7] focus:ring-1 focus:ring-[#5b7fc7]/30 cursor-pointer placeholder:text-gray-400"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Time Slots */}
                <div className="space-y-4">
                  <label className="block text-sm sm:text-lg font-semibold font-serif mb-4 sm:mb-6 mt-5 sm:mt-10 uppercase tracking-wider text-neutral-800">
                    Available Time Slots
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    {timeSlots.map((time) => {
                      const taken = selectedDate
                        ? isSlotTaken(confirmedArchitect.id, selectedDate, time)
                        : false;
                      const active = selectedTime === time;

                      return (
                        <button
                          key={time}
                          type="button"
                          disabled={taken}
                          onClick={() => setSelectedTime(time)}
                          className={`pb-3 pt-2 text-xs tracking-tight sm:text-lg sm:tracking-normal font-normal transition-all cursor-pointer text-center focus:outline-none border-b-2 ${taken
                            ? "text-neutral-300 border-neutral-200 line-through cursor-not-allowed"
                            : active
                              ? "text-[#5b7fc7] border-[#5b7fc7] font-black"
                              : "text-neutral-700 border-neutral-300 font-bold hover:text-[#5b7fc7] hover:border-[#5b7fc7]"
                            }`}
                        >
                          {taken ? "Booked" : time}
                        </button>
                      );
                    })}
                  </div>
                </div>
                {/* Error Banner */}
                {formError && (
                  <p className="text-sm font-bold text-red-600 bg-red-50 p-4 rounded-2xl border border-red-200">
                    {formError}
                  </p>
                )}

                {/* Confirm & Send Code Button */}
                <button
                  type="submit"
                  disabled={isSendingCode}
                  className="w-full py-3.5 sm:py-5 rounded-2xl bg-[#5b7fc7] hover:bg-[#4c6eb6] text-white font-bold font-serif text-base sm:text-xl tracking-wide transition-all duration-200 shadow-xl cursor-pointer"
                >
                  {isSendingCode ? "Sending Code…" : "Confirm & Send Code →"}
                </button>
              </form>
            ) : pendingBooking ? (
              /* Verification Step */
              <form onSubmit={handleVerificationSubmit} className="space-y-6 my-auto text-center py-8">
                <div className="space-y-3">
                  <span className="text-sm font-bold uppercase tracking-widest text-[#5b7fc7] bg-blue-50 px-4 py-2 rounded-full">
                    Verification Required
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-mono font-extrabold text-neutral-900 mt-4">
                    Enter Verification Code
                  </h3>
                  <p className="text-lg text-neutral-600">
                    We sent a 6-digit confirmation code to{" "}
                    <strong className="text-neutral-900">{pendingBooking.email}</strong>
                  </p>
                </div>

                {/* OTP Box Display */}
                <div
                  className="flex justify-center gap-2 sm:gap-3 my-4 sm:my-5 cursor-text w-full max-w-xl mx-auto"
                  onClick={() => document.getElementById('otp-input').focus()}
                >
                  {otpDigits.map((digit, i) => (
                    <div
                      key={i}
                      className={`flex-1 max-w-16 aspect-square flex items-center justify-center border-2 rounded-xl sm:rounded-2xl text-xl sm:text-2xl font-black transition-all duration-200 ${digit
                          ? "border-[#5b7fc7] bg-[#5b7fc7]/10 text-[#5b7fc7]"
                          : i === verificationInput.length
                            ? "border-[#5b7fc7] bg-white animate-pulse"
                            : "border-neutral-300 bg-neutral-50 text-neutral-900"
                        }`}
                    >
                      {digit || "·"}
                    </div>
                  ))}
                </div>

                <input
                  id="otp-input"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={6}
                  placeholder="Enter 6-digit code"
                  value={verificationInput}
                  onChange={(e) =>
                    setVerificationInput(
                      e.target.value.replace(/\D/g, "").slice(0, 6)
                    )
                  }
                  className="w-full max-w-2xl mx-auto p-4 text-center bg-neutral-50 border-2 border-neutral-300 rounded-2xl text-neutral-900 text-xl tracking-widest font-bold focus:outline-none focus:border-[#5b7fc7] focus:ring-2 focus:ring-[#5b7fc7]/20 mx-auto block placeholder:text-neutral-400 placeholder:text-lg"
                />

                {verificationError && (
                  <p className="text-sm font-bold text-red-600 bg-red-50 p-3 rounded-xl max-w-2xl mx-auto">
                    {verificationError}
                  </p>
                )}

                {verificationNotice && (
                  <p className="text-lg font-mono font-bold text-[#5b7fc7] bg-blue-50 py-4 px-6 rounded-xl max-w-2xl mx-auto">
                    {verificationNotice}
                  </p>
                )}

                <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
                  <button
                    type="button"
                    onClick={() => setPendingBooking(null)}
                    className="flex-1 whitespace-nowrap p-4 bg-neutral-200 hover:bg-neutral-300 text-neutral-900 font-bold text-lg rounded-2xl transition-all cursor-pointer"
                  >
                    ← Back to Edit
                  </button>

                  <button
                    type="submit"
                    className="flex-1 whitespace-nowrap p-4 bg-[#5b7fc7] hover:bg-[#4c6eb6] text-white font-black text-lg rounded-2xl transition-all shadow-lg cursor-pointer"
                  >
                    Verify & Lock Slot
                  </button>
                </div>

                {/* Resend Code — styled like the "Book a Consultant" button */}
                <div className="mt-5 space-y-3">
                  <p className="text-base text-neutral-500">Didn't receive the code?</p>
                  <button
                    type="button"
                    onClick={handleResendCode}
                    disabled={isResending}
                    className="group relative overflow-hidden w-full max-w-md mx-auto flex items-center justify-center gap-3 py-4 text-lg font-black tracking-[0.05em]
                    text-gray-900 bg-white/90 border-2 border-white rounded-full shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer disabled:opacity-60"
                  >
                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#5b7fc7] rounded-full scale-0 group-hover:scale-[8] transition-transform duration-700 ease-out pointer-events-none" />
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                      {isResending ? "Resending…" : "Resend Code"}
                    </span>
                  </button>
                </div>
              </form>
            ) : (
              /* Success Confirmation */
              <div className="text-center space-y-5 my-auto py-10">
                <div className="w-20 h-20 bg-[#5b7fc7] text-white rounded-full flex items-center justify-center mx-auto text-4xl font-extrabold shadow-lg">
                  ✓
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
                    Call Successfully Scheduled!
                  </h3>
                  <p className="text-xl text-neutral-600 max-w-lg mx-auto">
                    Your appointment with <strong>{confirmedArchitect.name}</strong> is locked for{" "}
                    <strong className="text-neutral-900">{selectedDate}</strong> at{" "}
                    <strong className="text-neutral-900">{selectedTime}</strong>.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleResetForm}
                  className="py-4 px-8 bg-[#5b7fc7] hover:bg-[#4c6eb6] text-white font-black text-xl rounded-2xl transition-all cursor-pointer shadow-lg"
                >
                  Schedule Another Consultation
                </button>
              </div>
            )}

            {/* Prefer Email Section */}
            <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-neutral-200 space-y-3">
              <p className="text-lg font-bold text-neutral-700">
                Prefer email?
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-lg sm:text-xl font-serif text-neutral-500 font-semibold">
                  hello@studioDNA.design
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-4 py-1.5 text-sm font-serif bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold rounded-full transition-colors cursor-pointer"
                >
                  {copiedEmail ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

          </div>

          {/* Right Side: Shorter Height, Wider Card & Large Text */}
          <div className="order-1 lg:order-none lg:col-span-5 lg:mt-200 bg-white/95 backdrop-blur-md rounded-[40px]
           p-5 sm:p-8 lg:p-10 shadow-2xl border border-white/60 flex flex-col justify-between space-y-5">

            {/* Header & Controls */}
            <div className="flex items-center justify-between pb-3 sm:pb-5 border-b border-neutral-200">
              <span className="text-sm font-extrabold uppercase tracking-widest text-neutral-400 font-mono">
                Architect ({currentArchitectIndex + 1} / {architects.length})
              </span>

              {/* Carousel Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevArchitect}
                  aria-label="Previous Architect"
                  className="w-11 h-11 rounded-full bg-neutral-100 hover:bg-[#5b7fc7] hover:text-white flex items-center justify-center text-neutral-900 font-black text-lg transition-all cursor-pointer shadow-sm"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={handleNextArchitect}
                  aria-label="Next Architect"
                  className="w-11 h-11 rounded-full bg-neutral-100 hover:bg-[#5b7fc7] hover:text-white flex items-center justify-center text-neutral-900 font-black text-lg transition-all cursor-pointer shadow-sm"
                >
                  →
                </button>
              </div>
            </div>

            {/* Profile Details with Increased Typography */}
            <div className="space-y-5 lg:space-y-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <img
                  src={selectedArchitect.image}
                  alt={selectedArchitect.name}
                  className="w-32 h-32 sm:w-40 sm:h-52 rounded-3xl object-cover shadow-xl border-2 border-neutral-100"
                />
                <div className="space-y-2">
                  <h4 className="text-xl sm:text-2xl font-extrabold text-neutral-900 leading-tight">
                    {selectedArchitect.name}
                  </h4>
                  <p className="text-sm sm:text-lg font-bold text-[#5b7fc7]">
                    {selectedArchitect.role}
                  </p>
                </div>
              </div>

              <p className="text-lg text-neutral-700 leading-relaxed font-normal">
                "{selectedArchitect.bio}"
              </p>
            </div>

            {/* Book a Consultant Button */}
            <div className="pt-3 -ml-0 sm:-ml-10">
              <button
                type="button"
                onClick={handleScrollToForm}
                className="group relative overflow-hidden w-full lg:w-[420px] lg:ml-40 flex items-center justify-center gap-3 py-4 lg:py-5 text-lg font-black tracking-[0.05em]
                text-gray-900 bg-white/90 border-2 border-white rounded-full shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#5b7fc7] rounded-full scale-0 group-hover:scale-[8] transition-transform duration-700 ease-out pointer-events-none" />
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  Book a Consultant
                </span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Meet;