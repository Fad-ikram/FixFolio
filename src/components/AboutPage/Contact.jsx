import box from "../../../public/mail-box.png";
import postman from "../../../public/postman.png";

const ContactPage = () => {

    return (  
      <main className="relative pt-12 pb-[100px]">
         <img src={box} alt="mail box picture" className="w-[90px] absolute right-[505px] bottom-[558px]" />
         <section class="max-w-lg mx-auto mt-20 p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl text-center text-dark-purple font-semibold mb-4">
          Contact Us
        </h2>
        <form class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1" for="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1" for="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1" for="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              class="resize-none w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full py-2 bg-purple text-white rounded font-medium hover:bg-dark-purple transition-all duration-700 "
          >
            Send Message
          </button>
        </form>
      </section> 
      <img src={postman} alt="postman picture" className="w-[120px] absolute left-[380px] top-[478px]" />

      </main>)
}
 
export default ContactPage;