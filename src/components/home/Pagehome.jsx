import SubscribeSection from './SubscribeSection'
import ScotiTechPulse from './ScotiTechPulse '
import TrustAndCompliance from './TrustAndCompliance '
import UnlockSection from './UnlockSection'

const Pagehome = () => {
  return (
    <>
    {/* Stay Ahead With ScotiTech */}
    <div className=''>
      <UnlockSection/>
        <TrustAndCompliance/>
        <ScotiTechPulse/>
        <SubscribeSection/>
    </div>
    </>
  )
}

export default Pagehome