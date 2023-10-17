export class RotatingPlanet {
  private el: HTMLElement
  private planet: HTMLElement
  private playButton: HTMLButtonElement
  private speedRangeInput: HTMLInputElement

  constructor(el: HTMLElement) {
    this.el = el
    this.planet = this.getPlanet()
    this.playButton = this.getPlayButton()
    this.speedRangeInput = this.getSpeedRangeInput()

    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.init()
  }

  public throw(selector: string): never {
    throw new Error(`Element with selector ${selector} is missing`)
  }

  public getPlanet() {
    return (
      this.el.querySelector<HTMLElement>('#planet') ?? this.throw('#planet')
    )
  }

  public getPlayButton() {
    return (
      this.el.querySelector<HTMLButtonElement>('#play-button') ??
      this.throw('#play-button')
    )
  }

  public getSpeedRangeInput() {
    return (
      this.el.querySelector<HTMLInputElement>('#speed') ?? this.throw('#speed')
    )
  }

  private handleUpdate(): void {
    const suffix = this.speedRangeInput.dataset.sizing || ''
    document.documentElement.style.setProperty(
      `--${this.speedRangeInput.name}`,
      `${this.speedRangeInput.value}${suffix}`
    )
  }

  private handleClick(): void {
    const paused = this.planet.style.animationPlayState || 'paused'
    if (paused === 'paused') {
      this.planet.style.animationPlayState = 'running'
      this.playButton.textContent = 'Pause'
    } else {
      this.planet.style.animationPlayState = 'paused'
      this.playButton.textContent = 'Play'
    }
  }

  private init() {
    this.speedRangeInput.addEventListener('change', this.handleUpdate)
    this.speedRangeInput.addEventListener('mousemove', this.handleUpdate)
    this.playButton.addEventListener('click', this.handleClick)
  }
}
