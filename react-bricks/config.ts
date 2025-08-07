import Router from "next/router"
import { types } from "react-bricks/frontend"

import bricks from "./bricks"
import pageTypes from "./pageTypes"
import NextLink from "./NextLink"

const config: types.ReactBricksConfig = {
  appId: process.env.NEXT_PUBLIC_APP_ID || "nova-imperia-dev",
  apiKey: process.env.API_KEY || "dev-key",
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT || "development",
  bricks,
  pageTypes,
  customFields: [],
  logo: "/nova-imperia-logo.svg",
  renderLocalLink: NextLink,
  navigate: (path: string) => Router.push(path),
  loginPath: "/admin",
  editorPath: "/admin/editor",
  playgroundPath: "/admin/playground",
  appSettingsPath: "/admin/app-settings",
  previewPath: "/preview",
  isDarkColorMode: false,
  toggleColorMode: () => {},
  useCssInJs: false,
  appRootElement: "#__next",
  clickToEditSide: types.ClickToEditSide.BottomRight,
  enableAutoSave: true,
  disableSaveIfInvalidProps: false,
  enablePreview: true,
  blockIconsPosition: types.BlockIconsPosition.OutsideBlock,
  enableUnsplash: false,
  enablePreviewImage: true,
  enableDefaultEmbedBrick: true,
}

export default config
