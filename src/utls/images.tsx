import Image from 'next/image';
import { CSSProperties } from 'react';
interface Props {
  style?: CSSProperties;
  className?: string;
  src: string;
  width?: number;
  height?: number;
  onClick?: any;
  alt: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  sizes?: string;
}

export default function Images({
  height,
  src,
  width,
  className,
  onClick,
  style,
  alt,
  priority = false,
  loading = 'lazy'
}: Props) {
  return (
    <Image
      priority={priority}
      src={`${src}`}
      alt={alt}
      quality={1}
      loading={loading}
      width={width}
      fill={!width && !height ? true : false}
      height={height}
      onClick={onClick}
      style={{ ...style, objectFit: 'cover' }}
      className={className}
      sizes="10vw"
    />
  );
}
