import React, { useState, useEffect } from 'react'
import { Text, Image, Repeater, types, Link } from 'react-bricks/frontend'
import { Menu, X, ShoppingCart, User } from 'lucide-react'

interface NavbarNovaProps {
  backgroundColor: string
  textColor: string
  logoMaxWidth: number
}

const NavbarNova: types.Brick<NavbarNovaProps> = ({ 
  backgroundColor = 'rgba(128, 128, 128, 0.1)', 
  textColor = '#000000',
  logoMaxWidth = 150 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: '1rem',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'calc(100% - 2rem)',
    maxWidth: '1200px',
    backgroundColor: scrolled ? 'rgba(128, 128, 128, 0.15)' : backgroundColor,
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: '50px',
    padding: '0.75rem 1.5rem',
    zIndex: 1000,
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.1)' : '0 4px 16px rgba(0, 0, 0, 0.05)'
  }

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  }

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    transition: 'transform 0.2s ease'
  }

  const desktopMenuStyle: React.CSSProperties = {
    display: 'none',
    alignItems: 'center',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0
  }

  const actionsStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }

  const mobileButtonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    color: textColor,
    transition: 'background-color 0.2s ease'
  }

  const mobileMenuStyle: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '1rem',
    marginTop: '0.5rem',
    padding: '1rem',
    transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
    opacity: mobileMenuOpen ? 1 : 0,
    visibility: mobileMenuOpen ? 'visible' : 'hidden',
    transition: 'all 0.3s ease'
  }

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        {/* Logo */}
        <Link href="/" style={logoStyle}>
          <Image
            propName="logo"
            alt="NOVA IMPÉRIA"
            maxWidth={logoMaxWidth}
            imageStyle={{
              height: 'auto',
              maxHeight: '40px',
              objectFit: 'contain'
            }}
          />
        </Link>

        {/* Desktop Menu */}
        <ul style={{
          ...desktopMenuStyle,
          '@media (min-width: 1024px)': {
            display: 'flex'
          }
        } as React.CSSProperties}>
          <Repeater propName="menuItems" />
        </ul>

        {/* Actions */}
        <div style={actionsStyle}>
          {/* Auth Button */}
          <Link 
            href="/login" 
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: 'transparent',
              color: textColor,
              textDecoration: 'none',
              borderRadius: '25px',
              border: `1px solid ${textColor}`,
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'all 0.2s ease',
              '@media (min-width: 768px)': {
                display: 'flex'
              }
            } as React.CSSProperties}
          >
            <User size={16} />
            <Text
              propName="authButtonText"
              placeholder="Se connecter"
              renderBlock={(props) => <span {...props} />}
            />
          </Link>

          {/* Cart Button */}
          <Link 
            href="/cart" 
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              backgroundColor: '#FCEB23',
              color: '#000000',
              textDecoration: 'none',
              borderRadius: '50%',
              transition: 'transform 0.2s ease',
              '@media (min-width: 768px)': {
                display: 'flex'
              }
            } as React.CSSProperties}
          >
            <ShoppingCart size={18} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            style={{
              ...mobileButtonStyle,
              '@media (min-width: 1024px)': {
                display: 'none'
              }
            } as React.CSSProperties}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div style={mobileMenuStyle}>
        <ul style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          <Repeater 
            propName="menuItems" 
            itemProps={{ isMobile: true, onClose: () => setMobileMenuOpen(false) }}
          />
        </ul>
        
        {/* Mobile Actions */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '1rem',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(0, 0, 0, 0.1)'
        }}>
          <Link 
            href="/login"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.75rem',
              backgroundColor: 'transparent',
              color: textColor,
              textDecoration: 'none',
              borderRadius: '8px',
              border: `1px solid ${textColor}`,
              fontSize: '0.9rem',
              fontWeight: '500'
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <User size={16} />
            <Text
              propName="authButtonText"
              placeholder="Se connecter"
              renderBlock={(props) => <span {...props} />}
            />
          </Link>
          
          <Link 
            href="/cart"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '48px',
              height: '48px',
              backgroundColor: '#FCEB23',
              color: '#000000',
              textDecoration: 'none',
              borderRadius: '8px'
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <ShoppingCart size={18} />
          </Link>
        </div>
      </div>
    </nav>
  )
}

// Menu Item Component
const NavbarMenuItem: types.Brick<{ isMobile?: boolean; onClose?: () => void }> = ({ 
  isMobile = false, 
  onClose 
}) => {
  const linkStyle: React.CSSProperties = {
    display: 'block',
    padding: isMobile ? '0.75rem 1rem' : '0.5rem 1rem',
    color: '#000000',
    textDecoration: 'none',
    borderRadius: isMobile ? '8px' : '25px',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    backgroundColor: 'transparent'
  }

  return (
    <li>
      <Link 
        href="#" 
        style={linkStyle}
        onClick={onClose}
      >
        <Text
          propName="label"
          placeholder="Menu Item"
          renderBlock={(props) => <span {...props} />}
        />
      </Link>
    </li>
  )
}

// React Bricks Schemas
NavbarNova.schema = {
  name: 'navbar-nova',
  label: 'NOVA Navbar',
  category: 'layout',
  tags: ['navbar', 'navigation', 'nova', 'header'],

  repeaterItems: [
    {
      name: 'menuItems',
      itemType: 'navbar-menu-item',
      itemLabel: 'Menu Item',
      min: 1,
      max: 8,
    },
  ],

  sideEditProps: [
    {
      name: 'backgroundColor',
      label: 'Background Color',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'textColor',
      label: 'Text Color',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'logoMaxWidth',
      label: 'Logo Max Width',
      type: types.SideEditPropType.Number,
    },
  ],

  getDefaultProps: () => ({
    backgroundColor: 'rgba(128, 128, 128, 0.1)',
    textColor: '#000000',
    logoMaxWidth: 150,
    authButtonText: 'Se connecter',
    menuItems: [
      { label: 'Accueil', href: '/' },
      { label: 'À propos', href: '/a-propos' },
      { label: 'Formations', href: '/formations' },
      { label: 'Prestations', href: '/prestations' },
      { label: 'Contact', href: '/contact' },
    ],
  }),
}

NavbarMenuItem.schema = {
  name: 'navbar-menu-item',
  label: 'Menu Item',
  category: 'layout',
  hideFromAddMenu: true,

  sideEditProps: [
    {
      name: 'href',
      label: 'Link URL',
      type: types.SideEditPropType.Text,
    },
  ],

  getDefaultProps: () => ({
    label: 'Menu Item',
    href: '#',
  }),
}

export { NavbarNova, NavbarMenuItem }