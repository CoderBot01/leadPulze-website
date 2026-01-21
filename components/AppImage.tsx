/**
 * AppImage Component
 * 
 * A wrapper around Next.js Image with fallback handling.
 * Use this for images that may fail to load and need a fallback.
 * For most cases, use Next.js Image directly for optimal performance.
 */

"use client"

import NextImage, { type ImageProps as NextImageProps } from "next/image"
import { useState } from "react"

interface AppImageProps extends Omit<NextImageProps, "onError"> {
  fallbackSrc?: string
}

const FALLBACK_IMAGE = "/assets/images/no_image.png"

export default function AppImage({
  src,
  alt,
  fallbackSrc = FALLBACK_IMAGE,
  ...props
}: AppImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  return (
    <NextImage
      {...props}
      src={hasError ? fallbackSrc : imgSrc}
      alt={alt}
      onError={() => {
        if (!hasError) {
          setHasError(true)
          setImgSrc(fallbackSrc)
        }
      }}
    />
  )
}
