import SLayout from "../section-layout/SectionLayout";

export default function ContactFrom() {
  return (
    <SLayout>
      <div className="flex flex-wrap lg:flex-nowrap rounded-3xl bg-white p-2">
        <div className="lg:max-w-sm w-full p-6 lg:p-10 bg-[#3E2093] rounded-2xl text-white flex flex-col relative overflow-hidden bg-office"></div>
        <div className="w-full p-6 lg:p-10">
          <Form></Form>
        </div>
      </div>
    </SLayout>
  );
}

export function Form() {
  return (
    <form>
      <div className="flex flex-wrap lg:flex-nowrap lg:gap-8">
        <div className="w-full mb-8">
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium text-textgray"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
            placeholder="John"
            required
          />
        </div>
        <div className="w-full mb-8">
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-medium text-textgray"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
            placeholder="Doe"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap lg:gap-8">
        <div className="w-full mb-8">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-textgray"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
            placeholder="info@iconimex.com"
            required
          />
        </div>
        <div className="w-full mb-8">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-textgray"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
            placeholder="+2511 1668 6900"
            required
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-textgray"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows="6"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-700 focus:border-green-700"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>
      <div className="flex justify-end w-full mt-8">
        <button
          type="submit"
          className="text-white bg-green-700 hover:brightness-90 focus:ring-4 focus:outline-none focus:ring-green-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export function ContactInfo() {
  return (
    <div className="hidden">
      <div>
        <div className="text-xl font-bold mb-2">Contact Information</div>
        <div className="text-gray-300">
          Fill up the form and our team will get back to you with in 24 ours
        </div>
      </div>
      <ul className="py-12 text-gray-300 z-20">
        <li className="flex items-center gap-3 py-3">
          <i className="text-[#FA949D] fa fa-phone" aria-hidden="true"></i>
          <a
            href="tel:"
            className="hover:underline hover:underline-offset-4 hover:decoration-2"
          >
            <span>+2511 16 68 69 00</span>
          </a>
        </li>
        <li className="flex items-center gap-3 py-3">
          <i className="text-[#FA949D] fa fa-phone" aria-hidden="true"></i>
          <a
            href="tel:"
            className="hover:underline hover:underline-offset-4 hover:decoration-2"
          >
            <span>+2511 16 68 69 01</span>
          </a>
        </li>
        <li className="flex items-center gap-3 py-3">
          <i className="text-[#FA949D] fa fa-envelope" aria-hidden="true"></i>
          <a
            href="mailto:info@iconimex.com"
            className="hover:underline hover:underline-offset-4 hover:decoration-2"
          >
            <span>info@iconimex.com</span>
          </a>
        </li>
        <li className="flex items-center gap-3 py-3">
          <i
            className="text-[#FA949D] fa fa-location-arrow"
            aria-hidden="true"
          ></i>
          <address>Bole, Rwanda Street, Addis Ababa, Ethiopia</address>
        </li>
      </ul>
      <div></div>
      <div className="ellipse-contact"></div>
    </div>
  );
}
