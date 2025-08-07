import React from 'react'
import Head from 'next/head'

const NovaDemo = () => {
  return (
    <>
      <Head>
        <title>NOVA IMPÉRIA - Demo</title>
        <meta name="description" content="Organisme de formation et conseil entrepreneurial" />
      </Head>

      {/* Hero Section */}
      <section style={{ 
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '4rem 1rem'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Content */}
          <div>
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
              🚀 NOVA IMPÉRIA
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: '900',
              lineHeight: '1.1',
              margin: '0 0 1.5rem 0',
              color: '#000000'
            }}>
              Transformez votre Business avec NOVA IMPÉRIA
            </h1>

            <p style={{
              fontSize: '1.25rem',
              lineHeight: '1.6',
              color: '#666666',
              margin: '0 0 2rem 0'
            }}>
              Organisme de formation et conseil spécialisé dans l'entrepreneuriat. 
              Développez vos compétences et boostez votre business avec nos formations certifiées.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
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
                onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
              >
                Découvrir nos Formations →
              </a>

              <a 
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
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#000000'
                  e.target.style.color = '#ffffff'
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent'
                  e.target.style.color = '#000000'
                }}
              >
                Demander un Devis
              </a>
            </div>

            {/* Trust indicators */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              marginTop: '3rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🏆</span>
                <span style={{ fontSize: '0.9rem', color: '#666' }}>Organisme Certifié</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>👥</span>
                <span style={{ fontSize: '0.9rem', color: '#666' }}>+500 Entrepreneurs Formés</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>⭐</span>
                <span style={{ fontSize: '0.9rem', color: '#666' }}>95% de Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div style={{ 
            textAlign: 'center',
            backgroundColor: '#f8f9fa',
            borderRadius: '1rem',
            padding: '3rem',
            border: '2px dashed #e9ecef'
          }}>
            <div style={{
              fontSize: '4rem',
              marginBottom: '1rem'
            }}>
              👑
            </div>
            <p style={{ color: '#666', margin: 0 }}>
              Image Hero NOVA IMPÉRIA<br />
              (Remplacer par votre visuel)
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '900',
              color: '#000000',
              margin: '0 0 1rem 0'
            }}>
              Nos Formations & Services
            </h2>
            
            <p style={{
              fontSize: '1.25rem',
              color: '#666666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Découvrez notre gamme complète de formations professionnelles et services de conseil.
            </p>
          </div>

          {/* Services Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {/* Service 1 */}
            <div style={{
              backgroundColor: '#ffffff',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid #e5e5e5',
              position: 'relative'
            }}>
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
                Populaire
              </div>
              
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
              
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#000000',
                margin: '0 0 1rem 0'
              }}>
                Business & Entrepreneuriat
              </h3>
              
              <p style={{
                color: '#666666',
                lineHeight: '1.6',
                margin: '0 0 1.5rem 0'
              }}>
                Développez vos compétences entrepreneuriales avec notre formation complète.
              </p>
              
              <div style={{
                backgroundColor: '#f8f9fa',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ fontSize: '0.9rem', color: '#555', marginBottom: '0.5rem' }}>📅 3 jours</div>
                <div style={{ fontSize: '0.9rem', color: '#555', marginBottom: '0.5rem' }}>👥 Max 12 personnes</div>
                <div style={{ fontSize: '0.9rem', color: '#555' }}>🏆 Formation certifiante</div>
              </div>
              
              <div style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                color: '#000000',
                marginBottom: '1.5rem'
              }}>
                1 200€ HT
              </div>
              
              <a 
                href="#"
                style={{
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  textAlign: 'center',
                  display: 'block'
                }}
              >
                En savoir plus →
              </a>
            </div>

            {/* Service 2 */}
            <div style={{
              backgroundColor: '#ffffff',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid #e5e5e5'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📈</div>
              
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#000000',
                margin: '0 0 1rem 0'
              }}>
                Marketing & Communication
              </h3>
              
              <p style={{
                color: '#666666',
                lineHeight: '1.6',
                margin: '0 0 1.5rem 0'
              }}>
                Maîtrisez les stratégies marketing modernes et la communication digitale.
              </p>
              
              <div style={{
                backgroundColor: '#f8f9fa',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ fontSize: '0.9rem', color: '#555', marginBottom: '0.5rem' }}>📅 2 jours</div>
                <div style={{ fontSize: '0.9rem', color: '#555', marginBottom: '0.5rem' }}>👥 Max 15 personnes</div>
                <div style={{ fontSize: '0.9rem', color: '#555' }}>🏆 Formation certifiante</div>
              </div>
              
              <div style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                color: '#000000',
                marginBottom: '1.5rem'
              }}>
                900€ HT
              </div>
              
              <a 
                href="#"
                style={{
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  textAlign: 'center',
                  display: 'block'
                }}
              >
                En savoir plus →
              </a>
            </div>

            {/* Service 3 */}
            <div style={{
              backgroundColor: '#ffffff',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid #e5e5e5',
              position: 'relative'
            }}>
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
                Nouveau
              </div>
              
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
              
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#000000',
                margin: '0 0 1rem 0'
              }}>
                Intelligence Artificielle
              </h3>
              
              <p style={{
                color: '#666666',
                lineHeight: '1.6',
                margin: '0 0 1.5rem 0'
              }}>
                Intégrez l'IA dans votre business pour optimiser vos performances.
              </p>
              
              <div style={{
                backgroundColor: '#f8f9fa',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ fontSize: '0.9rem', color: '#555', marginBottom: '0.5rem' }}>📅 1 jour</div>
                <div style={{ fontSize: '0.9rem', color: '#555', marginBottom: '0.5rem' }}>👥 Max 10 personnes</div>
                <div style={{ fontSize: '0.9rem', color: '#555' }}>🏆 Formation certifiante</div>
              </div>
              
              <div style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                color: '#000000',
                marginBottom: '1.5rem'
              }}>
                600€ HT
              </div>
              
              <a 
                href="#"
                style={{
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  textAlign: 'center',
                  display: 'block'
                }}
              >
                En savoir plus →
              </a>
            </div>
          </div>

          {/* CTA */}
          <div style={{ 
            textAlign: 'center',
            padding: '3rem',
            backgroundColor: '#ffffff',
            borderRadius: '1rem',
            border: '1px solid #e5e5e5'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '800',
              color: '#000000',
              margin: '0 0 2rem 0'
            }}>
              Prêt à transformer votre business ?
            </h3>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
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
                Voir toutes les formations
              </a>
              
              <a 
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
                Demander un conseil
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NovaDemo