import Link from 'next/link'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { cloneElement, Children } from 'react'

const NavLink = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  // pages/name.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link {...props}>
      {cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

NavLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
}

export default NavLink