import Image from 'next/image';

export default function Avatar({ worker }: { worker: any }): JSX.Element {
    return (
        <Image
            className="h-14 w-14 rounded-full"
            src={`${worker.metadata.image.imgix_url}?w=100&auto=format`}
            width={32}
            height={32}
            alt={worker.title}
        ></Image>
    );
}
