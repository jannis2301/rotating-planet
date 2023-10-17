import { RotatingPlanet } from './RotatingPlanet'

const bootstrapper = () => {
  new RotatingPlanet(
    document.querySelector('.rotating-planet-container') as HTMLElement
  )
}

window.addEventListener('load', bootstrapper)
