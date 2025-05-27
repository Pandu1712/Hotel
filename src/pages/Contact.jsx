import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-[#143447] min-h-screen text-white font-sans px-4 py-12">
      <h1 className="text-[#f8de71] text-4xl font-semibold text-center mb-16 ">Get in Touch</h1>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-12 text-center max-w-6xl mx-auto mb-20">
        {/* Address */}
        <div>
          <div className="flex justify-center mb-4">
            <MapPin className="text-[#f8de71] w-10 h-10" />
          </div>
          <h2 className="text-[#f8de71] text-xl font-semibold mb-2">ADDRESS</h2>
          <p className="font-semibold">Wellfield Group Contracting</p>
          <p>148 Tuma Street<br />Denver CO 80223</p>
          <p className="mt-4 font-semibold">Northern Division Office</p>
          <p>Windsor, CO 30550</p>
        </div>

        {/* Phone */}
        <div>
          <div className="flex justify-center mb-4">
            <Phone className="text-[#f8de71] w-10 h-10" />
          </div>
          <h2 className="text-[#f8de71] text-xl font-semibold mb-2">PHONE</h2>
          <p className="font-semibold">Wellfield Group Contracting</p>
          <p>303.428.20ff<br />303.202.0646 (fax)</p>
          <p className="mt-4 font-semibold">Wellfield 24/2 Service Dept.</p>
          <p>303.428.20ff<br />303.202.0085 (fax)</p>
          <p className="mt-4 font-semibold">Wyoming Office</p>
          <p>307.767.7967</p>
        </div>

        {/* Email */}
        <div>
          <div className="flex justify-center mb-4">
            <Mail className="text-[#f8de71] w-10 h-10" />
          </div>
          <h2 className="text-[#f8de71] text-xl font-semibold mb-2">EMAIL</h2>
          <p><span className="font-semibold">Request for Proposal</span><br />Info@wellfieldgroup.com</p>
          <p className="mt-4"><span className="font-semibold">Electrical Service Calls</span><br />service@wellfieldcontracting.com</p>
          <p className="mt-4"><span className="font-semibold">Employment Opportunities</span><br />careers@wellfieldcontracting.com</p>
        </div>
      </div>

      {/* Message Form */}
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-[#f8de71] text-3xl font-semibold mb-6">Message Us</h2>
        <p className="mb-8 text-gray-200">
          If you wish to be considered for employment at Wyellfield, please do not send a message here – a representative of our Human Resources department will contact you after we receive your application.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm mb-1">Full Name</label>
            <input type="text" className="w-full p-3 bg-[#f8de71] text-black rounded" placeholder="John Doe" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm mb-1">Email</label>
            <input type="email" className="w-full p-3 bg-[#f8de71] text-black rounded" placeholder="email@example.com" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm mb-1">Comments</label>
            <textarea rows="6" className="w-full p-3 bg-[#f8de71] text-black rounded" placeholder="Your message..."></textarea>
          </div>

          <div className="md:col-span-2 text-center">
            <button type="submit" className="bg-[#f8de71] hover:bg-yellow-300 text-black font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}