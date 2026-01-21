import Image from "next/image"

export function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/logo.png"      
        alt="LeadPulze Logo"
        width={120}
        height={50}
        className="h-15 w-auto object-contain"
        priority
      />
    </div>
  )
}
