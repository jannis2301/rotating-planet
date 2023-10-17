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
})
