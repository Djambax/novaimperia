import React from 'react'
import { Text, RichText, Image, Repeater, types, Link } from 'react-bricks/frontend'
import { Mail, Phone, MapPin, Facebook, Twitter, LinkedIn, Instagram, ExternalLink } from 'lucide-react'

interface FooterNovaProps {
  backgroundColor: string
  textColor: string
  accentColor: string
  borderColor: string
}

const FooterNova: types.Brick<FooterNovaProps> = ({ 
  backgroundColor = '#000000',
  textColor = '#ffffff',
  accentColor = '#FCEB23',
  borderColor = '#333333'
}) => {
  const footerStyle: React.CSSProperties = {
    backgroundColor,
    color: textColor,
    padding: '4rem 1rem 2rem',
    borderTop: `1px solid ${borderColor}`
  }

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%'
  }

  const topSectionStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '3rem',
    marginBottom: '3rem',
    paddingBottom: '3rem',
    borderBottom: `1px solid ${borderColor}`
  }

  const brandSectionStyle: React.CSSProperties = {
    maxWidth: '300px'
  }

  const logoStyle: React.CSSProperties = {
    marginBottom: '1.5rem'
  }

  const brandDescStyle: React.CSSProperties = {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#cccccc',
    marginBottom: '2rem'
  }

  const socialLinksStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1rem'
  }

  const socialLinkStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: 'transparent',
    border: `1px solid ${borderColor}`,
    borderRadius: '50%',
    color: textColor,
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  }

  const columnStyle: React.CSSProperties = {
    minWidth: '200px'
  }

  const columnTitleStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: accentColor,
    marginBottom: '1.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }

  const linkListStyle: React.CSSProperties = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  }

  const contactInfoStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }

  const contactItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '0.95rem',
    color: '#cccccc'
  }

  const bottomSectionStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    paddingTop: '2rem'
  }

  const copyrightStyle: React.CSSProperties = {
    fontSize: '0.9rem',
    color: '#999999'
  }

  const legalLinksStyle: React.CSSProperties = {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0
  }

  const legalLinkStyle: React.CSSProperties = {
    fontSize: '0.9rem',
    color: '#cccccc',
    textDecoration: 'none',
    transition: 'color 0.2s ease'
  }

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Top Section */}
        <div style={topSectionStyle}>
          {/* Brand Section */}
          <div style={brandSectionStyle}>
            <div style={logoStyle}>
              <Image
                propName="footerLogo"
                alt="NOVA IMPÉRIA"
                maxWidth={180}
                imageStyle={{
                  height: 'auto',
                  maxHeight: '60px',
                  objectFit: 'contain'
                }}
              />
            </div>

            <RichText
              propName="brandDescription"
              placeholder="NOVA IMPÉRIA accompagne les entrepreneurs dans leur développement professionnel avec des formations certifiées et un conseil personnalisé."
              allowedFeatures={['bold', 'italic']}
              renderBlock={(props) => (
                <p style={brandDescStyle} {...props} />
              )}
            />

            {/* Social Links */}
            <div style={socialLinksStyle}>
              <Link href="#" style={socialLinkStyle}>
                <Facebook size={18} />
              </Link>
              <Link href="#" style={socialLinkStyle}>
                <LinkedIn size={18} />
              </Link>
              <Link href="#" style={socialLinkStyle}>
                <Twitter size={18} />
              </Link>
              <Link href="#" style={socialLinkStyle}>
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Column 1 - Formations */}
          <div style={columnStyle}>
            <Text
              propName="column1Title"
              placeholder="Formations"
              renderBlock={(props) => (
                <h3 style={columnTitleStyle} {...props} />
              )}
            />
            <ul style={linkListStyle}>
              <Repeater propName="column1Links" />
            </ul>
          </div>

          {/* Column 2 - Prestations */}
          <div style={columnStyle}>
            <Text
              propName="column2Title"
              placeholder="Prestations"
              renderBlock={(props) => (
                <h3 style={columnTitleStyle} {...props} />
              )}
            />
            <ul style={linkListStyle}>
              <Repeater propName="column2Links" />
            </ul>
          </div>

          {/* Column 3 - Entreprise */}
          <div style={columnStyle}>
            <Text
              propName="column3Title"
              placeholder="Entreprise"
              renderBlock={(props) => (
                <h3 style={columnTitleStyle} {...props} />
              )}
            />
            <ul style={linkListStyle}>
              <Repeater propName="column3Links" />
            </ul>
          </div>

          {/* Contact Column */}
          <div style={columnStyle}>
            <Text
              propName="contactTitle"
              placeholder="Contact"
              renderBlock={(props) => (
                <h3 style={columnTitleStyle} {...props} />
              )}
            />
            
            <div style={contactInfoStyle}>
              <div style={contactItemStyle}>
                <Mail size={18} style={{ color: accentColor }} />
                <Text
                  propName="email"
                  placeholder="contact@novaimperia.fr"
                  renderBlock={(props) => <span {...props} />}
                />
              </div>
              
              <div style={contactItemStyle}>
                <Phone size={18} style={{ color: accentColor }} />
                <Text
                  propName="phone"
                  placeholder="+33 1 23 45 67 89"
                  renderBlock={(props) => <span {...props} />}
                />
              </div>
              
              <div style={contactItemStyle}>
                <MapPin size={18} style={{ color: accentColor }} />
                <Text
                  propName="address"
                  placeholder="123 Avenue de l'Entrepreneuriat, 75001 Paris"
                  renderBlock={(props) => <span {...props} />}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={bottomSectionStyle}>
          <Text
            propName="copyright"
            placeholder="© 2024 NOVA IMPÉRIA. Tous droits réservés."
            renderBlock={(props) => (
              <p style={copyrightStyle} {...props} />
            )}
          />

          <ul style={legalLinksStyle}>
            <li>
              <Link href="/mentions-legales" style={legalLinkStyle}>
                <Text
                  propName="legalLink1"
                  placeholder="Mentions légales"
                  renderBlock={(props) => <span {...props} />}
                />
              </Link>
            </li>
            <li>
              <Link href="/politique-confidentialite" style={legalLinkStyle}>
                <Text
                  propName="legalLink2"
                  placeholder="Politique de confidentialité"
                  renderBlock={(props) => <span {...props} />}
                />
              </Link>
            </li>
            <li>
              <Link href="/cgu" style={legalLinkStyle}>
                <Text
                  propName="legalLink3"
                  placeholder="CGU"
                  renderBlock={(props) => <span {...props} />}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

// Footer Link Component
const FooterLink: types.Brick = () => {
  const linkStyle: React.CSSProperties = {
    color: '#cccccc',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  }

  return (
    <li>
      <Link href="#" style={linkStyle}>
        <Text
          propName="label"
          placeholder="Lien"
          renderBlock={(props) => <span {...props} />}
        />
        <ExternalLink size={14} style={{ opacity: 0.6 }} />
      </Link>
    </li>
  )
}

// React Bricks Schemas
FooterNova.schema = {
  name: 'footer-nova',
  label: 'NOVA Footer',
  category: 'layout',
  tags: ['footer', 'nova', 'contact', 'links'],

  repeaterItems: [
    {
      name: 'column1Links',
      itemType: 'footer-link',
      itemLabel: 'Lien Formation',
      min: 0,
      max: 6,
    },
    {
      name: 'column2Links',
      itemType: 'footer-link',
      itemLabel: 'Lien Prestation',
      min: 0,
      max: 6,
    },
    {
      name: 'column3Links',
      itemType: 'footer-link',
      itemLabel: 'Lien Entreprise',
      min: 0,
      max: 6,
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
      name: 'accentColor',
      label: 'Accent Color',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'borderColor',
      label: 'Border Color',
      type: types.SideEditPropType.Text,
    },
  ],

  getDefaultProps: () => ({
    backgroundColor: '#000000',
    textColor: '#ffffff',
    accentColor: '#FCEB23',
    borderColor: '#333333',
    brandDescription: 'NOVA IMPÉRIA accompagne les entrepreneurs dans leur développement professionnel avec des formations certifiées et un conseil personnalisé.',
    column1Title: 'Formations',
    column2Title: 'Prestations',
    column3Title: 'Entreprise',
    contactTitle: 'Contact',
    email: 'contact@novaimperia.fr',
    phone: '+33 1 23 45 67 89',
    address: '123 Avenue de l\'Entrepreneuriat, 75001 Paris',
    copyright: '© 2024 NOVA IMPÉRIA. Tous droits réservés.',
    legalLink1: 'Mentions légales',
    legalLink2: 'Politique de confidentialité',
    legalLink3: 'CGU',
    column1Links: [
      { label: 'Business & Entrepreneuriat' },
      { label: 'Marketing & Communication' },
      { label: 'Intelligence Artificielle' },
      { label: 'Management' }
    ],
    column2Links: [
      { label: 'Pack Lancement' },
      { label: 'Pack Communication' },
      { label: 'Pack Complet' },
      { label: 'Conseil personnalisé' }
    ],
    column3Links: [
      { label: 'À propos' },
      { label: 'Notre équipe' },
      { label: 'Nos valeurs' },
      { label: 'Carrières' }
    ]
  }),
}

FooterLink.schema = {
  name: 'footer-link',
  label: 'Footer Link',
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
    label: 'Lien',
    href: '#',
  }),
}

export { FooterNova, FooterLink }