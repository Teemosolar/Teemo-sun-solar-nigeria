import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    propertyType: "residential",
    location: "",
    batteryType: "lithium",
    monthlyFuelBill: "",
    details: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create a beautifully custom WhatsApp message draft
    const draftText = `Hello Teemo-Sun Solar Nigeria! My name is ${formData.name}. I am located in ${formData.location}. I want to request a direct solar system quote for my ${formData.propertyType} property.
- Preferred Storage: ${formData.batteryType} Battery
- Current Estimated Monthly Fuel Bill: ₦${formData.monthlyFuelBill}
- Additional Requirements: ${formData.details || "None provided"}`;

    const encoded = encodeURIComponent(draftText);
    window.open(`https://wa.me/2347064519576?text=${encoded}`, "_blank", "noreferrer");
  };

  return (
    <div className="w-full flex flex-col bg-slate-50">
      
      {/* HEADER BANNER */}
      <section className="bg-gradient-to-r from-[#062316] via-[#0c5132] to-emerald-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-left">
          <span className="font-mono text-xs text-amber-300 font-bold uppercase py-1 px-3.5 rounded bg-amber-400/15 border border-amber-300/30">
            Rapid Response Hub
          </span>
          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl mt-3 tracking-tight">
            Connect With Our Engineers
          </h1>
          <p className="font-sans text-emerald-100 text-sm md:text-base mt-2 max-w-3xl leading-relaxed">
            Ready to secure 24/7 solar independence? Reach out to our technical coordinators in Lagos, Ogun, and Abuja today.
          </p>
        </div>
      </section>

      {/* CORE CONTACT DIVISIONS */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Interactive Address Card Board */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm text-left space-y-6">
              
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider font-extrabold text-[#0c5132]">TEEMO-SUN CHANNELS</span>
                <h3 className="font-sans font-extrabold text-[#0c5132] text-xl mt-1 tracking-tight">Direct Information</h3>
              </div>

              <div className="space-y-5">
                {/* Channel 1: Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#0c5132] flex items-center justify-center flex-shrink-0 border border-emerald-150/40">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-sm text-[#062316] leading-none">Registered Lagos Head Office</h5>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      6, Morrison, Oregun, Ikeja, Lagos State, Nigeria.
                    </p>
                  </div>
                </div>

                {/* Channel 2: Training Branch */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#0c5132] flex items-center justify-center flex-shrink-0 border border-emerald-150/40">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-sm text-[#062316] leading-none">Abeokuta Training Branch</h5>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      Teemo-Sun Solar Institute, Abeokuta, Ogun State, Nigeria.
                    </p>
                  </div>
                </div>

                {/* Channel 3: Telephone dials */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#0c5132] flex items-center justify-center flex-shrink-0 border border-emerald-150/40">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-sm text-[#062316] leading-none">Corporate Support Lines</h5>
                    <p className="text-xs text-emerald-900 font-bold mt-1 tracking-wider">
                      +234 7064519576 | 09022620416
                    </p>
                    <p className="text-[10px] text-gray-400">Available: Mon - Sat (8am to 6pm)</p>
                  </div>
                </div>

                {/* Channel 4: Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#0c5132] flex items-center justify-center flex-shrink-0 border border-emerald-150/40">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-sm text-[#062316] leading-none">General Sales Email</h5>
                    <p className="text-xs text-emerald-900 font-bold mt-1">
                      info@teemosunsolar.com
                    </p>
                    <p className="text-[10px] text-gray-400">Secondary: teemosolarnigeria@gmail.com</p>
                  </div>
                </div>

                {/* Channel 5: Website */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#0c5132] flex items-center justify-center flex-shrink-0 border border-emerald-150/40">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-sm text-[#062316] leading-none">Official Site URL</h5>
                    <p className="text-xs text-emerald-900 font-bold mt-1">
                      www.teemosunsolar.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Working hours badge */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500 font-semibold">
                <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Typical engineering site evaluation takes 24 hours.</span>
              </div>
            </div>

            {/* Quick WhatsApp conversion help */}
            <div className="bg-[#0c5132] text-white p-6 rounded-3xl text-left space-y-3 shadow-md relative overflow-hidden">
              <span className="w-32 h-32 rounded-full bg-emerald-500/10 blur-xl pointer-events-none absolute right-0 bottom-0"></span>
              <h4 className="font-sans font-bold text-base text-amber-300">Convert Effortlessly on WhatsApp</h4>
              <p className="text-xs text-emerald-100/90 leading-relaxed font-semibold">
                By pressing submit on the right form, your parameters will compile into a custom inquiry. Direct WhatsApp conversion starts immediately on completion.
              </p>
            </div>
          </div>

          {/* Right: Lead Conversion Form */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl shadow-sm p-8 text-left">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-emerald-600" />
              <h3 className="font-sans font-extrabold text-xl text-[#0c5132] tracking-tight">Request Solar Pricing Quote</h3>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-[#062316] uppercase tracking-wider mb-2">Your Name / Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Kolawole Ogunsetan"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c5132] focus:border-transparent font-medium"
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-xs font-bold text-[#062316] uppercase tracking-wider mb-2">Installation Region State</label>
                  <input 
                    type="text" 
                    id="location" 
                    name="location" 
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g. Abeokuta, Ogun State"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c5132] focus:border-transparent font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="propertyType" className="block text-xs font-bold text-[#062316] uppercase tracking-wider mb-2">Property Profile Category</label>
                  <select 
                    id="propertyType" 
                    name="propertyType" 
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c5132] focus:border-transparent bg-white font-medium"
                  >
                    <option value="residential">Residential Home</option>
                    <option value="corporate">Corporate Office</option>
                    <option value="school">School / Campus</option>
                    <option value="hospital">Hospital / Clinic</option>
                    <option value="factory">Factory / Warehouse</option>
                    <option value="farm">Farm / Irrigation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="batteryType" className="block text-xs font-bold text-[#062316] uppercase tracking-wider mb-2">Preferred Tech Storage</label>
                  <select 
                    id="batteryType" 
                    name="batteryType" 
                    value={formData.batteryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c5132] focus:border-transparent bg-white font-medium"
                  >
                    <option value="lithium">Lithium Ion LiFePO4 (Recommended)</option>
                    <option value="tubular">Tubular budget cycles (Standard)</option>
                    <option value="undecided">Not sure (Needs energy audit)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="monthlyFuelBill" className="block text-xs font-bold text-[#062316] uppercase tracking-wider mb-2">Current Estimated Monthly Generator Fuel Bill (₦)</label>
                <input 
                  type="number" 
                  id="monthlyFuelBill" 
                  name="monthlyFuelBill" 
                  required
                  value={formData.monthlyFuelBill}
                  onChange={handleInputChange}
                  placeholder="e.g. 150000"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c5132] focus:border-transparent font-medium"
                />
              </div>

              <div>
                <label htmlFor="details" className="block text-xs font-bold text-[#062316] uppercase tracking-wider mb-2">List any heavy home appliances or specific requirements</label>
                <textarea 
                  id="details" 
                  name="details" 
                  rows={4}
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder="e.g. 2 AC units to run in afternoon, water pump used twice a week, 1 soundbar..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c5132] focus:border-transparent font-medium resize-none"
                />
              </div>

              <div>
                <button 
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all text-center"
                >
                  Compile & Send Quote via WhatsApp
                  <Send className="w-4.5 h-4.5 text-amber-300" />
                </button>
                <p className="text-[10px] text-gray-400 font-mono mt-3 text-center">
                  ⚠️ Direct Whatsapp API will open on submit. No data gets saved on external clouds without your permission.
                </p>
              </div>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
