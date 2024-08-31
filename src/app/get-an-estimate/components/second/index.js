export default function First() {
  return (
    <>
      <div className="w-full flex justify-center mt-20">
        <iframe
          title="map"
          className="w-full h-[300px] md:h-[500px]"
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.1753028889746!2d-73.7541163!3d45.4976566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc93d31b7dbf6cd%3A0xc4128acaff11ef15!2sExpert%20au%20Travail!5e0!3m2!1sen!2sca!4v1692355537711!5m2!1sen!2sca"
        />
      </div>
      <div className="w-fit m-auto">
        <div className="flex flex-col md:flex-row justify-center gap-10 px-4 text-base font-extrabold mt-10 mb-20">
          <div className="flex items-start" data-aos="fade-up">
            <i className="icon-mim-map-marker block text-xl mr-3 font-black text-primary-700" />
            <p className="text-primary-800">
              3155 De Miniac Street Saint <br />
              Laurent, Montreal, QC H4S 1S9
            </p>
          </div>
          <div className="flex items-start" data-aos="fade-up">
            <i className="icon-mim-clock block text-xl mr-3 font-black text-primary-700" />
            <p className="text-primary-800">
              Monday to Friday
              <br />
              7:30am to 3:30pm
            </p>
          </div>
          <div className="flex items-start" data-aos="fade-up">
            <i className="icon-mim-phone block text-xl mr-3 font-black text-primary-700" />
            <p className="text-primary-800">(514) 333-7800</p>
          </div>
        </div>
      </div>
    </>
  );
}
