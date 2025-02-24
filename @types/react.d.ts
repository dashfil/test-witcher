declare module '*.svg' {
  import React = require('react')

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >
  export default ReactComponent
}

declare type PropsWithTestId = {
  'data-testid'?: string
}

declare type PropsWithParams = {
  params: {
    locale: string
  }
}
