import { types } from "react-bricks/frontend"
import layout from "./layout"
import HeroUnit from "./HeroUnit"
import features from "./features"
import NovaHeroSimple from "./NovaHeroSimple"
import { NovaServicesSimple, NovaServiceItem } from "./NovaServicesSimple"
import { NavbarNova, NavbarMenuItem } from "./NavbarNova"
import HeroNova from "./HeroNova"
import { FooterNova, FooterLink } from "./FooterNova"

const bricks: types.Brick[] = [
  // NOVA Components
  NavbarNova,
  NavbarMenuItem,
  HeroNova,
  FooterNova,
  FooterLink,
  
  // Previous Components
  HeroUnit,
  NovaHeroSimple,
  NovaServicesSimple,
  NovaServiceItem,
  ...layout, 
  ...features
]

export default bricks
