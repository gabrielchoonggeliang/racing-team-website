import Link from "next/link";

export default function HomePage() {
    return (
      <div>
        <h1>Brand Name</h1>
        <h2>Yamaha</h2>
        <nav>
          <Link href="/yamaha/sport">Sport</Link>
          <Link href="/yamaha/road">Road</Link>
          <Link href="/yamaha/offroad">Off Road</Link>
        </nav>

        <h2>Honda</h2>
        <nav>
          <Link href="/honda/sport">Sport</Link>
          <Link href="/honda/road">Road</Link>
          <Link href="/honda/offroad">Off Road</Link>
        </nav>

        <h2>Suzuki</h2>
        <nav>
          <Link href="/suzuki/sport">Sport</Link>
          <Link href="/suzuki/road">Road</Link>
          <Link href="/suzuki/offroad">Off Road</Link>
        </nav>
      </div>
    );
}