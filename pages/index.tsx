import { Grid } from '@mui/material'
import { StaticImageData } from 'next/image'
import { CardComponent, FooterComponent, HeaderComponent } from '../components'
import TELEFE from '../public/images/telefe.png'
import TN from '../public/images/TN-logo.png'
import A24 from '../public/images/A24.png'
import C5N from '../public/images/C5N.png'
import CANAL26 from '../public/images/canal-26.svg'
import DEPORTV from '../public/images/deportv.png'
import TVPUBLICA from '../public/images/tv-publica.png'

interface Page {
  page: string,
  src: StaticImageData
}

const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      <Grid item xs={12} md={6} lg={3} className="main" component='main'>
      {
        array_page.map( (page, index) => (
          <CardComponent page={page.page} key={index} image={page.src} />
        ))
      }
      </Grid>
      <FooterComponent />
    </>
  )
}

export default HomePage



const array_page: Page[] = [
  {
    page: 'https://youtu.be/wHn1_QVoXGM',
    src: TN
  },
  {
    page: 'https://youtu.be/-jBuSK-Zi5E',
    src: TVPUBLICA
  },
  {
    page: 'https://youtu.be/y6Yr-aV6nfM',
    src: CANAL26
  },
  {
    page: 'https://youtu.be/WIPjYtR2N6s',
    src: A24
  },
  {
    page: 'https://youtu.be/V0Pgp7ZES_s',
    src: C5N
  },
  {
    page: 'https://youtu.be/9siObDJGnVY',
    src: DEPORTV
  },
  {
    page: 'https://youtu.be/06htSH24iuQ',
    src: TELEFE
  },
]
