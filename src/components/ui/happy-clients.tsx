import Image from "next/image"
import type { FC } from "react"

interface ClientAvatarProps {
  src: string
  alt: string
  index: number
}

const ClientAvatar: FC<ClientAvatarProps> = ({ src, alt, index }) => {
  return (
    <div
      className="relative rounded-full border-2 border-white overflow-hidden w-10 h-10"
      style={{ marginLeft: index === 0 ? 0 : "-0.75rem" }}
    >
      <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" />
    </div>
  )
}

interface HappyClientsProps {
  count: number
  avatars: { src: string; alt: string }[]
}

export default function HappyClients({ count = 50, avatars }: HappyClientsProps) {
  return (
    <div className="flex items-center">
      <div className="flex">
        {avatars.map((avatar, index) => (
          <ClientAvatar key={index} src={avatar.src} alt={avatar.alt} index={index} />
        ))}
      </div>
    </div>
  )
}