import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white text-white font-sans px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-16 text-[#143447]">Get in Touch</h1>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto mb-24">
        {/* Address */}
        <div className="bg-[#214d66] p-6 rounded-xl shadow-lg text-center hover:scale-105 transition">
          <MapPin className="w-10 h-10 mx-auto mb-4 text-[#f8de71]" />
          <h2 className="text-xl font-semibold mb-2 text-[#f8de71]">Address</h2>
          <p className="font-semibold">Tumuluri’s plaza, sathya electronics building</p>
          <p>S.No - 300/3, <br />jaggayyapeta</p>
          <div className="mt-4">
            <p className="font-semibold">Ntr district </p>
            <p>Andhra Pradesh,521175 </p>
          </div>
        </div>
{/* S.No - 300/3, 
3rd floor,Tumuluri’s plaza, sathya electronics building, jaggayyapeta 
Ntr district 
Andhra Pradesh 
521175 */}
        {/* Phone */}
        <div className="bg-[#214d66] p-6 rounded-xl shadow-lg text-center hover:scale-105 transition">
          <Phone className="w-10 h-10 mx-auto mb-4 text-[#f8de71]" />
          <h2 className="text-xl font-semibold mb-2 text-[#f8de71]">Phone</h2>
           <p className="font-semibold">Tumuluri’s plaza, sathya electronics building</p>
          <p>303.428.20ff<br />303.202.0646 (fax)</p>
          <div className="mt-4">
           <p>S.No - 300/3, <br />jaggayyapeta</p>
        
            <p>+91 9492047799</p>
          </div>
        </div>

        {/* Email */}
        <div className="bg-[#214d66] p-6 rounded-xl shadow-lg text-center hover:scale-105 transition">
          <Mail className="w-10 h-10 mx-auto mb-4 text-[#f8de71]" />
          <h2 className="text-xl font-semibold mb-2 text-[#f8de71]">Email</h2>
          <p><span className="font-semibold">Proposals:</span><br />hotelgrandvadhuvar@gmail.com</p>
          <p className="mt-4"><span className="font-semibold">Service Calls:</span><br />hotelgrandvadhuvar@gmail.com</p>
         {/*  <p className="mt-4"><span className="font-semibold">Careers:</span><br />careers@wellfieldcontracting.com</p> */}
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto bg-[#214d66] rounded-2xl shadow-lg p-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#f8de71]">Send Us a Message</h2>
        <p className="text-center mb-8 text-gray-200">
          For Room inquiries, please send message throug contact page. A representative will follow up once we review your application.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-1 text-[#f8de71]">Full Name</label>
            <input type="text" className="w-full p-3 rounded bg-white text-[#143447]" placeholder="John Doe" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-1 text-[#f8de71]">Email</label>
            <input type="email" className="w-full p-3 rounded bg-white text-[#143447]" placeholder="email@example.com" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-1 text-[#f8de71]">Message</label>
            <textarea rows="5" className="w-full p-3 rounded bg-white text-[#143447]" placeholder="Your message..."></textarea>
          </div>
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-[#f8de71] hover:bg-yellow-300 text-[#143447] font-semibold py-3 px-10 rounded-full shadow-md transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
