import React from 'react'
import { Text, RichText, Image, types, Link } from 'react-bricks/frontend'
import { ArrowRight, Award, Users, Target, TrendingUp } from 'lucide-react'

interface HeroNovaProps {
  backgroundColor: string
  textColor: string
  accentColor: string
  showStats: boolean
  layout: 'centered' | 'left-right'
}

const HeroNova: types.Brick<HeroNovaProps> = ({ 
  backgroundColor = '#ffffff',
  textColor = '#000000',
  accentColor = '#FCEB23',
  showStats = true,
  layout = 'left-right'
}) => {
  const sectionStyle: React.CSSProperties = {
    backgroundColor,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '8rem',
    paddingBottom: '4rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    position: 'relative',
    overflow: 'hidden'
  }

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    display: layout === 'left-right' ? 'grid' : 'flex',
    gridTemplateColumns: layout === 'left-right' ? 'repeat(auto-fit, minmax(500px, 1fr))' : 'none',
    flexDirection: layout === 'centered' ? 'column' : 'row',
    gap: '3rem',
    alignItems: 'center',
    textAlign: layout === 'centered' ? 'center' : 'left',
    position: 'relative',
    zIndex: 2
  }

  const contentStyle: React.CSSProperties = {
    flex: 1,
    maxWidth: layout === 'centered' ? '800px' : 'none'
  }

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: accentColor,
    color: '#000000',
    padding: '0.75rem 1.5rem',
    borderRadius: '50px',
    fontSize: '0.95rem',
    fontWeight: '600',
    marginBottom: '2rem',
    border: '2px solid transparent',
    transition: 'all 0.3s ease'
  }

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(3rem, 6vw, 5rem)',
    fontWeight: '900',
    lineHeight: '1.1',
    margin: '0 0 1.5rem 0',
    color: textColor,
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  }

  const baselineStyle: React.CSSProperties = {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
    lineHeight: '1.6',
    color: '#666666',
    margin: '0 0 3rem 0',
    maxWidth: '600px'
  }

  const ctaContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: layout === 'centered' ? 'center' : 'flex-start',
    marginBottom: showStats ? '4rem' : '2rem'
  }

  const primaryCtaStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    backgroundColor: accentColor,
    color: '#000000',
    padding: '1rem 2rem',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1.1rem',
    transition: 'all 0.3s ease',
    border: '2px solid transparent',
    minWidth: '200px',
    justifyContent: 'center'
  }

  const secondaryCtaStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    backgroundColor: 'transparent',
    color: textColor,
    padding: '1rem 2rem',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1.1rem',
    border: `2px solid ${textColor}`,
    transition: 'all 0.3s ease',
    minWidth: '200px',
    justifyContent: 'center'
  }

  const statsContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    justifyContent: layout === 'centered' ? 'center' : 'flex-start',
    paddingTop: '2rem',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)'
  }

  const statItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '0.95rem',
    color: '#666666'
  }

  const imageContainerStyle: React.CSSProperties = {
    flex: 1,
    textAlign: 'center' as const,
    position: 'relative'
  }

  const imageWrapperStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    borderRadius: '2rem',
    overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)'
  }

  // Background elements
  const backgroundElements = (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      overflow: 'hidden'
    }}>
      {/* Gradient Orbs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: `radial-gradient(circle, ${accentColor}20 0%, transparent 70%)`,
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(0, 0, 0, 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse'
      }} />
    </div>
  )

  return (
    <section style={sectionStyle}>
      {backgroundElements}
      
      <div style={containerStyle}>
        {/* Content */}
        <div style={contentStyle}>
          {/* Badge */}
          <Text
            propName="badge"
            placeholder="🚀 NOVA IMPÉRIA"
            renderBlock={(props) => (
              <div style={badgeStyle}>
                <span {...props} />
              </div>
            )}
          />

          {/* Title */}
          <Text
            propName="title"
            placeholder="NOVA IMPÉRIA"
            renderBlock={(props) => (
              <h1 style={titleStyle} {...props} />
            )}
          />

          {/* Baseline */}
          <RichText
            propName="baseline"
            placeholder="Accompagner tous les entrepreneurs dans leur développement professionnel avec des formations certifiées et un conseil personnalisé."
            allowedFeatures={['bold', 'italic']}
            renderBlock={(props) => (
              <p style={baselineStyle} {...props} />
            )}
          />

          {/* CTAs */}
          <div style={ctaContainerStyle}>
            <Link href="/formations" style={primaryCtaStyle}>
              <Text
                propName="primaryCta"
                placeholder="Nos formations"
                renderBlock={(props) => <span {...props} />}
              />
              <ArrowRight size={20} />
            </Link>

            <Link href="/prestations" style={secondaryCtaStyle}>
              <Text
                propName="secondaryCta"
                placeholder="Nos prestations"
                renderBlock={(props) => <span {...props} />}
              />
              <TrendingUp size={20} />
            </Link>
          </div>

          {/* Trust Stats */}
          {showStats && (
            <div style={statsContainerStyle}>
              <div style={statItemStyle}>
                <Award size={20} style={{ color: accentColor }} />
                <Text
                  propName="stat1"
                  placeholder="Organisme certifié"
                  renderBlock={(props) => <span {...props} />}
                />
              </div>
              
              <div style={statItemStyle}>
                <Users size={20} style={{ color: accentColor }} />
                <Text
                  propName="stat2"
                  placeholder="+500 entrepreneurs formés"
                  renderBlock={(props) => <span {...props} />}
                />
              </div>
              
              <div style={statItemStyle}>
                <Target size={20} style={{ color: accentColor }} />
                <Text
                  propName="stat3"
                  placeholder="95% de satisfaction"
                  renderBlock={(props) => <span {...props} />}
                />
              </div>
            </div>
          )}
        </div>

        {/* Hero Image */}
        {layout === 'left-right' && (
          <div style={imageContainerStyle}>
            <div style={imageWrapperStyle}>
              <Image
                propName="heroImage"
                alt="NOVA IMPÉRIA - Formation & Conseil"
                maxWidth={600}
                aspectRatio={1.2}
                imageStyle={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
              
              {/* Floating Badge */}
              <Text
                propName="imageBadge"
                placeholder=""
                renderBlock={(props) => {
                  if (props.children) {
                    return (
                      <div style={{
                        position: 'absolute',
                        bottom: '1rem',
                        right: '1rem',
                        backgroundColor: accentColor,
                        color: '#000000',
                        padding: '0.75rem 1rem',
                        borderRadius: '1rem',
                        fontSize: '0.9rem',
                        fontWeight: '700',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                      }}>
                        <span {...props} />
                      </div>
                    )
                  }
                  return null
                }}
              />
            </div>
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>
    </section>
  )
}

// React Bricks Schema
HeroNova.schema = {
  name: 'hero-nova',
  label: 'NOVA Hero Section',
  category: 'hero',
  tags: ['hero', 'nova', 'homepage', 'cta'],

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
      name: 'layout',
      label: 'Layout',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: 'left-right', label: 'Left-Right' },
          { value: 'centered', label: 'Centered' },
        ],
      },
    },
    {
      name: 'showStats',
      label: 'Show Statistics',
      type: types.SideEditPropType.Boolean,
    },
  ],

  getDefaultProps: () => ({
    backgroundColor: '#ffffff',
    textColor: '#000000',
    accentColor: '#FCEB23',
    layout: 'left-right',
    showStats: true,
    badge: '🚀 NOVA IMPÉRIA',
    title: 'NOVA IMPÉRIA',
    baseline: 'Accompagner tous les entrepreneurs dans leur développement professionnel avec des formations certifiées et un conseil personnalisé.',
    primaryCta: 'Nos formations',
    secondaryCta: 'Nos prestations',
    stat1: 'Organisme certifié',
    stat2: '+500 entrepreneurs formés',
    stat3: '95% de satisfaction',
    imageBadge: 'Excellence'
  }),
}

export default HeroNova