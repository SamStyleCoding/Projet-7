import "./About.scss"
import { ApartementDescription } from '../../components/Apartement-description/ApartementDescription'
import { ApartementBanner } from '../../components/apartement-banner/ApartementBanner'


export default function About() {

  return (
	<div>
	  <ApartementBanner />
	  <div className='about-container'>
		<ApartementDescription title="Fiabilité" content="jqsbdcljqbdclhbl" />
		<ApartementDescription title="Recpect" content="jqsbdcljqbdclhbl" />
		<ApartementDescription title="Servise" content="jqsbdcljqbdclhbl" />
		<ApartementDescription title="Responsabilité" content="jqsbdcljqbdclhbl" />
	  </div>
	</div>
  )
}

