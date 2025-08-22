import box from "../../../public/mail-box.png";

const ContactPage = () => {

    return (  
     <main className="relative pt-12 pb-[100px] px-10">
  <img
    src={box}
    alt="mail box picture"
    className="absolute top-[50px] right-12 w-[80px] sm:right-[140px] md:right-[240px] md:top-[48px] lg:w-[90px] lg:right-[500px] lg:top-10"
  />

  <section className="max-w-lg mx-auto mt-20 p-6 bg-white rounded-lg shadow-md z-10 relative">
    <h2 className="text-xl sm:text-2xl text-center text-dark-purple font-semibold mb-4">
      Contact Us
    </h2>
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="name">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="email">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="resize-none w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-purple text-white rounded font-medium hover:bg-dark-purple transition-all duration-700"
      >
        Send Message
      </button>
    </form>
  </section>


</main>
    )
}
 
export default ContactPage;