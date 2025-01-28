import Image from "next/image"

interface TeamMember {
  name: string
  role: string
  image: string
}

export default function TeamCard({ name, role, image }: TeamMember) {
  return (
    <div className="bg-white  rounded-lg shadow-sm slide-in overflow-hidden">
      <div className="mb-2 h-[300px]">
        <Image src={image || "/placeholder.svg"} alt={name}
        width={200} height={200} className="w-full h-full object-cover object-center" />
      </div>
      <div className="px-6 py-3">
      <h3 className="text-xl font-bold mb-1 text-center">{name}</h3>
      <p className="text-gray-600 text-center">{role}</p>
      </div>
    </div>
  )
}
