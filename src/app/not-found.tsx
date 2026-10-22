import Link from "@/components/TLink";
export default function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center bg-white px-4 pt-24 text-center">
      <div>
        <p className="font-display text-[8rem] font-semibold leading-none text-gradient">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold">This Page Does Not Exist</h1>
        <Link href="/" className="btn btn-primary mt-8">Back to Home</Link>
      </div>
    </section>
  );
}
