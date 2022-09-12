import Image from "next/image";


function Header() {
  return (
  <header>
    {/* Top Nav */}
    <div>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
         width={150}
         height={40}
        />
    </div>
    {/* Bottom Nav */}
    <div>

    </div>
  </header>
  )
}

export default Header;