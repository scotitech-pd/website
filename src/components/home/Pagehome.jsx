import SubscribeSection from './SubscribeSection'
import ScotiTechPulse from './ScotiTechPulse '
import TrustAndCompliance from './TrustAndCompliance '
import UnlockSection from './UnlockSection'
import FaqSection from './FaqSection'

const Pagehome = () => {
  return (
    <>
    {/* Stay Ahead With ScotiTech */}
    <div className=''>
      <FaqSection/>
        <UnlockSection/>
        <TrustAndCompliance/>
        <ScotiTechPulse/>
        <SubscribeSection/>
    </div>
    </>
  )
}

export default Pagehome