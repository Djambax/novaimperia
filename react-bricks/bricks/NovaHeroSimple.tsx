import React from 'react'
import { Text, RichText, Image, types, Link } from 'react-bricks/frontend'

interface NovaHeroProps {
  backgroundColor: string
}

const NovaHeroSimple: types.Brick<NovaHeroProps> = ({ backgroundColor }) => {
  return (
    <section 
      style={{ 
        backgroundColor: backgroundColor || '#ffffff',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        padding: '4rem 1rem'
      }}
    >
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center'
      }}>
        {/* Content */}
        <div>
          <Text
            propName="badge"
            placeholder="🚀 NOVA IMPÉRIA"
            renderBlock={(props) => (
              <div style={{
                display: 'inline-block',
                backgroundColor: '#FCEB23',
                color: '#000000',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                <span {...props} />
              </div>
            )}
          />

          <Text
            propName="headline"
            placeholder="Transformez votre Business avec NOVA IMPÉRIA"
            renderBlock={(props) => (
              <h1 style={{
                fontSize: '3rem',
                fontWeight: '900',
                lineHeight: '1.1',
                margin: '0 0 1.5rem 0',
                color: '#000000'
              }} {...props} />
            )}
          />

          <RichText
            propName="description"
            placeholder="Organisme de formation et conseil spécialisé dans l'entrepreneuriat. Développez vos compétences et boostez votre business."
            allowedFeatures={['bold', 'italic']}
            renderBlock={(props) => (
              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.6',
                color: '#666666',
                margin: '0 0 2rem 0'
              }} {...props} />
            )}
          />

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link 
              href="/formations"
              style={{
                backgroundColor: '#FCEB23',
                color: '#000000',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'transform 0.2s',
                display: 'inline-block'
              }}
            >
              <Text
                propName="primaryButton"
                placeholder="Découvrir nos Formations"
                renderBlock={(props) => <span {...props} />}
              />
            </Link>

            <Link 
              href="/contact"
              style={{
                backgroundColor: 'transparent',
                color: '#000000',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                border: '2px solid #000000',
                transition: 'all 0.2s',
                display: 'inline-block'
              }}
            >
              <Text
                propName="secondaryButton"
                placeholder="Demander un Devis"
                renderBlock={(props) => <span {...props} />}
              />
            </Link>
          </div>
        </div>

        {/* Image */}
        <div style={{ textAlign: 'center' }}>
          <Image
            propName="heroImage"
            alt="NOVA IMPÉRIA Formation"
            maxWidth={500}
            aspectRatio={1.2}
            imageStyle={{
              borderRadius: '1rem',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
              width: '100%',
              height: 'auto'
            }}
          />
        </div>
      </div>
    </section>
  )
}

NovaHeroSimple.schema = {
  name: 'nova-hero-simple',
  label: 'NOVA Hero Section',
  category: 'hero',
  
  sideEditProps: [
    {
      name: 'backgroundColor',
      label: 'Background Color',
      type: types.SideEditPropType.Text,
    },
  ],

  getDefaultProps: () => ({
    backgroundColor: '#ffffff',
    badge: '🚀 NOVA IMPÉRIA',
    headline: 'Transformez votre Business avec NOVA IMPÉRIA',
    description: 'Organisme de formation et conseil spécialisé dans l\'entrepreneuriat. Développez vos compétences et boostez votre business avec nos formations certifiées.',
    primaryButton: 'Découvrir nos Formations',
    secondaryButton: 'Demander un Devis',
  }),
}

export default NovaHeroSimple