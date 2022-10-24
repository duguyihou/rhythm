export const sizes = {
  sm: 'h-4 w-4',
  md: 'h-8 w-8',
  lg: 'h-16 w-16',
  xl: 'h-24 w-24',
}
export const variants = {
  light: 'text-white',
  primary: 'text-blue-600',
}
export type SpinnerProps = {
  size?: keyof typeof sizes
  variant?: keyof typeof variants
  className?: string
}
