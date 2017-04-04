import React, {PropTypes} from 'react'
import {css} from 'glamor'
import Link from 'next/link'

import {HEADER_HEIGHT} from './constants'

import {
  colors, mediaQueries
} from '@project-r/styleguide'

const ITEM_MARGIN_LEFT = 10
const menuStyle = css({
  [mediaQueries.onlyS]: {
    display: 'flex',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
    width: '100vw',
    flexDirection: 'column',
    padding: 20,
    paddingTop: 50,
    visibility: 'hidden',
    opacity: 0,
    transition: 'opacity 0.2s ease-in-out, visibility 0s linear 0.2s',
    '&[aria-expanded=true]': {
      opacity: 1,
      visibility: 'visible',
      transition: 'opacity 0.2s ease-in-out'
    }
  },
  [mediaQueries.mUp]: {
    display: 'block',
    whiteSpace: 'none'
  }
})

const listStyle = css({
  fontSize: 16,
  [mediaQueries.onlyS]: {
    fontSize: 20
  },
  listStyle: 'none',
  margin: 0,
  paddingLeft: 0,
  lineHeight: '24px'
})

const listItemStyle = css({
  [mediaQueries.onlyS]: {
    lineHeight: '30px',
    paddingLeft: 0
  },
  [mediaQueries.mUp]: {
    float: 'left',
    marginLeft: ITEM_MARGIN_LEFT,
    position: 'relative'
  }
})

const linkStyle = css({
  textDecoration: 'none',
  color: colors.text,
  ':visited': {
    color: colors.text
  },
  ':hover': {
    color: '#ccc'
  }
})

const Menu = ({items, expanded, id, children}) => (
  <nav {...menuStyle} role='navigation' id={id} aria-expanded={expanded}>
    <ul {...listStyle}>
      {items.map(({label, href}, i) => (
        <li {...listItemStyle} key={i}>
          <Link href={href}>
            <a {...linkStyle}>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
    {children}
  </nav>
)

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired
  })),
  expanded: PropTypes.bool
}

export default Menu
