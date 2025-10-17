export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center w-full bg-[#1b1f29] border-t border-[#292d38] py-5">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <div className="flex flex-col gap-6 px-5 py-8 sm:py-10 text-center">
          <p className="text-[#92aec9] text-sm sm:text-base font-normal leading-normal">
            © {currentYear} Aeryun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
