import React from 'react'
import { Text, RichText, Repeater, types, Link } from 'react-bricks/frontend'

const NovaServicesSimple: types.Brick = () => {
  return (
    <section style={{ 
      padding: '6rem 1rem',
      backgroundColor: '#fafafa'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '4rem' 
        }}>
          <Text
            propName="sectionTitle"
            placeholder="Nos Formations & Services"
            renderBlock={(props) => (
              <h2 style={{
                fontSize: '3rem',
                fontWeight: '900',
                color: '#000000',
                margin: '0 0 1rem 0'
              }} {...props} />
            )}
          />
          
          <RichText
            propName="sectionDescription"
            placeholder="Découvrez notre gamme complète de formations professionnelles et services de conseil."
            allowedFeatures={['bold', 'italic']}
            renderBlock={(props) => (
              <p style={{
                fontSize: '1.25rem',
                color: '#666666',
                maxWidth: '600px',
                margin: '0 auto'
              }} {...props} />
            )}
          />
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          <Repeater propName="services" />
        </div>

        {/* CTA */}
        <div style={{ 
          textAlign: 'center',
          padding: '3rem',
          backgroundColor: '#ffffff',
          borderRadius: '1rem',
          border: '1px solid #e5e5e5'
        }}>
          <Text
            propName="ctaTitle"
            placeholder="Prêt à transformer votre business ?"
            renderBlock={(props) => (
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '800',
                color: '#000000',
                margin: '0 0 2rem 0'
              }} {...props} />
            )}
          />
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="/formations"
              style={{
                backgroundColor: '#FCEB23',
                color: '#000000',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'inline-block'
              }}
            >
              <Text
                propName="ctaPrimary"
                placeholder="Voir toutes les formations"
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
                display: 'inline-block'
              }}
            >
              <Text
                propName="ctaSecondary"
                placeholder="Demander un conseil"
                renderBlock={(props) => <span {...props} />}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// Service Item Component
const NovaServiceItem: types.Brick = () => {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '2rem',
      borderRadius: '1rem',
      border: '1px solid #e5e5e5',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Icon/Badge */}
      <Text
        propName="badge"
        placeholder="🎯"
        renderBlock={(props) => (
          <div style={{
            fontSize: '3rem',
            marginBottom: '1rem'
          }}>
            <span {...props} />
          </div>
        )}
      />

      {/* Title */}
      <Text
        propName="title"
        placeholder="Formation Business & Entrepreneuriat"
        renderBlock={(props) => (
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#000000',
            margin: '0 0 1rem 0'
          }} {...props} />
        )}
      />

      {/* Description */}
      <RichText
        propName="description"
        placeholder="Développez vos compétences entrepreneuriales avec notre formation complète."
        allowedFeatures={['bold', 'italic']}
        renderBlock={(props) => (
          <p style={{
            color: '#666666',
            lineHeight: '1.6',
            margin: '0 0 1.5rem 0',
            flex: '1'
          }} {...props} />
        )}
      />

      {/* Features */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        marginBottom: '1.5rem',
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '0.5rem'
      }}>
        <Text
          propName="duration"
          placeholder="📅 3 jours"
          renderBlock={(props) => (
            <div style={{ fontSize: '0.9rem', color: '#555' }}>
              <span {...props} />
            </div>
          )}
        />
        <Text
          propName="participants"
          placeholder="👥 Max 12 personnes"
          renderBlock={(props) => (
            <div style={{ fontSize: '0.9rem', color: '#555' }}>
              <span {...props} />
            </div>
          )}
        />
        <Text
          propName="certification"
          placeholder="🏆 Formation certifiante"
          renderBlock={(props) => (
            <div style={{ fontSize: '0.9rem', color: '#555' }}>
              <span {...props} />
            </div>
          )}
        />
      </div>

      {/* Price */}
      <div style={{ marginBottom: '1.5rem' }}>
        <Text
          propName="price"
          placeholder="1 200€ HT"
          renderBlock={(props) => (
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              color: '#000000'
            }}>
              <span {...props} />
            </div>
          )}
        />
      </div>

      {/* Button */}
      <Link 
        href="#"
        style={{
          backgroundColor: '#000000',
          color: '#ffffff',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: '600',
          textAlign: 'center',
          display: 'block',
          marginTop: 'auto'
        }}
      >
        <Text
          propName="buttonText"
          placeholder="En savoir plus"
          renderBlock={(props) => <span {...props} />}
        />
      </Link>

      {/* Popular Badge */}
      <Text
        propName="popularBadge"
        placeholder=""
        renderBlock={(props) => {
          if (props.children) {
            return (
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                backgroundColor: '#FCEB23',
                color: '#000000',
                padding: '0.25rem 0.75rem',
                borderRadius: '15px',
                fontSize: '0.75rem',
                fontWeight: '700',
                textTransform: 'uppercase'
              }}>
                <span {...props} />
              </div>
            )
          }
          return null
        }}
      />
    </div>
  )
}

// Schemas
NovaServicesSimple.schema = {
  name: 'nova-services-simple',
  label: 'NOVA Services Section',
  category: 'services',

  repeaterItems: [
    {
      name: 'services',
      itemType: 'nova-service-item-simple',
      itemLabel: 'Service',
      min: 1,
      max: 8,
    },
  ],

  getDefaultProps: () => ({
    sectionTitle: 'Nos Formations & Services',
    sectionDescription: 'Découvrez notre gamme complète de formations professionnelles et services de conseil pour développer votre entreprise.',
    ctaTitle: 'Prêt à transformer votre business ?',
    ctaPrimary: 'Voir toutes les formations',
    ctaSecondary: 'Demander un conseil',
    services: [
      {
        badge: '🎯',
        title: 'Business & Entrepreneuriat',
        description: 'Développez vos compétences entrepreneuriales avec notre formation complète.',
        duration: '📅 3 jours',
        participants: '👥 Max 12 personnes',
        certification: '🏆 Formation certifiante',
        price: '1 200€ HT',
        buttonText: 'En savoir plus',
        popularBadge: 'Populaire'
      },
      {
        badge: '📈',
        title: 'Marketing & Communication',
        description: 'Maîtrisez les stratégies marketing modernes et la communication digitale.',
        duration: '📅 2 jours',
        participants: '👥 Max 15 personnes',
        certification: '🏆 Formation certifiante',
        price: '900€ HT',
        buttonText: 'En savoir plus'
      },
      {
        badge: '🤖',
        title: 'Intelligence Artificielle',
        description: 'Intégrez l\'IA dans votre business pour optimiser vos performances.',
        duration: '📅 1 jour',
        participants: '👥 Max 10 personnes',
        certification: '🏆 Formation certifiante',
        price: '600€ HT',
        buttonText: 'En savoir plus',
        popularBadge: 'Nouveau'
      }
    ]
  })
}

NovaServiceItem.schema = {
  name: 'nova-service-item-simple',
  label: 'Service Item',
  category: 'services',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    badge: '🎯',
    title: 'Formation Business',
    description: 'Développez vos compétences entrepreneuriales.',
    duration: '📅 3 jours',
    participants: '👥 Max 12 personnes',
    certification: '🏆 Formation certifiante',
    price: '1 200€ HT',
    buttonText: 'En savoir plus'
  })
}

export { NovaServicesSimple, NovaServiceItem }