import classNames from 'classnames'
import React from 'react'
import { useTheme, ThemeContextType } from '@okp4/ui'
import './logo.module.scss'
import 'svgxuse' // svg sprite polyfill

export type LogoProps = Readonly<{
  /**
   * The size of the logo, must be determined according to its use and location.
   */
  readonly size?: 'x-small' | 'small' | 'medium' | 'large'
  /**
   * The type of the logo, flexible according to use and location.
   */
  readonly type?: 'logo' | 'logotype' | 'logomark'
}>

export const Logo: React.FC<LogoProps> = ({ size = 'medium', type = 'logo' }: LogoProps) => {
  const { theme }: ThemeContextType = useTheme()

  const imageClassname = classNames('axone-logo-main', {
    'x-small': size === 'x-small',
    small: size === 'small',
    medium: size === 'medium',
    large: size === 'large',
    logo: type === 'logo',
    logotype: type === 'logotype',
    logomark: type === 'logomark'
  })

  return (
    <svg className={imageClassname}>
      <use href={`logos/sprite.svg#${type}-axone-${theme}`} />
    </svg>
  )
}
