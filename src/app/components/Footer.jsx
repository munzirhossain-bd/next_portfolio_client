import React from "react";
const enver=process.env.RESEND_API_KEY;
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>LOGO</span>
        <p className="text-slate-600">All rights reserved.</p>
        <p className="text-slate-600">{enver}</p>

      </div>
    </footer>
  );
};

export default Footer;
