import Image from "next/image";

export default function ProofImage({
  src,
  alt,
  caption,
}) {
  return (
    <figure className="my-10">
      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          className="w-full h-auto"
        />
      </div>

      {caption && (
        <figcaption className="mt-3 text-sm text-zinc-400 leading-6">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
