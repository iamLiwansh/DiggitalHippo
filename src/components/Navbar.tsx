import MaxWidthWrapper from "./MaxWidthWrapper"
import Link from 'next/link'
const Navbar = () =>{
    return (
        <div className="bg-white sticky z-50 top-0 inset-x h-16">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 item-center">
                            {/*Todo : mobile nav */}

                            <div className="ml-4 flex lg:ml-0">
                                <Link href="/"></Link>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default Navbar