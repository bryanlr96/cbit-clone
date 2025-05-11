

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-4 rounded-tl-[30px] rounded-tr-[30px] border-none px-4 py-4 shadow-[-4px_0px_16px_0px_#5183f014] mt-5">
        <a href="#" className="text-gray-500 font-primary text-center lg:text-sm text-xs">Copyright © 2024 - 2025 Datapground S.L.</a>
        <a href="#" className="text-gray-500 font-primary text-center lg:text-sm text-xs">Terms</a>
        <a href="#" className="text-gray-500 font-primary text-center lg:text-sm text-xs">Privacity</a>
        <a href="#" className="text-gray-500 font-primary text-center lg:text-sm text-xs">Contact</a>
        <a href="#" className="text-gray-500 font-primary text-center lg:text-sm text-xs">API Status <div className="w-2 h-2 bg-green-500 rounded-full inline-block ml-2"/></a>
        <a href="#" className="text-gray-500 font-primary text-center lg:text-sm text-xs">Consent Preferences</a>
    </footer>
  )
}
