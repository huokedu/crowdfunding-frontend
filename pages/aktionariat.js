import React from 'react'
import withData from '../lib/withData'
import Frame from '../components/Frame'

import {
  H1, H2, P, A
} from '@project-r/styleguide'

import Table from '../components/Shareholder/Table'
import Sunburst, {radius} from '../components/Shareholder/Sunburst'

export default withData(({url}) => {
  const meta = {
    title: 'Aktionariat',
    description: ''
  }

  return (
    <Frame url={url} meta={meta} indented>
      <H1>
        Aktionariat
      </H1>
      <H2>
        Aktionariat Republik&nbsp;AG nach Anzahl Stimmen
      </H2>

      <div style={{maxWidth: radius * 2, margin: '20px 0'}}>
        <Sunburst />
      </div>

      <H2>Alle Aktionärinnen</H2>
      <Table />

      <P>
        Für Auskünfte kontaktieren Sie Susanne Sugimoto, Geschäftsführung und Kommunikation:
        {' '}
        <A href='mailto:susanne.sugimoto@republik.ch'>susanne.sugimoto@republik.ch</A>
      </P>
    </Frame>
  )
})
