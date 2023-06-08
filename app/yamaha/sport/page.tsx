import Link from "next/link";

export default function YahamaSport() {
    return (
        <div>
            <h2>Yamaha R15</h2>
            <nav>
                <Link href="yamaha/sport/r15/v1">V1</Link>
                <Link href="yamaha/sport/r15/v2">V2</Link>
                <Link href="yamaha/sport/r15/v3">V3</Link>
            </nav>

            <h2>MT 15</h2>
            <nav>
                <Link href="/mt15/v1">V1</Link>
                <Link href="/mt15/v2">V2</Link>
                <Link href="/mt15/v3">V3</Link>
            </nav>

            <h2>MT 25</h2>
            <nav>
                <Link href="/mt25/v1">V1</Link>
                <Link href="/mt25/v2">V2</Link>
                <Link href="/mt25/v3">V3</Link>
            </nav>
        </div>
    )
}