export default function Footer() {
  return (
    <footer className="mt-14 sm:mt-16 mb-8 sm:mb-10">
      <div className="container-p">
        <div className="glass rounded-2xl px-5 sm:px-6 py-5 flex items-center justify-center">
          <div className="text-sm sm:text-base opacity-80 text-center w-full">
            © {new Date().getFullYear()} NewSchool Tattoo
          </div>
        </div>
      </div>
    </footer>
  );
}
