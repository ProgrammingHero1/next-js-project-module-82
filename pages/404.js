import Image from "next/image";
import Link from "next/link";

const Error = () => {
    return (
        <div>
            <Image src='/error.png' width={1440} height={50}>

            </Image>
            <Link href="/">
                <button className="btn btn-primary">
                    Back to home
                </button>
            </Link>
        </div>
    );
};

export default Error;