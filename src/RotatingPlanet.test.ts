import { RotatingPlanet } from './RotatingPlanet'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'

describe('RotatingPlanet', () => {
  let planet: RotatingPlanet

  beforeEach(() => {
    const mockElement = document.createElement('div')
    mockElement.innerHTML = `
      <div id="planet"></div>
      <button id="play-button">Play</button>
      <input
        id="speed"
        name="speed"
        type="range"
        min="1"
        max="40"
        step="2"
        data-sizing="s"
      />
    `

    document.body.appendChild(mockElement)
    planet = new RotatingPlanet(mockElement)
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('throw', () => {
    it('should throw an error for an invalid selector', () => {
      const invalidSelector = '.noElement'
      expect(() => planet.throw(invalidSelector)).toThrowError(
        `Element with selector ${invalidSelector} is missing`
      )
    })
  })

  it('should set animation play state to running and update button text on click', () => {
    const planetElement = planet.getPlanet()
    const playButton = planet.getPlayButton()
    // Set initial state to paused
    planetElement.style.animationPlayState = 'paused'
    playButton.textContent = 'Play'

    playButton.dispatchEvent(new MouseEvent('click'))

    expect(planetElement.style.animationPlayState).to.equal('running')
    expect(playButton.textContent).to.equal('Pause')
  })

  it('should set animation play state to paused and update button text on click', () => {
    const planetElement = planet.getPlanet()
    const playButton = planet.getPlayButton()

    // Set initial state to running
    planetElement.style.animationPlayState = 'running'
    playButton.textContent = 'Pause'

    playButton.dispatchEvent(new MouseEvent('click'))

    expect(planetElement.style.animationPlayState).to.equal('paused')
    expect(playButton.textContent).to.equal('Play')
  })

  it('should update CSS variable on speed input change', () => {
    const rootElement = document.documentElement
    const speedRangeInput = planet.getSpeedRangeInput()
    speedRangeInput.value = '39'
    speedRangeInput.dispatchEvent(new Event('change'))

    const cssPropertyValue = window
      .getComputedStyle(rootElement)
      .getPropertyValue('--speed')
    expect(cssPropertyValue).to.equal('39s')
  })
})
