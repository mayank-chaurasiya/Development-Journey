export default function Content() {
  return (
    <div className="text-center mt-6 w-full">
      <h3 className="text-lg font-semibold">Stay up to date with the Latest!</h3>
      <p>
        Subscribe to our newsletter for the latest news straight into your inbox.
      </p>
      <form className="flex flex-wrap">
        <input type="email" placeholder="your@email.com" className="w-full mx-50 bg-slate-200 text-center placeholder:text-sm mt-4 my-4 py-2 rounded-xl"/>
        <button className="bg-blue-600 w-full text-white mx-50 py-2 rounded-full">Subscribe Now</button>
      </form>
      <p className="mx-6 mt-6 my-5 text-sm">We value your privacy</p>
    </div>
  );
}
