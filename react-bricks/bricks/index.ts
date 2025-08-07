import { types } from "react-bricks/frontend"
import layout from "./layout"
import HeroUnit from "./HeroUnit"
import features from "./features"
import NovaHeroSimple from "./NovaHeroSimple"
import { NovaServicesSimple, NovaServiceItem } from "./NovaServicesSimple"

const bricks: types.Brick[] = [
  HeroUnit,
  NovaHeroSimple,
  NovaServicesSimple,
  NovaServiceItem,
  ...layout, 
  ...features
]

export default bricks
