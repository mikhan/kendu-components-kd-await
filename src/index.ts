import {LitElement, html, customElement, property, PropertyValues, TemplateResult} from 'lit-element'

@customElement('kd-await')
export class KdAwait extends LitElement {
  @property({attribute: false})
  public promise: Promise<any> | null = null
  private active: Boolean = true

  protected updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('promise') && this.promise) {
      this.hide()

      Promise.resolve(this.promise).then(() => (this.show()))
    }
  }

  public isActive(): Boolean {
    return this.active
  }

  protected hide(): Promise<unknown> {
    this.active = false
    return this.requestUpdate('active')
  }

  protected show(): Promise<unknown> {
    this.active = true
    return this.requestUpdate('active')
  }

  protected render(): TemplateResult {
    return html`${this.promise ? (this.active ? html`<slot></slot>` : html`<slot name="loader"><p>Cargando...</p></slot>`) : ''}`
  }
}
